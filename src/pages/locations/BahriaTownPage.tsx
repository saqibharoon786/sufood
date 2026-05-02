import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function BahriaTownPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 📍 Catering Services in Bahria Town | <span className="text-purple-600">Reliable, Affordable & Event-Focused Catering</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              When it comes to organizing events in Bahria Town, one of the most important elements that defines success is the quality of food and catering service. SU Catering provides specialized catering services in Bahria Town designed to meet the needs of families, professionals, and event planners who expect both quality and convenience.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Bahria Town is known for its organized communities, modern lifestyle, and frequent social events. From birthday parties and weddings to corporate meetups and private dinners, every event demands a catering partner that understands local expectations. Our team delivers a complete catering experience, combining taste, presentation, and punctual service.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              If you are searching for catering in Bahria Town, professional caterers near you, or affordable catering services with premium quality, SU Catering is ready to serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Catering in Bahria Town
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              What Makes Our Catering Services in Bahria Town Different?
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Catering in Bahria Town is not just about food — it's about delivering a smooth and stress-free experience. Our approach focuses on reliability, customization, and consistent quality.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Here's what sets us apart: we have local experience in Bahria Town events, provide fast and reliable delivery within the community, offer flexible menus for different types of gatherings, and maintain a focus on taste, hygiene, and presentation with transparent pricing and no hidden costs.
                </p>
                <p className="text-lg text-gray-600">
                  We understand the expectations of Bahria Town residents and ensure that every event is handled professionally.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors">
                  <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Local Experience</h3>
                  <p className="text-sm text-gray-600">Bahria Town events expert</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors">
                  <Clock className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Reliable community service</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors">
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Flexible Menus</h3>
                  <p className="text-sm text-gray-600">Customized options</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Focus</h3>
                  <p className="text-sm text-gray-600">Taste & hygiene priority</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event-Based Catering Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Event-Based Catering Services in Bahria Town
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our catering services are designed to cover a wide range of events, ensuring that every customer finds a solution that fits their needs.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">💒</span>
                  <h3 className="text-2xl font-bold text-gray-900">Wedding Catering in Bahria Town</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Weddings in Bahria Town often take place in homes, marquees, or event venues. We provide catering solutions that match the scale and style of your wedding.
                </p>
                <Link to="/wedding-catering-services" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                  👉 For complete wedding solutions, explore our wedding catering services in Islamabad.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏢</span>
                  <h3 className="text-2xl font-bold text-gray-900">Corporate Catering for Offices & Businesses</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We offer professional catering for offices, meetings, and corporate events within Bahria Town.
                </p>
                <Link to="/corporate-catering-services" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                  👉 For business-focused solutions, explore our corporate catering services in Islamabad.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🎂</span>
                  <h3 className="text-2xl font-bold text-gray-900">Birthday & Family Event Catering</h3>
                </div>
                <p className="text-gray-600">
                  Planning a birthday or small gathering? Our catering services are perfect for home-based events with customized menus and quick setup.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🔥</span>
                  <h3 className="text-2xl font-bold text-gray-900">BBQ & Outdoor Catering</h3>
                </div>
                <p className="text-gray-600">
                  We provide live BBQ catering for outdoor events, rooftops, and lawn gatherings within Bahria Town.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Menu Options */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Catering Menu Options in Bahria Town
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our menu is carefully designed to suit a variety of tastes and event types.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍛</span>
                  Desi Food Options
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Karahi</li>
                  <li>• Mutton Karahi</li>
                  <li>• Biryani</li>
                  <li>• Qorma</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍢</span>
                  BBQ Specialties
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Tikka</li>
                  <li>• Seekh Kabab</li>
                  <li>• Malai Boti</li>
                  <li>• BBQ Wings</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍝</span>
                  Fast Food & Light Meals
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Burgers</li>
                  <li>• Sandwiches</li>
                  <li>• Pasta</li>
                  <li>• Fries</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍰</span>
                  Desserts & Drinks
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Gulab Jamun</li>
                  <li>• Kheer</li>
                  <li>• Ice Cream</li>
                  <li>• Soft Drinks</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/menu" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                👉 Check our complete catering menu for full customization.
              </Link>
            </div>
          </div>
        </section>

        {/* Flexible Catering Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Flexible Catering Packages in Bahria Town
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Every event has different requirements, which is why we offer flexible catering packages based on:
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Number of guests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Event type</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Menu selection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Service level</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Whether you need a simple home catering setup or a full-service event package, we provide options that match your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Affordable Catering Services */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable Catering Services in Bahria Town
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We understand that not every event requires a high budget. That's why we offer cost-effective catering solutions without compromising quality.
              </p>
              
              <p className="text-lg text-gray-600">
                If you are looking for affordable catering services in Bahria Town, our packages are designed to deliver value with great taste and professional service.
              </p>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Areas Covered in Bahria Town
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                We provide catering services across all major sectors:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Bahria Town Phase 1–6</span>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Bahria Enclave</span>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Bahria Safari Valley</span>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Bahria Civic Center</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                👉 We also provide <Link to="/catering-services-rawalpindi" className="text-purple-600 hover:text-purple-700">catering services in Rawalpindi</Link> and nearby areas.
              </p>
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Local SEO Section (Bahria Focus 🔥)
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Catering services in Bahria Town are in high demand due to the growing number of residential and social events. Families and businesses in this area prefer reliable caterers who can provide consistent quality and timely service.
              </p>
              
              <p className="text-gray-600 mb-6">
                SU Catering focuses specifically on serving Bahria Town clients by offering localized catering solutions. Our team understands the logistics, timing, and expectations within the community, allowing us to deliver a smooth and efficient service.
              </p>
              
              <p className="text-gray-600">
                If you are searching for caterers in Bahria Town, home catering services, or event catering near you, we provide tailored solutions that ensure satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Why Local Catering Matters */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Local Catering Matters in Bahria Town
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Faster Delivery</h3>
                <p className="text-gray-600">Quick setup and service</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Local Venues</h3>
                <p className="text-gray-600">Better understanding</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Star className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Cost Efficiency</h3>
                <p className="text-gray-600">Budget-friendly options</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Better Coordination</h3>
                <p className="text-gray-600">Smooth communication</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Our experience in Bahria Town allows us to deliver a better and more reliable catering experience.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Booking Process – Simple & Fast
            </h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Contact us</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share Event Details</h3>
                <p className="text-gray-600">Share event details</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Select Menu</h3>
                <p className="text-gray-600">Select menu</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Confirm Booking</h3>
                <p className="text-gray-600">Confirm booking</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Our team ensures a smooth process from start to finish.
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
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering in all Bahria Town phases?</h3>
                <p className="text-gray-600">Yes, we cover all phases and sectors of Bahria Town.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can I customize the catering menu?</h3>
                <p className="text-gray-600">Yes, we offer fully customizable menu options.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering for small events?</h3>
                <p className="text-gray-600">Yes, we specialize in both small and large events.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you offer BBQ catering?</h3>
                <p className="text-gray-600">Yes, we provide live BBQ catering services.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering in Islamabad?</h3>
                <p className="text-gray-600">Yes, we also offer <Link to="/catering-services-islamabad" className="text-purple-600 hover:text-purple-700">catering services in Islamabad</Link>.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ How early should I book?</h3>
                <p className="text-gray-600">We recommend booking at least 1 week in advance.</p>
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
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              If you are looking for reliable catering services in Bahria Town, SU Catering is your trusted partner. With a focus on quality, affordability, and customer satisfaction, we ensure that every event is handled professionally and efficiently.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Bahria Town Catering Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
