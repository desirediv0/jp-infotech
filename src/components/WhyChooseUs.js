import Image from "next/image";


const WhyChooseUs = () => {
    const features = [
        {
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
            title: "Post Sale Support",
            description: "We provide post sale support services to our customers with our engineers available 24*7."
        },
        {
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
            title: "Optimum Support",
            description: "Our team provides timely solutions to increase overall business process efficiency."
        },
        {
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
            title: "Installations",
            description: "Team of certified engineers helps our customers to carry out installations in a professional manner."
        }
    ];



    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl  font-bold text-gray-900 mb-4">
                        Why Choose JP INFOTECH?
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="flex justify-center mb-6">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={128}
                                    height={128}
                                    className="w-32 h-32 rounded-full object-cover shadow-md"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default WhyChooseUs;