import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function F10IslamabadPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 📍 Catering Services in F-10 Islamabad | <span className="text-red-600">Premium Event, Home & Corporate Catering Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              F-10 Islamabad is one of the most vibrant and well-established sectors of the city, known for its blend of residential comfort and commercial activity. From family gatherings and birthday celebrations to corporate meetings and social events, the demand for reliable catering services in F-10 Islamabad continues to grow rapidly. Choosing the right catering service is essential to ensure your event is successful, memorable, and stress-free.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              At SU Catering, we provide specialized catering services tailored for F-10 Islamabad. Our approach focuses on delivering high-quality food, professional service, and a seamless experience for every type of event. Whether you are hosting a small home gathering or a large-scale function, our team ensures that every detail is handled with care and precision.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              If you are searching for catering in F-10 Islamabad, experienced caterers near you, or affordable yet premium catering services, we offer solutions designed to meet your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Catering in F-10
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Why Our Catering Services Stand Out */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Our Catering Services in F-10 Islamabad Stand Out
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Catering in a busy and diverse area like F-10 requires efficiency, flexibility, and attention to detail. Our services are designed to match the lifestyle and expectations of F-10 residents and businesses.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We stand out because we understand the local event culture of F-10, provide fast and reliable service within the sector, offer customized menus based on event type, maintain strict hygiene and quality standards, and deliver consistent taste and presentation.
                </p>
                <p className="text-lg text-gray-600">
                  Our goal is to provide catering services that not only meet but exceed customer expectations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg text-center hover:bg-red-100 transition-colors">
                  <MapPin className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Local Event Culture</h3>
                  <p className="text-sm text-gray-600">F-10 expertise</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg text-center hover:bg-red-100 transition-colors">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Service</h3>
                  <p className="text-sm text-gray-600">Reliable delivery</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg text-center hover:bg-red-100 transition-colors">
                  <Star className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Customized Menus</h3>
                  <p className="text-sm text-gray-600">Event-based options</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg text-center hover:bg-red-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Quality Standards</h3>
                  <p className="text-sm text-gray-600">Hygiene & taste</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Catering Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Complete Catering Services in F-10 Islamabad for Every Occasion
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              We provide a wide range of catering solutions designed to meet the needs of different types of clients.
            </p>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏠</span>
                  <h3 className="text-2xl font-bold text-gray-900">Home Catering Services in F-10</h3>
                </div>
                <p className="text-gray-600">
                  Home-based events are common in F-10, including family dinners, birthday parties, and small gatherings. Our home catering services are designed to provide convenience and quality without the hassle of cooking and preparation.
                </p>
                <p className="text-gray-600 mt-4">
                  We handle everything from food preparation to delivery, allowing you to focus on your guests.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🏢</span>
                  <h3 className="text-2xl font-bold text-gray-900">Corporate Catering in F-10 Islamabad</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  F-10 has a strong commercial presence, making corporate catering an essential service. We provide professional catering for meetings, office lunches, and corporate events.
                </p>
                <Link to="/corporate-catering-services" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                  👉 For more business-focused solutions, explore our corporate catering services in Islamabad.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">💒</span>
                  <h3 className="text-2xl font-bold text-gray-900">Wedding & Event Catering</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We also provide catering services for weddings, engagements, and other social events in F-10.
                </p>
                <Link to="/wedding-catering-services" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                  👉 For larger wedding events, explore our wedding catering services in Islamabad.
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">🔥</span>
                  <h3 className="text-2xl font-bold text-gray-900">BBQ & Outdoor Catering</h3>
                </div>
                <p className="text-gray-600">
                  Outdoor gatherings and rooftop events are popular in F-10. Our BBQ catering services provide fresh and delicious food prepared on-site.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Catering Menu Options */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Catering Menu Options – Designed for F-10 Clients
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            <p className="text-center text-gray-600 mb-12">
              Our catering menu is carefully designed to offer a variety of options suitable for different events and preferences.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍛</span>
                  Traditional Pakistani Dishes
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Karahi</li>
                  <li>• Mutton Karahi</li>
                  <li>• Biryani & Pulao</li>
                  <li>• Qorma</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍢</span>
                  BBQ & Grill Options
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Chicken Tikka</li>
                  <li>• Seekh Kabab</li>
                  <li>• Malai Boti</li>
                  <li>• BBQ Wings</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-2xl mr-2">🍝</span>
                  Fast Food & Light Meals
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Burgers</li>
                  <li>• Sandwiches</li>
                  <li>• Pasta</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl">
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
              <Link to="/menu" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium">
                👉 Explore our complete catering menu to customize your event.
              </Link>
            </div>
          </div>
        </section>

        {/* Flexible Catering Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Flexible Catering Packages in F-10 Islamabad
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Every event is different, which is why we offer flexible catering packages tailored to your needs.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Our packages are based on:
              </p>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Number of guests</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Menu selection</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Event type</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-gray-700">Service requirements</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Whether you need a simple catering setup or a full-service event solution, we provide options that suit your budget.
              </p>
            </div>
          </div>
        </section>

        {/* Affordable Catering Services */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable Catering Services Without Compromising Quality
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We believe that high-quality catering should be accessible to everyone. Our services are designed to provide value without compromising on taste or presentation.
              </p>
              
              <p className="text-lg text-gray-600">
                If you are looking for affordable catering services in F-10 Islamabad, we offer cost-effective packages that deliver excellent results.
              </p>
            </div>
          </div>
        </section>

        {/* Local Advantage */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Local Advantage – Why F-10 Catering Needs Experience
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                Providing catering services in F-10 Islamabad requires local knowledge and experience. Our team is familiar with the area, which allows us to:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Clock className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Deliver Food Quickly</h3>
                  <p className="text-gray-600">Fast and efficient service</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Users className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Coordinate Efficiently</h3>
                  <p className="text-gray-600">Smooth operations</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <Star className="h-12 w-12 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Provide Better Service</h3>
                  <p className="text-gray-600">Local expertise advantage</p>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                This local advantage ensures a smooth and hassle-free experience for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* High-Impact SEO Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              High-Impact SEO Section (Semantic + NLP Optimized)
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Catering services in F-10 Islamabad are in high demand due to the sector's active lifestyle and frequent social events. People often search for reliable caterers who can provide high-quality food and professional service within a short time frame.
              </p>
              
              <p className="text-gray-600 mb-6">
                At SU Catering, we focus on delivering catering solutions that match the needs of modern clients. Whether you are planning a family event, corporate meeting, or social gathering, our services are designed to provide convenience, quality, and reliability.
              </p>
              
              <p className="text-gray-600">
                If you are searching for catering in F-10 Islamabad, best caterers near you, or affordable catering services, our team ensures that every event is handled professionally.
              </p>
            </div>
          </div>
        </section>

        {/* How to Book */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              How to Book Catering Services in F-10 Islamabad
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Contact us via phone or WhatsApp</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share Event Details</h3>
                <p className="text-gray-600">Share your event details</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Select Menu</h3>
                <p className="text-gray-600">Select your menu</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Confirm Booking</h3>
                <p className="text-gray-600">Confirm your booking</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600">
                Our team will handle everything from preparation to delivery.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              FAQs (SEO BOOST)
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering for small events in F-10?</h3>
                <p className="text-gray-600">Yes, we specialize in both small and large events.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can I customize my menu?</h3>
                <p className="text-gray-600">Yes, we offer fully customizable menu options.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide corporate catering?</h3>
                <p className="text-gray-600">Yes, we provide catering for offices and business events.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide wedding catering?</h3>
                <p className="text-gray-600">Yes, we offer complete wedding catering services.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ How early should I book?</h3>
                <p className="text-gray-600">We recommend booking at least 1 week in advance.</p>
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
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              If you are looking for reliable and professional catering services in F-10 Islamabad, SU Catering is your trusted partner. With a focus on quality, affordability, and customer satisfaction, we ensure your event is a success.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Book Your F-10 Catering Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
