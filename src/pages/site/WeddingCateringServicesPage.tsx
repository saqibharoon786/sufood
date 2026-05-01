import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function WeddingCateringServicesPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Wedding Catering Services in Islamabad | <span className="text-pink-600">Premium, Affordable & Professional Caterers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Planning a wedding in Islamabad requires attention to every detail, and one of the most important aspects of any wedding is the food. At SU Catering, we provide professional wedding catering services in Islamabad designed to deliver exceptional taste, elegant presentation, and seamless service for your special day.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              We understand that weddings are once-in-a-lifetime events, and our goal is to make your celebration memorable with high-quality food and outstanding catering services. Whether you are planning a small family function or a grand wedding event, our team is equipped to handle everything with professionalism and care.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              If you are searching for wedding catering in Islamabad, best wedding caterers near you, or affordable wedding catering services, SU Catering is your trusted partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Your Wedding
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-pink-600 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Wedding Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Our Wedding Catering */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Choose Our Wedding Catering Services in Islamabad?
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Choosing the right wedding caterer is essential to ensure a successful event. At SU Catering, we focus on delivering a premium experience with attention to detail, taste, and service quality.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We are known for our exceptional wedding catering services that combine traditional flavors with modern presentation. Our team understands the cultural significance of weddings and ensures every dish reflects the importance of your special day.
                </p>
                <p className="text-lg text-gray-600">
                  Our team works closely with clients to understand their requirements and deliver catering services that exceed expectations. From the initial consultation to the final cleanup, we ensure your wedding catering is flawless.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-lg text-center hover:bg-pink-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Delicious & Hygienic</h3>
                  <p className="text-sm text-gray-600">Fresh ingredients, clean preparation</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg text-center hover:bg-pink-100 transition-colors">
                  <Users className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Experienced Staff</h3>
                  <p className="text-sm text-gray-600">Professional chefs and servers</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg text-center hover:bg-pink-100 transition-colors">
                  <Star className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Elegant Presentation</h3>
                  <p className="text-sm text-gray-600">Beautiful food display</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg text-center hover:bg-pink-100 transition-colors">
                  <Clock className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">On-Time Service</h3>
                  <p className="text-sm text-gray-600">Punctual and reliable</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Wedding Catering Solutions */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Complete Wedding Catering Solutions in Islamabad
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              We offer comprehensive wedding catering services that cover every aspect of your event.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">👰</span>
                  <h3 className="text-2xl font-bold text-gray-900">Barat Catering Services</h3>
                </div>
                <p className="text-gray-600">
                  Barat is one of the most important wedding events, and we ensure it is perfect with our premium catering services. From traditional Pakistani dishes to modern cuisine, we provide complete catering solutions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🤵</span>
                  <h3 className="text-2xl font-bold text-gray-900">Walima Catering Services</h3>
                </div>
                <p className="text-gray-600">
                  For Walima events, we offer elegant and professional catering services with a focus on presentation and guest satisfaction.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🎨</span>
                  <h3 className="text-2xl font-bold text-gray-900">Mehndi Catering Services</h3>
                </div>
                <p className="text-gray-600">
                  Make your Mehndi event colorful and lively with our customized catering services, including BBQ and traditional dishes.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">💍</span>
                  <h3 className="text-2xl font-bold text-gray-900">Engagement & Dholki Events</h3>
                </div>
                <p className="text-gray-600">
                  We also provide catering services for smaller wedding events such as engagements, dholki nights, and private gatherings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Catering Menu */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Wedding Catering Menu in Islamabad
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our wedding catering menu is designed to offer a variety of delicious options for every type of event.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍛</span>
                  Traditional Pakistani Wedding Dishes
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Karahi</li>
                  <li>• Mutton Karahi</li>
                  <li>• Biryani & Pulao</li>
                  <li>• Qorma</li>
                  <li>• Nihari</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍢</span>
                  BBQ Catering for Weddings
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Tikka</li>
                  <li>• Seekh Kabab</li>
                  <li>• Malai Boti</li>
                  <li>• Reshmi Kabab</li>
                  <li>• Chapli Kabab</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍝</span>
                  Continental Wedding Menu
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Pasta</li>
                  <li>• Steaks</li>
                  <li>• Sandwiches</li>
                  <li>• Fried Chicken</li>
                  <li>• Salads</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍰</span>
                  Desserts & Beverages
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Gulab Jamun</li>
                  <li>• Kheer</li>
                  <li>• Ice Cream</li>
                  <li>• Fresh Juices & Soft Drinks</li>
                  <li>• Traditional Sweets</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/menu" className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium">
                👉 Explore our complete catering menu to customize your wedding.
              </Link>
            </div>
          </div>
        </section>

        {/* Customized Wedding Catering Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Customized Wedding Catering Packages
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We understand that every wedding is unique. That's why we offer customized wedding catering packages in Islamabad based on your:
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">Number of guests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">Menu preferences</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">Event type</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-pink-600 mr-3" />
                    <span className="text-gray-700">Budget</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Whether you need affordable wedding catering or premium luxury packages, we provide flexible solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Affordable Wedding Catering */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable Wedding Catering Services in Islamabad
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We believe that high-quality wedding catering should be accessible to everyone. Our affordable wedding catering services are designed to provide the best value without compromising on quality.
              </p>
              
              <p className="text-lg text-gray-600">
                If you are searching for cheap wedding catering in Islamabad, we offer budget-friendly packages with delicious food and professional service.
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
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                We provide wedding catering services across all major areas:
              </p>
              
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">DHA Islamabad</span>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Bahria Town</span>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">F-10, F-11</span>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">G-11, G-13</span>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <MapPin className="h-6 w-6 text-pink-600 mx-auto mb-2" />
                  <span className="text-gray-900 font-medium">Blue Area</span>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                👉 We also serve nearby areas with <Link to="/catering-services-rawalpindi" className="text-pink-600 hover:text-pink-700">catering services in Rawalpindi</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Wedding Caterers */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Professional Wedding Caterers in Islamabad
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Our team consists of experienced and professional caterers who ensure that every aspect of your wedding catering is handled perfectly.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                We focus on:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-pink-50 p-6 rounded-xl text-center">
                  <CheckCircle className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Food Quality</h3>
                  <p className="text-gray-600">Premium ingredients and authentic recipes</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl text-center">
                  <Star className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Presentation</h3>
                  <p className="text-gray-600">Elegant display and beautiful setup</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl text-center">
                  <CheckCircle className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Hygiene</h3>
                  <p className="text-gray-600">Strict food safety standards</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-xl text-center">
                  <Users className="h-12 w-12 text-pink-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">Dedicated to making your day special</p>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Our goal is to provide the best wedding catering services in Islamabad.
              </p>
            </div>
          </div>
        </section>

        {/* Long SEO Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Long SEO Section (HIGH IMPACT 🔥)
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Wedding catering services in Islamabad are one of the most searched services, especially during peak wedding seasons. People are constantly looking for reliable and professional wedding caterers who can provide high-quality food and excellent service.
              </p>
              
              <p className="text-gray-600 mb-6">
                At SU Catering, we have built a reputation as one of the best wedding catering services in Islamabad by consistently delivering exceptional results. Our catering services are designed to meet the needs of modern weddings, offering a combination of traditional and contemporary food options.
              </p>
              
              <p className="text-gray-600 mb-6">
                If you are planning a wedding and searching for wedding catering near you, our services provide the perfect solution. We offer customized menus, flexible pricing, and professional service to ensure your event is successful.
              </p>
              
              <p className="text-gray-600">
                We also provide catering services in Islamabad and Rawalpindi, making us a reliable choice for clients across the twin cities. Whether you need barat catering, walima arrangements, or mehndi event catering, our team is ready to make your wedding day unforgettable.
              </p>
            </div>
          </div>
        </section>

        {/* How to Book */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              How to Book Wedding Catering Services
            </h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Contact us via phone or WhatsApp</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share Wedding Details</h3>
                <p className="text-gray-600">Share your wedding details</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Choose Menu</h3>
                <p className="text-gray-600">Choose your menu and package</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
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
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ What is the cost of wedding catering in Islamabad?</h3>
                <p className="text-gray-600">The cost depends on guests and menu selection. We offer flexible packages to suit various budgets.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering for large weddings?</h3>
                <p className="text-gray-600">Yes, we handle both small and large weddings with equal professionalism and attention to detail.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can I customize my wedding menu?</h3>
                <p className="text-gray-600">Yes, fully customizable menus are available. Our chefs work with you to create your perfect wedding menu.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide staff and setup?</h3>
                <p className="text-gray-600">Yes, complete service including staff, setup, and cleanup is included in our wedding packages.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering in Rawalpindi?</h3>
                <p className="text-gray-600">Yes, we also provide <Link to="/catering-services-rawalpindi" className="text-pink-600 hover:text-pink-700">catering services in Rawalpindi</Link> for weddings and other events.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ How early should I book?</h3>
                <p className="text-gray-600">It is recommended to book at least 2–3 weeks in advance. For peak wedding season, book 2-3 months ahead.</p>
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
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              If you are looking for the best wedding catering services in Islamabad, SU Catering is your trusted partner. With high-quality food, professional service, and affordable packages, we ensure your wedding is a memorable experience.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book Your Wedding Catering Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
