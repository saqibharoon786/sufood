import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function SaddarRawalpindiPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 📍 Catering Services in Saddar Rawalpindi | <span className="text-orange-600">Affordable, Reliable & Professional Event Catering</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Saddar Rawalpindi is one of the busiest and most vibrant commercial areas in the city, known for its markets, offices, residential zones, and constant activity. From corporate meetings and office lunches to family gatherings and social events, the demand for catering services in Saddar Rawalpindi continues to grow rapidly.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              At SU Catering, we provide reliable and high-quality catering services tailored specifically for Saddar Rawalpindi. Our goal is to deliver fresh, delicious food along with professional service that ensures your event runs smoothly from start to finish.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Whether you are planning a small home gathering, a corporate meeting, or a large event, our team provides customized catering solutions designed to meet your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Catering in Saddar
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Why Catering Services Are in High Demand */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Catering Services in Saddar Rawalpindi Are in High Demand
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Saddar is a unique area that combines business activity with residential living. This creates a constant need for catering services that are fast and reliable, affordable for different budgets, flexible for small and large events, and easy to organize.
                </p>
                <p className="text-lg text-gray-600">
                  People in Saddar often require catering on short notice, which is why choosing an experienced and responsive catering service is essential.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <Clock className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fast & Reliable</h3>
                  <p className="text-sm text-gray-600">Quick delivery</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <Star className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Affordable</h3>
                  <p className="text-sm text-gray-600">Budget-friendly</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Flexible Events</h3>
                  <p className="text-sm text-gray-600">All sizes</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Easy Organization</h3>
                  <p className="text-sm text-gray-600">Simple process</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Catering Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Complete Catering Services in Saddar Rawalpindi
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              We provide a wide range of catering solutions designed for different types of clients.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏠</span>
                  <h3 className="text-2xl font-bold text-gray-900">Home Catering for Family Events</h3>
                </div>
                <p className="text-gray-600">
                  Family gatherings, birthdays, and small celebrations are common in Saddar. Our home catering services provide convenience, allowing you to enjoy your event without worrying about food preparation.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏢</span>
                  <h3 className="text-2xl font-bold text-gray-900">Corporate Catering for Offices</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Saddar has a large number of offices, shops, and businesses that require catering for meetings and daily operations.
                </p>
                <Link to="/corporate-catering-services" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                  👉 For business-focused solutions, explore our corporate catering services in Islamabad.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">💒</span>
                  <h3 className="text-2xl font-bold text-gray-900">Wedding & Social Event Catering</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We also provide catering services for weddings, engagements, and social events.
                </p>
                <Link to="/wedding-catering-services" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                  👉 For complete wedding solutions, visit our wedding catering services in Islamabad.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🔥</span>
                  <h3 className="text-2xl font-bold text-gray-900">BBQ & Outdoor Catering</h3>
                </div>
                <p className="text-gray-600">
                  Outdoor catering is popular for gatherings and events. We provide live BBQ services with fresh and flavorful food.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Menu Options */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Catering Menu Options in Saddar Rawalpindi
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our menu is designed to provide a balance of taste, variety, and affordability.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍛</span>
                  Traditional Pakistani Dishes
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Karahi</li>
                  <li>• Mutton Karahi</li>
                  <li>• Biryani</li>
                  <li>• Qorma</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍢</span>
                  BBQ & Grill Items
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Tikka</li>
                  <li>• Seekh Kabab</li>
                  <li>• Malai Boti</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍔</span>
                  Fast Food & Snacks
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Burgers</li>
                  <li>• Sandwiches</li>
                  <li>• Fries</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍰</span>
                  Desserts & Beverages
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Gulab Jamun</li>
                  <li>• Kheer</li>
                  <li>• Soft Drinks</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/menu" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                👉 Explore our complete catering menu for customization.
              </Link>
            </div>
          </div>
        </section>

        {/* Affordable Catering Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable Catering Services in Saddar Rawalpindi
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Affordability is one of the most important factors in Saddar. Our catering services are designed to provide high-quality food at competitive prices.
              </p>
              
              <p className="text-lg text-gray-600">
                We offer flexible packages that suit different budgets without compromising on quality.
              </p>
            </div>
          </div>
        </section>

        {/* Local Advantage */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Local Advantage – Catering in Saddar Rawalpindi
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Being familiar with Saddar allows us to provide:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
                  <Clock className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Faster Delivery</h3>
                  <p className="text-gray-600">Quick service</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Better Coordination</h3>
                  <p className="text-gray-600">Smooth operations</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
                  <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Reliable Service</h3>
                  <p className="text-gray-600">Dependable</p>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                This local experience ensures that your event runs smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* High-Impact SEO Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              High-Impact SEO Section (Local + Commercial Intent 🔥)
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Catering services in Saddar Rawalpindi are frequently searched by individuals and businesses looking for reliable and affordable catering solutions. Due to the area's busy nature, clients prefer caterers who can deliver quality food quickly and efficiently.
              </p>
              
              <p className="text-gray-600 mb-6">
                At SU Catering, we focus on providing services that match these requirements. Our catering solutions are designed to meet the needs of both residential and commercial clients, ensuring flexibility and reliability.
              </p>
              
              <p className="text-gray-600 mb-6">
                If you are searching for catering in Saddar Rawalpindi, best caterers near you, or affordable catering services, our team ensures a professional and hassle-free experience.
              </p>
              
              <p className="text-gray-600">
                👉 We also provide extended services through our <Link to="/catering-services-rawalpindi" className="text-orange-600 hover:text-orange-700">catering services in Rawalpindi</Link> for wider coverage.
              </p>
            </div>
          </div>
        </section>

        {/* Catering Packages for Different Needs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Catering Packages for Different Needs
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We offer customized packages based on:
              </p>
              
              <div className="bg-orange-50 p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Number of guests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Event type</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Menu selection</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                This flexibility allows us to serve both small and large events effectively.
              </p>
            </div>
          </div>
        </section>

        {/* How to Book */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              How to Book Catering Services in Saddar Rawalpindi
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Contact us</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share Event Details</h3>
                <p className="text-gray-600">Share event details</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Select Menu</h3>
                <p className="text-gray-600">Select menu</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Confirm Booking</h3>
                <p className="text-gray-600">Confirm booking</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Our team ensures smooth execution from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* Why Customers Trust Us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Customers Trust Our Catering Services
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Customers choose us because we provide:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
                  <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Reliable Service</h3>
                  <p className="text-gray-600">Dependable delivery</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
                  <Star className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Food</h3>
                  <p className="text-gray-600">Fresh & delicious</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
                  <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Affordable Pricing</h3>
                  <p className="text-gray-600">Budget-friendly</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl shadow-lg text-center">
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Experience</h3>
                  <p className="text-gray-600">Expert service</p>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                We aim to build long-term relationships by consistently delivering value.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              FAQs (SEO + Conversion Boost 🚀)
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering for small events?</h3>
                <p className="text-gray-600">Yes, we specialize in both small and large events.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can I customize my menu?</h3>
                <p className="text-gray-600">Yes, we offer full customization.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide corporate catering?</h3>
                <p className="text-gray-600">Yes, we provide catering for offices and businesses.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide BBQ catering?</h3>
                <p className="text-gray-600">Yes, we offer live BBQ catering services.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ How early should I book?</h3>
                <p className="text-gray-600">We recommend booking at least a few days in advance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Final Thoughts
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              If you are looking for reliable and affordable catering services in Saddar Rawalpindi, SU Catering is your trusted partner. With high-quality food, professional service, and flexible packages, we ensure your event is successful and stress-free.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Saddar Catering Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
