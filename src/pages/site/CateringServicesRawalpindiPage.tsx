import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function CateringServicesRawalpindiPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Catering Services in Rawalpindi | <span className="text-orange-600">Affordable, Professional & Premium Catering Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Finding the best catering services in Rawalpindi can be challenging, especially when you want a perfect combination of delicious food, professional service, and affordable pricing. At SU Catering, we provide high-quality catering services designed to meet the needs of every event, whether it is a wedding, corporate function, birthday party, or private gathering.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Our catering services in Rawalpindi are built around quality, reliability, and customer satisfaction. We understand that food is the most important part of any event, and our goal is to deliver exceptional taste and presentation that leaves a lasting impression on your guests.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Whether you are searching for catering in Rawalpindi, professional caterers in Rawalpindi, or affordable catering services near you, SU Catering is your trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Now
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Why SU Catering is the Best */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why SU Catering is the Best Catering Service in Rawalpindi
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Choosing the right catering service can make a huge difference in the success of your event. At SU Catering, we focus on delivering a premium experience with attention to detail, quality food, and excellent customer service.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We are known as one of the best catering services in Rawalpindi because we consistently deliver exceptional experiences that exceed our clients' expectations. Our commitment to quality, reliability, and customer satisfaction sets us apart from other catering companies in the region.
                </p>
                <p className="text-lg text-gray-600">
                  Our mission is to provide reliable and professional catering services in Rawalpindi that exceed expectations. From the first consultation to the final cleanup, we ensure every aspect of your event's catering is handled with professionalism and care.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fresh Quality Ingredients</h3>
                  <p className="text-sm text-gray-600">Premium ingredients for exceptional taste</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Experienced Chefs</h3>
                  <p className="text-sm text-gray-600">Professionally trained culinary experts</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <Clock className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Timely Delivery</h3>
                  <p className="text-sm text-gray-600">Punctual service always on time</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <Star className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Strict Hygiene</h3>
                  <p className="text-sm text-gray-600">Clean and safe food preparation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Catering Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Complete Catering Services in Rawalpindi for All Types of Events
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              We offer a wide range of catering services in Rawalpindi tailored for different types of events.
            </p>
            
            <div className="space-y-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">💒</span>
                  <h3 className="text-2xl font-bold text-gray-900">Wedding Catering Services in Rawalpindi</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Weddings are once-in-a-lifetime events, and we ensure they are perfect with our premium wedding catering services. From traditional Pakistani dishes to modern cuisine, we provide complete wedding catering solutions.
                </p>
                <p className="text-gray-600 mb-4">
                  Our wedding catering packages include everything from mehndi and barat to walima events, with customized menus that reflect your cultural preferences and taste requirements.
                </p>
                <Link to="/catering-services-islamabad" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                  👉 Also explore our wedding catering services in Islamabad for extended coverage.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏢</span>
                  <h3 className="text-2xl font-bold text-gray-900">Corporate Catering Services in Rawalpindi</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We provide professional corporate catering services for offices, meetings, conferences, and corporate events. Our services include breakfast, lunch, dinner, and tea-time catering.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you need catering for a board meeting, employee lunch, or large corporate conference, we deliver professional service with high-quality food that impresses clients and satisfies employees.
                </p>
                <Link to="/corporate-catering-islamabad" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                  👉 Check our corporate catering services for business clients.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🎂</span>
                  <h3 className="text-2xl font-bold text-gray-900">Birthday & Private Event Catering</h3>
                </div>
                <p className="text-gray-600">
                  Planning a birthday party or private gathering? Our catering services are perfect for small and medium events with flexible and affordable packages. We make your special occasions memorable with delicious food and excellent service.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🔥</span>
                  <h3 className="text-2xl font-bold text-gray-900">Outdoor & BBQ Catering Services</h3>
                </div>
                <p className="text-gray-600">
                  Enjoy live BBQ catering with fresh and delicious food prepared on-site. We provide outdoor catering services for weddings, parties, and events. Our BBQ specialists bring the grill to your venue for an authentic outdoor dining experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Menu */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Catering Menu in Rawalpindi – Wide Range of Delicious Options
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our catering menu is designed to provide a variety of food options that suit every event.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍛</span>
                  Traditional Pakistani Cuisine
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Karahi</li>
                  <li>• Mutton Karahi</li>
                  <li>• Biryani & Pulao</li>
                  <li>• Nihari</li>
                  <li>• Haleem</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍢</span>
                  BBQ Catering
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Tikka</li>
                  <li>• Seekh Kabab</li>
                  <li>• Malai Boti</li>
                  <li>• Grilled Fish</li>
                  <li>• Chapli Kabab</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍝</span>
                  Continental & Fast Food
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Pasta</li>
                  <li>• Sandwiches</li>
                  <li>• Burgers</li>
                  <li>• Fried Chicken</li>
                  <li>• Pizza</li>
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
                  <li>• Ice Cream</li>
                  <li>• Fresh Juices</li>
                  <li>• Soft Drinks</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/menu" className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium">
                👉 Explore our complete catering menu for full details.
              </Link>
            </div>
          </div>
        </section>

        {/* Affordable Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable Catering Packages in Rawalpindi
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We offer flexible and affordable catering packages to suit every budget. Whether you are looking for cheap catering services in Rawalpindi or premium catering packages, we have options for everyone.
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Pricing Depends On:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Number of guests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Menu selection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Event type</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Service requirements</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Areas We Serve in Rawalpindi
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                We provide catering services across all major areas:
              </p>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Saddar</span>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Bahria Town</span>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">DHA Rawalpindi</span>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Satellite Town</span>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Chaklala</span>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Peshawar Road</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                👉 We also provide <Link to="/catering-services-islamabad" className="text-orange-600 hover:text-orange-700">catering services in Islamabad</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Long SEO Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Long SEO Section (NLP Optimized 🔥)
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Catering services in Rawalpindi are in high demand due to the growing number of events, including weddings, corporate functions, and private gatherings. People are constantly searching for reliable caterers in Rawalpindi who can provide high-quality food and professional service.
              </p>
              
              <p className="text-gray-600 mb-6">
                At SU Catering, we have built a reputation as one of the best catering services in Rawalpindi by consistently delivering exceptional quality and service. Our catering solutions are designed to meet the needs of both small and large events, ensuring customer satisfaction at every step.
              </p>
              
              <p className="text-gray-600 mb-6">
                If you are searching for affordable catering services in Rawalpindi, we offer budget-friendly packages without compromising on quality. Our team ensures that every dish is prepared using fresh ingredients and served with professionalism.
              </p>
              
              <p className="text-gray-600">
                We also provide catering services in Islamabad, making us a reliable choice for clients across the twin cities. Whether you need wedding catering, corporate event catering, or private party catering, our team is ready to serve you with excellence and dedication.
              </p>
            </div>
          </div>
        </section>

        {/* How to Book */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              How to Book Catering Services in Rawalpindi
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Reach out via phone or WhatsApp</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share Event Details</h3>
                <p className="text-gray-600">Provide date, guests, and requirements</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Select Menu</h3>
                <p className="text-gray-600">Choose your preferred menu items</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Confirm Booking</h3>
                <p className="text-gray-600">Finalize details and make payment</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              FAQs (ADVANCED SEO)
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ What is the average cost of catering in Rawalpindi?</h3>
                <p className="text-gray-600">Cost varies depending on menu and guests. We offer flexible pricing starting from budget-friendly options to premium packages.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide wedding catering?</h3>
                <p className="text-gray-600">Yes, we offer complete wedding catering services including mehndi, barat, and walima events with customized menus.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can I customize the menu?</h3>
                <p className="text-gray-600">Yes, fully customizable options available. Our chefs work with you to create the perfect menu for your event.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you serve Islamabad?</h3>
                <p className="text-gray-600">Yes, we also serve Islamabad and provide comprehensive catering services across the twin cities.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide staff?</h3>
                <p className="text-gray-600">Yes, full service staff including chefs, servers, and cleanup crew are included in our packages.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ What types of food do you offer?</h3>
                <p className="text-gray-600">Pakistani, BBQ, continental, and more. We offer diverse cuisine options to suit every taste.</p>
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
              If you are looking for the best catering services in Rawalpindi, SU Catering is your trusted choice. With high-quality food, professional service, and affordable packages, we ensure your event is successful and memorable.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Catering Service Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
