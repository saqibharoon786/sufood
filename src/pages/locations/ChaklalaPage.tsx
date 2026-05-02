import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function ChaklalaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 📍 Catering Services in Chaklala Rawalpindi | <span className="text-green-600">Premium Home, Event & Corporate Catering</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Chaklala Rawalpindi is one of the most well-established and strategically located areas in the city, known for its residential communities, proximity to commercial zones, and frequent social gatherings. From family events and weddings to corporate meetings and private parties, the demand for reliable catering services in Chaklala Rawalpindi continues to grow.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              At SU Catering, we provide professional and high-quality catering services specifically designed for Chaklala residents and businesses. Our goal is to deliver fresh, flavorful food with efficient service that ensures your event is executed perfectly.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Whether you are planning a home event, a corporate function, or a large gathering, we offer customized catering solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Catering in Chaklala
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Why Catering Services Require Experience */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Catering Services in Chaklala Require Experience
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Chaklala has a mix of residential and semi-commercial environments, which means catering services must be flexible and well-organized.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our services are designed to meet these challenges by offering quick and reliable delivery, flexible catering options, high-quality food preparation, and professional service.
                </p>
                <p className="text-lg text-gray-600">
                  We understand the local environment and ensure smooth coordination for every event.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors">
                  <Clock className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Delivery</h3>
                  <p className="text-sm text-gray-600">Reliable service</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors">
                  <Star className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Flexible Options</h3>
                  <p className="text-sm text-gray-600">Customized solutions</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">High Quality</h3>
                  <p className="text-sm text-gray-600">Fresh preparation</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Service</h3>
                  <p className="text-sm text-gray-600">Expert team</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Catering Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Complete Catering Services in Chaklala Rawalpindi
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏠</span>
                  <h3 className="text-2xl font-bold text-gray-900">Home Catering Services</h3>
                </div>
                <p className="text-gray-600">
                  Family gatherings and private events are common in Chaklala. Our home catering services allow you to host events without worrying about food preparation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">💒</span>
                  <h3 className="text-2xl font-bold text-gray-900">Wedding & Event Catering</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We provide catering services for weddings, engagements, and social functions with complete setup and service.
                </p>
                <Link to="/wedding-catering-services" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                  👉 Explore our wedding catering services in Islamabad for larger events.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏢</span>
                  <h3 className="text-2xl font-bold text-gray-900">Corporate Catering Services</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Businesses in Chaklala often require catering for meetings and staff meals.
                </p>
                <Link to="/corporate-catering-services" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                  👉 Check our corporate catering services.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🔥</span>
                  <h3 className="text-2xl font-bold text-gray-900">BBQ & Outdoor Catering</h3>
                </div>
                <p className="text-gray-600">
                  Outdoor events and BBQ gatherings are popular in Chaklala. We provide live cooking services for a better experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Menu for Chaklala Clients */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Catering Menu for Chaklala Clients
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our menu is designed to suit a wide range of tastes.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍛</span>
                  Traditional Dishes
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Karahi</li>
                  <li>• Mutton Karahi</li>
                  <li>• Biryani</li>
                  <li>• Qorma</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍢</span>
                  BBQ Items
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Tikka</li>
                  <li>• Seekh Kabab</li>
                  <li>• Malai Boti</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍔</span>
                  Fast Food Options
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Burgers</li>
                  <li>• Sandwiches</li>
                  <li>• Fries</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍰</span>
                  Desserts & Drinks
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Gulab Jamun</li>
                  <li>• Kheer</li>
                  <li>• Soft Drinks</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/menu" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                👉 Customize your order through our complete catering menu.
              </Link>
            </div>
          </div>
        </section>

        {/* Affordable & Flexible Catering Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable & Flexible Catering Packages
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We provide customized packages based on:
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Number of guests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Event type</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Menu selection</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Our goal is to provide value-driven solutions without compromising quality.
              </p>
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Local SEO Section (Chaklala Focus 🔥)
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Catering services in Chaklala Rawalpindi are in high demand due to the area's active residential lifestyle and frequent events. Residents often search for reliable caterers who can deliver high-quality food quickly and efficiently.
              </p>
              
              <p className="text-gray-600 mb-6">
                At SU Catering, we provide solutions tailored specifically for Chaklala clients. Our services focus on convenience, quality, and reliability, ensuring that every event is successful.
              </p>
              
              <p className="text-gray-600">
                👉 We also offer extended services through our <Link to="/catering-services-rawalpindi" className="text-green-600 hover:text-green-700">catering services in Rawalpindi</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Booking Process
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Contact us</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share Details</h3>
                <p className="text-gray-600">Share details</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Select Menu</h3>
                <p className="text-gray-600">Select menu</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Confirm Booking</h3>
                <p className="text-gray-600">Confirm booking</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              FAQs
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you provide catering for small events? → Yes</h3>
                <p className="text-gray-600">Yes, we specialize in both small and large events.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I customize menu? → Yes</h3>
                <p className="text-gray-600">Yes, we offer fully customizable menu options.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you provide staff? → Yes</h3>
                <p className="text-gray-600">Yes, we provide complete service including staff.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              For reliable catering services in Chaklala Rawalpindi, SU Catering provides high-quality food, professional service, and affordable packages.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Chaklala Catering Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
