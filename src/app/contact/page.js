'use client';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import ReusableHero from '../../components/ReusableHero';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({ show: false, type: '', message: '' });

    // Validate form fields
    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Show notification
    const showNotification = (type, message) => {
        setNotification({ show: true, type, message });
        setTimeout(() => {
            setNotification({ show: false, type: '', message: '' });
        }, 5000);
    };

    // Reset form
    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
        setErrors({});
    };

    const handleSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                showNotification('success', result.message);
                resetForm();
            } else {
                showNotification('error', result.error || 'Failed to send message. Please try again.');
            }

            return response;
        } catch (error) {
            console.error('Error submitting form:', error);
            showNotification('error', 'Network error. Please check your connection and try again.');
            return null;
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="min-h-screen bg-gray-50">
            <ReusableHero
                title="Contact Us"
                description="Have questions or need assistance? Our team is ready to help."
                imageSrc="/contact.jpg"
                backgroundColor="bg-gradient-to-r from-purple-100 to-[#cbb8fb]"
                showbtn={false}
            />

            {/* Locations Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Locations</h2>

                    <div className="grid grid-cols-1 gap-8 mb-16">
                        {/* Head Office */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Head Office</h3>
                                <p className="text-gray-600 mb-4">
                                    Surat Nagar Phase 2, Gurugram - 122006
                                </p>
                            </div>
                            <div className="h-64 bg-gray-100 flex items-center justify-center">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2894564892703!2d77.04273431506485!3d28.459484982483067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18db1b8b1b1b%3A0x1b1b1b1b1b1b1b1b!2sSurat%20Nagar%202%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1635764556789!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>


                    </div>

                    {/* Contact Information and Form */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <FiMapPin className="text-[#160740] text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">Head Office</h3>
                                </div>
                                <p className="text-gray-600 ml-9">
                                    Surat Nagar Phase 2,<br />
                                    Gurugram - 122006
                                </p>
                            </div>


                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <FiMail className="text-[#160740] text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                                </div>
                                <p className="text-[#160740] ml-9 hover:underline">
                                    <a href="mailto:sales@jpinfotech.net.in">sales@jpinfotech.net.in</a>
                                </p>
                            </div>

                            <div className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center mb-4">
                                    <FiPhone className="text-[#160740] text-2xl mr-3" />
                                    <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                                </div>
                                <p className="text-gray-600 ml-9">
                                    <a href="tel:+91-9667092504" className="hover:text-[#160740]">+91-9667092504</a>
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>

                            {/* Notification Banner */}
                            {notification.show && (
                                <div className={`p-4 mb-6 rounded-lg ${notification.type === 'success'
                                    ? 'bg-green-50 text-green-800 border border-green-200'
                                    : 'bg-red-50 text-red-800 border border-red-200'
                                    }`}>
                                    {notification.message}
                                </div>
                            )}

                            <form className="space-y-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => {
                                            setFormData({ ...formData, name: e.target.value });
                                            if (errors.name) {
                                                setErrors({ ...errors, name: '' });
                                            }
                                        }}
                                        placeholder="Enter your Name"
                                        className={`w-full px-4 py-3 border rounded-lg transition-colors
                                            ${errors.name
                                                ? 'border-red-300 focus:ring-red-200'
                                                : 'border-gray-300 focus:ring-2 focus:ring-[#160740]'} 
                                            focus:border-transparent`}
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                    )}
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => {
                                            setFormData({ ...formData, email: e.target.value });
                                            if (errors.email) {
                                                setErrors({ ...errors, email: '' });
                                            }
                                        }}
                                        placeholder="Enter your Email"
                                        className={`w-full px-4 py-3 border rounded-lg transition-colors
                                            ${errors.email
                                                ? 'border-red-300 focus:ring-red-200'
                                                : 'border-gray-300 focus:ring-2 focus:ring-[#160740]'} 
                                            focus:border-transparent`}
                                    />
                                    <FiMail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="Enter your Phone (Optional)"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#160740] focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => {
                                            setFormData({ ...formData, subject: e.target.value });
                                            if (errors.subject) {
                                                setErrors({ ...errors, subject: '' });
                                            }
                                        }}
                                        placeholder="Enter your Subject"
                                        className={`w-full px-4 py-3 border rounded-lg transition-colors
                                            ${errors.subject
                                                ? 'border-red-300 focus:ring-red-200'
                                                : 'border-gray-300 focus:ring-2 focus:ring-[#160740]'} 
                                            focus:border-transparent`}
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                                    )}
                                </div>
                                <div className="relative">
                                    <textarea
                                        placeholder="Write your message"
                                        value={formData.message}
                                        onChange={(e) => {
                                            setFormData({ ...formData, message: e.target.value });
                                            if (errors.message) {
                                                setErrors({ ...errors, message: '' });
                                            }
                                        }}
                                        rows="4"
                                        className={`w-full px-4 py-3 border rounded-lg transition-colors resize-none
                                            ${errors.message
                                                ? 'border-red-300 focus:ring-red-200'
                                                : 'border-gray-300 focus:ring-2 focus:ring-[#160740]'} 
                                            focus:border-transparent`}
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        if (validateForm()) {
                                            await handleSubmit(formData);
                                        }
                                    }}
                                    disabled={isSubmitting}
                                    className={`w-full bg-[#160740] text-white py-3 px-6 rounded-lg transition-all
                                        ${isSubmitting
                                            ? 'opacity-75 cursor-not-allowed'
                                            : 'hover:bg-opacity-90 hover:shadow-lg'} 
                                        font-medium flex items-center justify-center`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}