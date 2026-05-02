import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function G11IslamabadPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 📍 Catering Services in G-11 Islamabad | <span className="text-blue-600">Affordable, Reliable & High-Quality Event Catering</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              G-11 Islamabad is one of the most densely populated and active residential sectors of the city, where family events, social gatherings, and community functions take place regularly. In such a dynamic environment, finding dependable catering services in G-11 Islamabad becomes essential for hosting successful and stress-free events.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              At SU Catering, we specialize in providing practical, affordable, and high-quality catering solutions tailored specifically for G-11 residents. Our services are designed to meet the needs of families, small event organizers, and local businesses who want reliable catering without unnecessary complexity.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              If you are searching for catering in G-11 Islamabad, budget-friendly caterers near you, or complete event catering solutions, our team ensures a smooth and satisfying experience from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Catering in G-11
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Understanding Catering Needs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Understanding Catering Needs in G-11 Islamabad
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Unlike high-end sectors, G-11 has a mix of middle-income families, rental residents, and small-scale businesses. This creates a unique demand for catering services that are affordable yet high-quality, flexible for small and medium events, quick and efficient in delivery, and easy to book and customize.
                </p>
                <p className="text-lg text-gray-600">
                  Our catering services are built around these needs, making us a practical choice for G-11 clients.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Affordable Quality</h3>
                  <p className="text-sm text-gray-600">Budget-friendly options</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quick Delivery</h3>
                  <p className="text-sm text-gray-600">Fast and efficient</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Flexible Events</h3>
                  <p className="text-sm text-gray-600">Small & medium gatherings</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Easy Booking</h3>
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
              Complete Catering Services in G-11 Islamabad
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              We offer a wide range of catering solutions designed for different types of events.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏠</span>
                  <h3 className="text-2xl font-bold text-gray-900">Home Catering for Family Events</h3>
                </div>
                <p className="text-gray-600">
                  Family gatherings are very common in G-11, including birthdays, dinners, and small celebrations. Our home catering services are designed to provide convenience and quality without the stress of cooking.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">💒</span>
                  <h3 className="text-2xl font-bold text-gray-900">Wedding & Engagement Catering</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We provide catering services for smaller wedding functions such as engagements, mehndi, and intimate gatherings.
                </p>
                <Link to="/wedding-catering-services" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  👉 For full-scale wedding events, explore our wedding catering services in Islamabad.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏢</span>
                  <h3 className="text-2xl font-bold text-gray-900">Corporate & Office Catering</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Small offices and businesses in G-11 require simple and reliable catering for meetings and staff meals.
                </p>
                <Link to="/corporate-catering-services" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  👉 Check our corporate catering services for business solutions.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🔥</span>
                  <h3 className="text-2xl font-bold text-gray-900">Outdoor & BBQ Catering</h3>
                </div>
                <p className="text-gray-600">
                  We also provide BBQ catering for outdoor events and gatherings, offering freshly prepared food on-site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Menu */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Catering Menu – Balanced for Taste & Budget
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our menu is designed to provide a balance between affordability and quality.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍛</span>
                  Traditional Pakistani Dishes
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Karahi</li>
                  <li>• Biryani</li>
                  <li>• Qorma</li>
                  <li>• Pulao</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍢</span>
                  BBQ & Grilled Items
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Tikka</li>
                  <li>• Seekh Kabab</li>
                  <li>• Malai Boti</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
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
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍰</span>
                  Desserts & Drinks
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Kheer</li>
                  <li>• Gulab Jamun</li>
                  <li>• Soft Drinks</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/menu" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                👉 View our complete catering menu for customization.
              </Link>
            </div>
          </div>
        </section>

        {/* Affordable Catering Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable Catering Packages in G-11 Islamabad
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Affordability is a key factor in G-11. Our catering packages are designed to provide value without compromising on quality.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Packages depend on:
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-3 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Number of guests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Menu selection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Event type</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                We ensure transparent pricing with no hidden costs.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Local Catering */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Choose Local Catering in G-11?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-lg text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Faster Delivery</h3>
                <p className="text-gray-600">Quick service</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-lg text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Better Coordination</h3>
                <p className="text-gray-600">Smooth operations</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-lg text-center">
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Lower Transportation Costs</h3>
                <p className="text-gray-600">Budget-friendly</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl shadow-lg text-center">
                <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">More Reliable Service</h3>
                <p className="text-gray-600">Dependable</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Our experience in G-11 allows us to deliver a smooth and efficient catering experience.
              </p>
            </div>
          </div>
        </section>

        {/* High-Impact SEO Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              High-Impact SEO Section (G-11 Focus 🔥)
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Catering services in G-11 Islamabad are frequently searched by residents planning family events and small gatherings. The demand is particularly high for affordable catering services that can deliver good food within a reasonable budget.
              </p>
              
              <p className="text-gray-600 mb-6">
                SU Catering focuses on providing solutions that meet these expectations. Our services are designed for clients who want reliable catering without overspending.
              </p>
              
              <p className="text-gray-600">
                If you are searching for caterers in G-11 Islamabad, home catering services, or cheap catering options near you, we provide practical solutions that ensure satisfaction.
              </p>
            </div>
          </div>
        </section>

        {/* Simple Booking Process */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Simple Booking Process
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Contact us</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share Event Details</h3>
                <p className="text-gray-600">Share event details</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Select Menu</h3>
                <p className="text-gray-600">Select menu</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Confirm Booking</h3>
                <p className="text-gray-600">Confirm booking</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              FAQs
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering for small events?</h3>
                <p className="text-gray-600">Yes, we specialize in small and medium events.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can I customize the menu?</h3>
                <p className="text-gray-600">Yes, menu customization is available.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide staff?</h3>
                <p className="text-gray-600">Yes, we provide complete service.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you offer BBQ catering?</h3>
                <p className="text-gray-600">Yes, we provide outdoor BBQ catering.</p>
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
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              If you are looking for affordable and reliable catering services in G-11 Islamabad, SU Catering provides the perfect combination of quality, convenience, and value.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book Your G-11 Catering Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
