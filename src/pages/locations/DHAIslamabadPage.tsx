import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function DHAIslamabadPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 📍 Catering Services in DHA Islamabad | <span className="text-green-600">Premium Event & Home Catering Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Finding reliable and high-quality catering services in DHA Islamabad can be challenging, especially when you want a perfect combination of taste, presentation, and professionalism. At SU Catering, we provide premium catering services specifically tailored for residents and businesses in DHA Islamabad, ensuring every event is memorable and stress-free.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              DHA Islamabad is known for its modern lifestyle, high standards, and elegant events. That's why our catering services are designed to meet premium expectations, offering high-quality food, customized menus, and professional service. Whether you are hosting a wedding, corporate gathering, birthday party, or private dinner, our team ensures a flawless catering experience.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              If you are searching for the best catering services in DHA Islamabad, professional caterers near you, or affordable yet high-quality catering, SU Catering is your trusted choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Catering in DHA
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose DHA Catering */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Choose Catering Services in DHA Islamabad from SU Catering?
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Events in DHA Islamabad require a higher level of quality and presentation. Our catering services are designed to match the standards of premium events, ensuring both taste and elegance.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We stand out because we specialize in DHA Islamabad events, providing customized premium catering solutions that meet the sophisticated expectations of residents and businesses in this exclusive area.
                </p>
                <p className="text-lg text-gray-600">
                  Our team understands the expectations of DHA residents and ensures every event reflects class and quality that matches the premium lifestyle of this prestigious community.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">DHA Specialization</h3>
                  <p className="text-sm text-gray-600">Expert in DHA events</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors">
                  <Star className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Premium Solutions</h3>
                  <p className="text-sm text-gray-600">Customized catering</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Ingredients</h3>
                  <p className="text-sm text-gray-600">Fresh & high-quality</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors">
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Service</h3>
                  <p className="text-sm text-gray-600">Hygiene & safety</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Catering Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Premium Catering Services in DHA Islamabad for Every Event
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              We offer a complete range of catering services designed for different types of events in DHA Islamabad.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">💒</span>
                  <h3 className="text-2xl font-bold text-gray-900">Wedding Catering in DHA Islamabad</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Weddings in DHA Islamabad are known for their elegance and scale. Our wedding catering services are designed to match that standard with premium menus, professional staff, and flawless execution.
                </p>
                <Link to="/wedding-catering-services" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                  👉 For complete wedding solutions, explore our wedding catering services in Islamabad.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏢</span>
                  <h3 className="text-2xl font-bold text-gray-900">Corporate Catering for DHA Businesses</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We provide professional corporate catering services for offices, meetings, and corporate events in DHA Islamabad.
                </p>
                <Link to="/corporate-catering-services" className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium">
                  👉 For business-focused solutions, explore our corporate catering services in Islamabad.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏠</span>
                  <h3 className="text-2xl font-bold text-gray-900">Home & Private Event Catering</h3>
                </div>
                <p className="text-gray-600">
                  Whether it's a small dinner or a family gathering, we offer home catering services in DHA Islamabad with customized menus and flexible packages.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🔥</span>
                  <h3 className="text-2xl font-bold text-gray-900">Outdoor & BBQ Catering in DHA</h3>
                </div>
                <p className="text-gray-600">
                  Enjoy live BBQ catering for outdoor events, lawn parties, and gatherings with fresh and delicious food.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Menu */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Catering Menu in DHA Islamabad – Premium Food Selection
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our catering menu is designed to offer a premium selection of dishes suitable for high-end events.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍛</span>
                  Traditional Pakistani Cuisine
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken & Mutton Karahi</li>
                  <li>• Biryani & Pulao</li>
                  <li>• Qorma</li>
                  <li>• Nihari</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍢</span>
                  BBQ & Grill Options
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Tikka</li>
                  <li>• Seekh Kabab</li>
                  <li>• Malai Boti</li>
                  <li>• Grilled Fish</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍝</span>
                  Continental & Fusion Menu
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Pasta</li>
                  <li>• Steaks</li>
                  <li>• Sandwiches</li>
                  <li>• Fried Chicken</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍰</span>
                  Desserts & Beverages
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Gulab Jamun</li>
                  <li>• Kheer</li>
                  <li>• Ice Cream</li>
                  <li>• Fresh Juices</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/menu" className="inline-flex items-center text-green-600 hover:text-green-700 font-medium">
                👉 View our complete catering menu.
              </Link>
            </div>
          </div>
        </section>

        {/* Customized Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Customized Catering Packages for DHA Islamabad
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We offer flexible catering packages tailored to DHA clients.
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Packages depend on:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
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
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Service requirements</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Whether you need luxury catering or affordable options, we provide solutions that match your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Affordable Premium */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable Yet Premium Catering in DHA Islamabad
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                While DHA is known for premium events, we also offer cost-effective catering solutions without compromising quality.
              </p>
              
              <p className="text-lg text-gray-600">
                If you are searching for affordable catering services in DHA Islamabad, we provide budget-friendly packages with high-quality food and professional service.
              </p>
            </div>
          </div>
        </section>

        {/* Areas Covered */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Areas Covered Within DHA Islamabad
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                We provide catering services across all DHA sectors:
              </p>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">DHA Phase 1</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">DHA Phase 2</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">DHA Phase 3</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">DHA Phase 4</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">DHA Phase 5</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                👉 We also provide <Link to="/catering-services-islamabad" className="text-green-600 hover:text-green-700">catering services in Islamabad</Link> and nearby areas.
              </p>
            </div>
          </div>
        </section>

        {/* Long SEO Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Long SEO Section (DHA Focused 🔥)
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Catering services in DHA Islamabad are in high demand due to the premium lifestyle and frequent events hosted in this area. Residents often look for reliable caterers who can deliver high-quality food, professional service, and elegant presentation.
              </p>
              
              <p className="text-gray-600 mb-6">
                At SU Catering, we specialize in providing catering services tailored for DHA Islamabad. Our services are designed to meet the expectations of modern clients who value quality, hygiene, and professionalism.
              </p>
              
              <p className="text-gray-600 mb-6">
                If you are searching for catering in DHA Islamabad, best caterers in DHA, or premium catering services near you, our team ensures a seamless experience from start to finish.
              </p>
              
              <p className="text-gray-600">
                We also extend our services to Rawalpindi and Islamabad, making us a versatile catering solution for the twin cities.
              </p>
            </div>
          </div>
        </section>

        {/* How to Book */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              How to Book Catering Services in DHA Islamabad
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Contact us via phone or WhatsApp</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share Event Details</h3>
                <p className="text-gray-600">Share event details</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Choose Menu</h3>
                <p className="text-gray-600">Choose menu and package</p>
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
              FAQs (HIGH SEO VALUE 🚀)
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering in all DHA phases?</h3>
                <p className="text-gray-600">Yes, we cover all phases of DHA Islamabad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can I customize my menu?</h3>
                <p className="text-gray-600">Yes, we offer fully customizable menus.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide staff and setup?</h3>
                <p className="text-gray-600">Yes, complete service is included.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you offer wedding catering in DHA?</h3>
                <p className="text-gray-600">Yes, we provide premium wedding catering services.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you serve Rawalpindi?</h3>
                <p className="text-gray-600">Yes, we also provide <Link to="/catering-services-rawalpindi" className="text-green-600 hover:text-green-700">catering services in Rawalpindi</Link>.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ What types of food do you offer?</h3>
                <p className="text-gray-600">Pakistani, BBQ, continental, and more.</p>
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
              If you are looking for the best catering services in DHA Islamabad, SU Catering is your trusted partner. With premium quality food, professional service, and customized packages, we ensure your event is successful and memorable.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book Your DHA Catering Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
