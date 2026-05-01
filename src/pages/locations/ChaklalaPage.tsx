import { Link } from 'react-router-dom';
import { Phone, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function ChaklalaPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Catering Services in Chaklala | <span className="text-cyan-600">Premium & Professional Caterers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              SU Catering provides exceptional catering services in Chaklala, offering premium quality food and professional service for all types of events. Whether you're planning a wedding, corporate event, or private gathering, our team delivers excellence right to your doorstep in Chaklala.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Book Catering in Chaklala
              </Link>
              <Link to="/menu" className="inline-flex items-center justify-center px-8 py-3 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-colors">
                <Utensils className="mr-2 h-5 w-5" />
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Chaklala Coverage */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Complete Chaklala Coverage
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-cyan-50 p-6 rounded-xl text-center">
                <MapPin className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Chaklala Scheme I</h3>
                <p className="text-gray-600 text-sm">Complete catering coverage</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-xl text-center">
                <MapPin className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Chaklala Scheme III</h3>
                <p className="text-gray-600 text-sm">Premium event catering</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-xl text-center">
                <MapPin className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Chaklala Cantonment</h3>
                <p className="text-gray-600 text-sm">Professional catering services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Our Catering Services in Chaklala
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Wedding Catering</h3>
                <p className="text-gray-600">Complete wedding solutions for Chaklala</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Corporate Events</h3>
                <p className="text-gray-600">Professional business catering services</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Private Parties</h3>
                <p className="text-gray-600">Intimate gathering catering</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">BBQ & Outdoor</h3>
                <p className="text-gray-600">Live BBQ for Chaklala events</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SU Catering in Chaklala?
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cyan-50 p-6 rounded-xl">
                <CheckCircle className="h-12 w-12 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600">Deep knowledge of Chaklala venues</p>
              </div>
              <div className="bg-cyan-50 p-6 rounded-xl">
                <Clock className="h-12 w-12 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Punctual Service</h3>
                <p className="text-gray-600">Always on time for events</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-cyan-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Book Catering in Chaklala?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Contact us today for premium catering services in your area
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
