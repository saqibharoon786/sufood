import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function BlueAreaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 📍 Catering Services in Blue Area Islamabad | <span className="text-indigo-600">Corporate, Office & Event Catering Experts</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Blue Area Islamabad is the commercial backbone of the capital, where corporate offices, government institutions, banks, and multinational companies operate daily. In such a fast-paced business environment, the demand for reliable and professional catering services in Blue Area Islamabad is constantly growing.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              At SU Catering, we specialize in delivering high-quality corporate and office catering solutions tailored specifically for Blue Area clients. Our services are designed to meet the needs of businesses that require punctuality, consistency, hygiene, and professional presentation.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Whether you are planning a business meeting, corporate seminar, office lunch, or large-scale corporate event, our catering services ensure a seamless and stress-free experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Corporate Catering
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Professional Approach */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Catering Services in Blue Area Islamabad Require a Professional Approach
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Unlike residential sectors, catering in Blue Area Islamabad is not just about food — it is about maintaining a professional image. Companies need catering services that reflect their standards, impress clients, and run without delays.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our corporate catering services are built around strict time management, consistent food quality, professional presentation, and efficient service execution.
                </p>
                <p className="text-lg text-gray-600">
                  We understand that in business environments, even small delays or quality issues can impact your reputation. That's why our team focuses on precision and reliability.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-6 rounded-lg text-center hover:bg-indigo-100 transition-colors">
                  <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Time Management</h3>
                  <p className="text-sm text-gray-600">Strict punctuality</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg text-center hover:bg-indigo-100 transition-colors">
                  <Star className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Consistent Quality</h3>
                  <p className="text-sm text-gray-600">Reliable standards</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg text-center hover:bg-indigo-100 transition-colors">
                  <Users className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Service</h3>
                  <p className="text-sm text-gray-600">Business presentation</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg text-center hover:bg-indigo-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Efficient Execution</h3>
                  <p className="text-sm text-gray-600">Smooth operations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Corporate Catering Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Complete Corporate Catering Services in Blue Area Islamabad
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              We offer a wide range of catering solutions specifically designed for corporate clients.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏢</span>
                  <h3 className="text-2xl font-bold text-gray-900">Office Lunch Catering Services</h3>
                </div>
                <p className="text-gray-600">
                  Providing fresh and hygienic meals for office staff is essential for productivity. Our office catering services include daily and occasional meal plans designed to suit different team sizes and preferences.
                </p>
                <p className="text-gray-600 mt-4">
                  We offer flexible options for startups, SMEs, and large corporations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🤝</span>
                  <h3 className="text-2xl font-bold text-gray-900">Meeting & Conference Catering</h3>
                </div>
                <p className="text-gray-600">
                  Business meetings require simple, well-organized catering solutions. We provide tea & coffee services, snacks and light meals, and full lunch/dinner setups.
                </p>
                <p className="text-gray-600 mt-4">
                  Our team ensures timely delivery so your meetings run without interruptions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🎉</span>
                  <h3 className="text-2xl font-bold text-gray-900">Corporate Event Catering</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  From company celebrations to large-scale conferences, we provide complete catering solutions for corporate events.
                </p>
                <Link to="/corporate-catering-services" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                  👉 For more detailed solutions, explore our corporate catering services in Islamabad.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">⭐</span>
                  <h3 className="text-2xl font-bold text-gray-900">Executive & VIP Catering Services</h3>
                </div>
                <p className="text-gray-600">
                  For high-profile meetings and VIP guests, we offer premium catering services with enhanced presentation and menu quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Menu for Corporate Clients */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Catering Menu for Corporate Clients in Blue Area
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our menu is designed to meet the expectations of professional environments, offering both variety and consistency.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍽️</span>
                  Breakfast Catering Options
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Omelette & Paratha</li>
                  <li>• Sandwiches</li>
                  <li>• Tea & Coffee</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍛</span>
                  Lunch & Dinner Catering
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken & Mutton Karahi</li>
                  <li>• Biryani & Pulao</li>
                  <li>• BBQ Items</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍢</span>
                  Snacks & Tea-Time Catering
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Samosa & Pakora</li>
                  <li>• Sandwiches</li>
                  <li>• Cookies</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍰</span>
                  Desserts & Beverages
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Cakes & Pastries</li>
                  <li>• Soft Drinks</li>
                  <li>• Fresh Juices</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/menu" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                👉 You can customize your order through our complete catering menu.
              </Link>
            </div>
          </div>
        </section>

        {/* Customized Corporate Catering Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Customized Corporate Catering Packages
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Every business has different needs, which is why we offer fully customizable catering packages based on:
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Number of employees</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Event type</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Menu preferences</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">Frequency of service</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Whether you need daily office meals or one-time event catering, we provide flexible solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Key Advantages */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Key Advantages of Choosing Our Catering Services in Blue Area Islamabad
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-indigo-50 p-6 rounded-xl shadow-lg text-center">
                <Clock className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                <p className="text-gray-600">For all orders</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl shadow-lg text-center">
                <Star className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">High-Quality Food</h3>
                <p className="text-gray-600">Hygienic standards</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl shadow-lg text-center">
                <Users className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Professional Staff</h3>
                <p className="text-gray-600">Expert service</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl shadow-lg text-center">
                <CheckCircle className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Flexible Solutions</h3>
                <p className="text-gray-600">Scalable options</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl shadow-lg text-center">
                <MapPin className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                <p className="text-gray-600">Value-driven</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Our goal is to become a long-term catering partner for businesses in Blue Area.
              </p>
            </div>
          </div>
        </section>

        {/* High-Impact SEO Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              High-Impact SEO Section (Corporate + Local Intent 🔥)
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Catering services in Blue Area Islamabad are among the most searched services due to the high concentration of offices and corporate activity. Businesses are constantly looking for reliable catering providers who can deliver consistent quality and professional service.
              </p>
              
              <p className="text-gray-600 mb-6">
                At SU Catering, we focus on meeting these demands by offering specialized corporate catering solutions. Our services are designed to support daily office operations, business meetings, and corporate events with efficiency and reliability.
              </p>
              
              <p className="text-gray-600 mb-6">
                If you are searching for office catering in Blue Area Islamabad, corporate catering services near you, or professional caterers for business events, we provide solutions that ensure quality and consistency.
              </p>
              
              <p className="text-gray-600">
                👉 We also provide extended coverage through our <Link to="/catering-services-islamabad" className="text-indigo-600 hover:text-indigo-700">catering services in Islamabad</Link> for nearby sectors.
              </p>
            </div>
          </div>
        </section>

        {/* How Our Catering Process Works */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              How Our Catering Process Works
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Our Team</h3>
                <p className="text-gray-600">Contact our team</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share Your Requirements</h3>
                <p className="text-gray-600">Share your requirements</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Select Your Menu</h3>
                <p className="text-gray-600">Select your menu</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Confirm Your Booking</h3>
                <p className="text-gray-600">Confirm your booking</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Our team handles everything from preparation to delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Why Businesses Trust Us */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Businesses Trust Our Catering Services
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Businesses choose us because we understand corporate needs. We focus on building long-term relationships by delivering consistent service and high-quality food.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <CheckCircle className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Reliability</h3>
                  <p className="text-gray-600">Consistent dependability</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Users className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Professionalism</h3>
                  <p className="text-gray-600">Business standards</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Star className="h-12 w-12 text-indigo-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">Client-focused approach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              FAQs (SEO + Conversion Boost 🚀)
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide daily office catering services?</h3>
                <p className="text-gray-600">Yes, we provide both daily and occasional office catering services.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can you handle large corporate events?</h3>
                <p className="text-gray-600">Yes, we handle events of all sizes, including conferences and company functions.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you offer customized menus?</h3>
                <p className="text-gray-600">Yes, all menus can be customized based on your requirements.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering staff?</h3>
                <p className="text-gray-600">Yes, we provide complete service including staff and setup.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ How early should I book catering services?</h3>
                <p className="text-gray-600">For corporate events, booking at least a few days in advance is recommended.</p>
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
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              If you are looking for professional catering services in Blue Area Islamabad, SU Catering offers the perfect combination of quality, reliability, and efficiency. Our corporate-focused approach ensures that your meetings, events, and office operations run smoothly without any hassle.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Corporate Catering Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
