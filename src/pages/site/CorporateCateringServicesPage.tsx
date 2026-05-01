import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function CorporateCateringServicesPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 📍 Corporate Catering Services in Islamabad | <span className="text-blue-600">Professional Office & Event Catering Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              In today's fast-paced business environment, professional catering services play a vital role in corporate events, meetings, and office gatherings. SU Catering offers reliable and high-quality corporate catering services in Islamabad, designed to meet the needs of modern businesses, organizations, and companies.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Whether you are planning a business meeting, corporate seminar, conference, office lunch, or large-scale corporate event, our team ensures timely delivery, delicious food, and professional service. We understand that corporate events require precision, punctuality, and quality, and we deliver all three with excellence.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              If you are searching for corporate catering in Islamabad, office catering services, or professional caterers for business events, SU Catering is your trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Corporate Catering
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Corporate Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Our Corporate Catering */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Choose Our Corporate Catering Services in Islamabad?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Choosing the right corporate caterer is essential for creating a professional impression. At SU Catering, we focus on delivering quality food and reliable service that aligns with your business standards.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our team understands the unique requirements of corporate events and office catering. We know that punctuality, presentation, and professionalism are crucial for business functions, and we ensure every aspect of our service reflects these values.
                </p>
                <p className="text-lg text-gray-600">
                  Our team understands the importance of corporate image, and we ensure that our catering services reflect professionalism and quality. From board meetings to company celebrations, we deliver consistent excellence that enhances your corporate brand.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
                  <p className="text-sm text-gray-600">Punctual for meetings & events</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Hygienic Food</h3>
                  <p className="text-sm text-gray-600">Clean preparation standards</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Staff</h3>
                  <p className="text-sm text-gray-600">Trained catering team</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Ingredients</h3>
                  <p className="text-sm text-gray-600">Premium food materials</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Corporate Catering Solutions */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Complete Corporate Catering Solutions for All Business Events
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              We provide a wide range of corporate catering services in Islamabad for different business needs.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏢</span>
                  <h3 className="text-2xl font-bold text-gray-900">Office Catering Services</h3>
                </div>
                <p className="text-gray-600">
                  We offer daily and occasional office catering services, including breakfast, lunch, and dinner options for employees. Perfect for regular office meals, team lunches, and employee appreciation events.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🤝</span>
                  <h3 className="text-2xl font-bold text-gray-900">Meeting & Conference Catering</h3>
                </div>
                <p className="text-gray-600">
                  Professional catering for business meetings, conferences, and seminars with timely delivery and proper setup. We ensure your business events run smoothly with quality food and service.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🎉</span>
                  <h3 className="text-2xl font-bold text-gray-900">Corporate Event Catering</h3>
                </div>
                <p className="text-gray-600">
                  We provide catering for large corporate events, company parties, and business functions with complete service. From annual dinners to product launches, we handle events of all sizes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">☕</span>
                  <h3 className="text-2xl font-bold text-gray-900">Tea-Time & Snack Catering</h3>
                </div>
                <p className="text-gray-600">
                  We offer tea-time catering services with snacks, desserts, and beverages for office breaks and small gatherings. Perfect for short meetings and informal office get-togethers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Catering Menu */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Corporate Catering Menu in Islamabad
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our corporate catering menu is designed to provide a variety of options suitable for business environments.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍽️</span>
                  Breakfast Options
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Omelette & Paratha</li>
                  <li>• Sandwiches</li>
                  <li>• Tea & Coffee</li>
                  <li>• Fresh Juices</li>
                  <li>• Pastries</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍛</span>
                  Lunch & Dinner Options
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Biryani & Pulao</li>
                  <li>• Chicken Karahi</li>
                  <li>• BBQ Items</li>
                  <li>• Qorma & Salan</li>
                  <li>• Fresh Salads</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍢</span>
                  Snacks & Tea-Time
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Samosa & Pakora</li>
                  <li>• Sandwiches</li>
                  <li>• Cookies & Cakes</li>
                  <li>• Spring Rolls</li>
                  <li>• Fruit Platters</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍰</span>
                  Desserts & Beverages
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Cakes</li>
                  <li>• Pastries</li>
                  <li>• Soft Drinks</li>
                  <li>• Fresh Juices</li>
                  <li>• Tea & Coffee</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/menu" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                👉 Explore our complete catering menu.
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
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We offer flexible and customized corporate catering packages based on your:
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Number of employees or guests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Event type</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Menu selection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Budget</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Whether you need daily office meals or catering for a corporate event, we provide tailored solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Affordable Corporate Catering */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable Corporate Catering Services in Islamabad
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We provide affordable corporate catering services without compromising on quality. Our goal is to deliver value-driven solutions for businesses of all sizes.
              </p>
              
              <p className="text-lg text-gray-600">
                If you are searching for cheap corporate catering services in Islamabad, we offer budget-friendly packages designed to meet your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Areas We Serve in Islamabad
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                We provide corporate catering services across:
              </p>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Blue Area</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">DHA Islamabad</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Bahria Town</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">G-11, G-13</span>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">F-10, F-11</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                👉 We also provide <Link to="/catering-services-rawalpindi" className="text-blue-600 hover:text-blue-700">catering services in Rawalpindi</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Corporate Caterers */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Professional Corporate Caterers in Islamabad
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Our team consists of experienced professionals who understand the requirements of corporate clients.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                We ensure:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Service</h3>
                  <p className="text-gray-600">Business-appropriate presentation and service</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                  <p className="text-gray-600">Punctual service for scheduled events</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">High-Quality Food</h3>
                  <p className="text-gray-600">Consistent quality and taste</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">Focus on client requirements</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Long SEO Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Long SEO Section (HIGH IMPACT 🔥)
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Corporate catering services in Islamabad are increasingly in demand as businesses and organizations look for reliable catering solutions for their events and daily operations. From small meetings to large corporate gatherings, companies require catering services that are professional, punctual, and high quality.
              </p>
              
              <p className="text-gray-600 mb-6">
                At SU Catering, we specialize in providing corporate catering solutions that meet the needs of modern businesses. Our services are designed to offer convenience, flexibility, and exceptional quality, making us one of the best corporate catering services in Islamabad.
              </p>
              
              <p className="text-gray-600 mb-6">
                If you are searching for office catering services, meeting catering, or event catering for businesses, our solutions are tailored to deliver the best experience. We also provide catering services in Rawalpindi and Islamabad, ensuring wide coverage for corporate clients.
              </p>
              
              <p className="text-gray-600">
                Whether you need daily office meal solutions, conference catering, or special corporate event arrangements, our team delivers professional service that enhances your business image and satisfies your employees and clients.
              </p>
            </div>
          </div>
        </section>

        {/* How to Book */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              How to Book Corporate Catering Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Contact us via phone or email</p>
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
              FAQs (SEO BOOST 🚀)
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering for office meetings?</h3>
                <p className="text-gray-600">Yes, we provide catering for meetings, conferences, and office events with professional service and timely delivery.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can you handle large corporate events?</h3>
                <p className="text-gray-600">Yes, we handle both small and large corporate events with the same level of professionalism and quality.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you offer daily office catering?</h3>
                <p className="text-gray-600">Yes, we provide daily meal services for offices including breakfast, lunch, and dinner options.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can I customize the menu?</h3>
                <p className="text-gray-600">Yes, fully customizable menus are available to suit your corporate event requirements and preferences.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering in Rawalpindi?</h3>
                <p className="text-gray-600">Yes, we provide <Link to="/catering-services-rawalpindi" className="text-blue-600 hover:text-blue-700">catering services in Rawalpindi</Link> for corporate clients.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ What types of food do you offer?</h3>
                <p className="text-gray-600">Pakistani, BBQ, snacks, and continental options suitable for corporate environments and business events.</p>
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
              If you are looking for professional corporate catering services in Islamabad, SU Catering is your ideal choice. With high-quality food, reliable service, and affordable packages, we ensure your corporate events are successful.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Corporate Catering Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
