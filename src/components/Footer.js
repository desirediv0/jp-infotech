import Link from 'next/link';
import { FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-[#160640] text-white border-t border-gray-700">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* About Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-200 text-sm">
                            Delivering innovative tech solutions for tomorrow&apos;s challenges.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-200 hover:text-white transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-200 hover:text-white transition-colors text-sm">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-200 hover:text-white transition-colors text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-2 text-sm text-gray-200">
                            <p>Surat Nagar Phase 2</p>
                            <p>Gurugram- 122006</p>
                            <p>Phone: +91-9667092504</p>
                            <p></p>
                        </div>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect Us</h3>
                        <div className="flex space-x-4">
                            <a href="mailto:sales@jpinfotech.net.in" className="text-gray-200 hover:text-white transition-colors">
                                <FiMail size={24} />
                            </a>
                            <span>sales@jpinfotech.net.in</span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-gray-200 text-sm">© 2025 JP Infotech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;