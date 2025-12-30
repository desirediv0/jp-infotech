'use client';
import Link from 'next/link';
import ReusableHero from '../../components/ReusableHero';
import * as FiIcons from 'react-icons/fi';

export default function Services() {
    const services = [
        {
            icon: "shield",
            title: "Security",
            description: "JP INFOTECH provide various type of security like as Gateway level security, that protect your data from unauthorized access.",
            features: [
                "Firewall & Gateway Level Security Solutions",
                "End Host Security",
                "IoT Security",
                "Mobile Device Management"
            ]
        },
        {
            icon: "monitor",
            title: "Microsoft Solutions",
            description: "We are Microsoft Partner who offering various licensing, Office 365, Cloud Solutions, CRM and all other Microsoft products.",
            features: [
                "Microsoft Azure",
                "Microsoft 365",
                "Microsoft Teams",
                "Microsoft Office",
                "Microsoft Server"
            ]
        },
        {
            icon: "harddrive",
            title: "System Integration",
            description: "System Integration is the process of integrating all the physical and virtual components of an organizations system.",
            features: [
                "Hardware Integration",
                "Software Integration",
                "Network Integration",
                "Cloud Integration"
            ]
        },
        {
            icon: "database",
            title: "Infrastructure Consult",
            description: "Our highly skilled specialists will help determine the current status of IT in your organization.",
            features: [
                "IT Assessment",
                "Infrastructure Planning",
                "Technology Roadmap",
                "Cost Optimization"
            ]
        },
        {
            icon: "settings",
            title: "Turnkey Projects",
            description: "We provide end-to-end IT infrastructure solutions at your doorstep.",
            features: [
                "Project Planning",
                "Implementation",
                "Testing",
                "Training",
                "Support & Maintenance"
            ]
        },
        {
            icon: "users",
            title: "Active/Passive Networking",
            description: "A computer network is a group of two or more interconnected computer systems.",
            features: [
                "Network Design",
                "Implementation",
                "Maintenance",
                "Troubleshooting"
            ]
        },
        {
            icon: "server",
            title: "AMC/FMS And Resident Engineers",
            description: "We specialize in providing onsite/offsite AMC services/resident services.",
            features: [
                "Annual Maintenance Contract",
                "Facility Management Services",
                "Resident Engineers",
                "24/7 Support"
            ]
        },
        {
            icon: "cloud",
            title: "Server and Storage Solutions",
            description: "We provide end-to-end solutions, implementation and consultation to design, storage and infrastructure solutions.",
            features: [
                "Server Solutions",
                "Storage Solutions",
                "Backup Solutions",
                "Disaster Recovery"
            ]
        },
        {
            icon: "laptop",
            title: "IT Equipment on Rental",
            description: "We provide laptop, desktop and IT equipment rent to help the customer with flexible IT infrastructure.",
            features: [
                "Laptops",
                "Desktops",
                "Servers",
                "Networking Equipment"
            ]
        }
    ];

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'shield': return <FiIcons.FiShield size={48} />;
            case 'monitor': return <FiIcons.FiMonitor size={48} />;
            case 'harddrive': return <FiIcons.FiHardDrive size={48} />;
            case 'database': return <FiIcons.FiDatabase size={48} />;
            case 'settings': return <FiIcons.FiSettings size={48} />;
            case 'users': return <FiIcons.FiUsers size={48} />;
            case 'server': return <FiIcons.FiServer size={48} />;
            case 'cloud': return <FiIcons.FiCloud size={48} />;
            case 'laptop': return <FiIcons.FiMonitor size={48} />; icon
            default: return <FiIcons.FiShield size={48} />;
        }
    };

    return (
        <div className="min-h-screen">
            <ReusableHero
                title="Our Services"
                description="As a contractor we promise to take care of your project from start to finish, deliver it on time, specified budget and quality."
                buttonText="Contact Us"
                buttonLink="/contact"
                imageSrc="/service.jpg"
                backgroundColor="bg-gradient-to-r from-purple-100 to-[#cbb8fb]"
            />

            {/* Services Grid */}
            <section className="py-16 lg:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                                <div className="text-4xl mb-6 text-[#37119f]">
                                    {getIcon(service.icon)}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-[#37119f] mr-2 mt-1">•</span>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-[#160640] py-14">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl  font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Contact us today to learn more about how our services can help your business grow.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-white text-[#160640] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
}