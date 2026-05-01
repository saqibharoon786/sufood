import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, CheckCircle, Clock, Users, Utensils, Star } from 'lucide-react';

export default function CateringServicesPage() {
  return (
    <>

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Best Catering Services in Islamabad | <span className="text-orange-600">Affordable & Professional Catering</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              When it comes to finding the best catering services in Islamabad, SU Catering stands out as a trusted name offering high-quality food, professional service, and affordable packages for all types of events. Whether you're searching for wedding caterers in Islamabad, corporate event catering, or private party catering services, our expert team delivers exceptional culinary experiences that exceed expectations.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              We understand that food is the heart of any event. That's why we focus on delivering exceptional taste, premium quality ingredients, and hygienic food preparation. Our catering services in Islamabad are designed to meet the diverse needs of clients across the city, including residential events, corporate functions, and large-scale celebrations. From intimate gatherings to grand weddings, we bring your vision to life with delicious, beautifully presented food that leaves lasting impressions.
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

        {/* Why We Are the Best */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why We Are the Best Catering Service in Islamabad
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-6">
                  Choosing the right catering company can make or break your event. At SU Catering, we prioritize customer satisfaction, quality service, and affordability. Our team of experienced chefs and professional staff ensures that every event is handled with precision and care. We understand that when you're searching for "catering services near me" or "professional caterers in Islamabad," you're looking for reliability, taste, and value – and that's exactly what we deliver.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We offer fully customized catering services in Islamabad, allowing clients to choose their preferred menu, portion sizes, and service style. From traditional Pakistani cuisine to modern continental dishes, we cover a wide range of food options to suit every taste and dietary requirement. Our event catering services include everything from buffet setups to plated dinners, live BBQ stations, and cocktail party finger foods. Whether you need halal catering services, vegetarian options, or special dietary accommodations, we've got you covered.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What sets us apart from other catering companies in Islamabad is our unwavering commitment to excellence. We source the freshest ingredients, maintain strict hygiene standards, and employ culinary experts who understand the art of presentation. Our professional catering team doesn't just serve food – we create memorable experiences. From the initial consultation to the final cleanup, we handle every detail with professionalism and care.
                </p>
                <p className="text-lg text-gray-600">
                  Our commitment to excellence, timely service, and attention to detail makes us one of the best catering services in Islamabad and Rawalpindi. We've built our reputation on consistency, quality, and customer satisfaction, making us the preferred choice for everything from intimate family gatherings to large corporate events.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <CheckCircle className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Premium Quality Food</h3>
                  <p className="text-sm text-gray-600">Fresh ingredients, expert preparation</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Professional Staff</h3>
                  <p className="text-sm text-gray-600">Experienced chefs and servers</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <Clock className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">On-Time Service</h3>
                  <p className="text-sm text-gray-600">Punctual delivery and setup</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center hover:bg-orange-100 transition-colors">
                  <Star className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Affordable Prices</h3>
                  <p className="text-sm text-gray-600">Best value for quality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Catering Services */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Our Catering Services in Islamabad
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">💒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wedding Catering</h3>
                <p className="text-gray-600 mb-4">
                  Make your big day unforgettable with our premium wedding catering services. We specialize in creating magical culinary experiences for weddings of all sizes, from intimate ceremonies to grand celebrations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Complete wedding packages including food, serving staff, and setup</li>
                  <li>• Customized menu planning with bride and groom preferences</li>
                  <li>• Traditional and contemporary wedding cuisine options</li>
                  <li>• Elegant presentation and decor coordination</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Catering</h3>
                <p className="text-gray-600 mb-4">
                  Professional catering for meetings, conferences, and office events with timely delivery and quality food. We understand the importance of impressing clients and keeping employees satisfied.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Breakfast, lunch, and dinner catering options</li>
                  <li>• Coffee breaks and refreshment services</li>
                  <li>• Formal banquet and casual buffet setups</li>
                  <li>• Dietary accommodations for corporate events</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🎂</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Birthday & Private Events</h3>
                <p className="text-gray-600 mb-4">
                  Affordable catering services for small gatherings, birthday parties, and family events. We bring restaurant-quality food to your private celebrations at reasonable prices.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Themed menu options for special occasions</li>
                  <li>• Kids' party catering with fun food options</li>
                  <li>• Anniversary and milestone celebration packages</li>
                  <li>• Intimate dinner party catering services</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-2xl">🔥</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">BBQ & Outdoor Catering</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy live BBQ and outdoor catering services with fresh and delicious food prepared on-site. Perfect for garden parties, outdoor events, and casual gatherings.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Live BBQ stations with expert grillers</li>
                  <li>• Outdoor event equipment and setup</li>
                  <li>• Picnic and garden party catering</li>
                  <li>• Weather-appropriate outdoor solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Options */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Catering Menu Options
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pakistani Cuisine</h3>
                <p className="text-gray-600 mb-4">Authentic traditional dishes prepared with time-honored recipes and fresh ingredients</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Chicken Karahi - Spicy and aromatic</li>
                  <li>• Biryani & Pulao - Fragrant rice dishes</li>
                  <li>• Mutton Dishes - Tender and flavorful</li>
                  <li>• Daal Makhni - Creamy lentil curry</li>
                  <li>• Saag & Makki Roti - Traditional Punjabi</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">BBQ Specialties</h3>
                <p className="text-gray-600 mb-4">Grilled to perfection with authentic spices and marination techniques</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Chicken Tikka - Juicy and tender</li>
                  <li>• Seekh Kabab - Minced meat delicacy</li>
                  <li>• Grilled Items - Fresh vegetables and meats</li>
                  <li>• Malai Boti - Creamy chicken tikka</li>
                  <li>• Chapli Kabab - Spicy beef patties</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍽️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Continental Food</h3>
                <p className="text-gray-600 mb-4">International flavors prepared with premium ingredients and modern techniques</p>
                <ul className="text-gray-600 space-y-1">
                  <li>• International Dishes - Global cuisine</li>
                  <li>• Pasta & Risotto - Italian favorites</li>
                  <li>• Salads & Soups - Fresh and healthy</li>
                  <li>• Desserts & Beverages - Sweet endings</li>
                  <li>• Custom Options - Tailored to taste</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 bg-orange-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Additional Menu Categories</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Appetizers & Starters</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Samosas & Pakoras</li>
                    <li>• Spring Rolls</li>
                    <li>• Cheese Platters</li>
                    <li>• Bruschetta & Dips</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Main Course Specialties</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Seafood Delights</li>
                    <li>• Vegetarian Specialties</li>
                    <li>• Lamb & Beef Dishes</li>
                    <li>• Fusion Creations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Beverages & Desserts</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Fresh Juices & Mocktails</li>
                    <li>• Traditional Sweets</li>
                    <li>• International Desserts</li>
                    <li>• Tea & Coffee Service</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-8">
              We also offer customized catering menus in Islamabad based on your event requirements and budget. Our culinary team can create bespoke menus for any dietary restrictions, cultural preferences, or special themes you have in mind.
            </p>
          </div>
        </section>

        {/* Affordable Packages */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Affordable Catering Packages in Islamabad
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 mb-8">
                We believe that high-quality catering should be accessible to everyone. That's why we offer flexible and affordable catering packages in Islamabad designed to suit various budgets and event sizes. Our transparent pricing structure ensures you get the best value for your investment without compromising on quality or taste.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Budget Package</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-4">Starting from Rs. 799/person</p>
                  <ul className="text-gray-600 space-y-2 text-left">
                    <li>• Basic buffet setup</li>
                    <li>• 3 main dishes + rice</li>
                    <li>• Fresh salad & raita</li>
                    <li>• Basic dessert</li>
                    <li>• Disposable serving ware</li>
                    <li>• Self-service option</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">Perfect for small gatherings and casual events</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Package</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-4">Starting from Rs. 1299/person</p>
                  <ul className="text-gray-600 space-y-2 text-left">
                    <li>• Full buffet service</li>
                    <li>• 5 main dishes + rice varieties</li>
                    <li>• Appetizers & salads</li>
                    <li>• Premium desserts</li>
                    <li>• Serving staff included</li>
                    <li>• Quality serving ware</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">Most popular choice for medium-sized events</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Package</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-4">Starting from Rs. 1999/person</p>
                  <ul className="text-gray-600 space-y-2 text-left">
                    <li>• Luxury buffet service</li>
                    <li>• 7+ main dishes + specialties</li>
                    <li>• Live cooking stations</li>
                    <li>• Gourmet desserts</li>
                    <li>• Full service staff</li>
                    <li>• Premium serving ware & decor</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-4">Ideal for weddings and corporate events</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Factors Affecting Catering Prices</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Number of guests (bulk discounts available)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Menu selection & ingredient quality</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Type of event (formal vs casual)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Service requirements (staffing level)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Venue location & accessibility</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-gray-700">Special dietary requirements</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Whether you need cheap catering services in Islamabad for a small family gathering or premium packages for a grand wedding celebration, we have options for every budget. Our team works closely with you to create customized packages that meet your specific needs while ensuring excellent value for money.
              </p>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Areas We Serve in Islamabad
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-8">
                We provide comprehensive catering services across all major areas of Islamabad and beyond. Our professional team is ready to serve your events with the same high-quality standards regardless of your location within our service area.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                    Islamabad Sectors
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-left">
                    <li>• G-Sectors (G-6 to G-15)</li>
                    <li>• F-Sectors (F-6 to F-11)</li>
                    <li>• E-Sectors (E-7 to E-11)</li>
                    <li>• I-Sectors (I-8 to I-14)</li>
                    <li>• H-Sectors (H-8 to H-12)</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                    Modern Housing Societies
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-left">
                    <li>• DHA Islamabad (Phases I-V)</li>
                    <li>• Bahria Town (All phases)</li>
                    <li>• Gulberg Greens</li>
                    <li>• Park Enclave</li>
                    <li>• Capital Smart City</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-xl">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="h-5 w-5 text-orange-600 mr-2" />
                    Commercial & Business Areas
                  </h3>
                  <ul className="text-gray-600 space-y-2 text-left">
                    <li>• Blue Area</li>
                    <li>• Jinnah Super Market</li>
                    <li>• Centaurus Mall</li>
                    <li>• Islamabad Stock Exchange</li>
                    <li>• Diplomatic Enclave</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Extended Service Areas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Rawalpindi Coverage</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Saddar & Cantonment areas</li>
                      <li>• Bahria Town Rawalpindi</li>
                      <li>• DHA Phase I & II</li>
                      <li>• Adiala Road & surrounding areas</li>
                      <li>• Satellite Town & Muslim Town</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Nearby Cities</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Taxila</li>
                      <li>• Wah Cantt</li>
                      <li>• Attock (selected areas)</li>
                      <li>• Murree (seasonal catering)</li>
                      <li>• Abbottabad (special events)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-8">
                Our extensive service coverage ensures that no matter where your event is located within Islamabad-Rawalpindi region, we can provide the same exceptional catering service. For locations outside our standard service area, please contact us to discuss special arrangements.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose SU Catering */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Why Choose SU Catering?
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced Staff</h3>
                <p className="text-gray-600">Professional and experienced team for perfect event execution. Our chefs and servers are trained to handle events of all sizes with expertise and grace.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hygienic Food</h3>
                <p className="text-gray-600">Clean and hygienic food preparation following all safety standards. We maintain strict quality control and food safety protocols.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">On-Time Service</h3>
                <p className="text-gray-600">Punctual delivery and setup for your events. We understand timing is crucial and guarantee timely service.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Affordable Pricing</h3>
                <p className="text-gray-600">Competitive prices without compromising on quality. We offer transparent pricing with no hidden charges.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable Menus</h3>
                <p className="text-gray-600">Tailored menu options to suit your preferences. We work with you to create the perfect menu for your event.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Ingredients</h3>
                <p className="text-gray-600">Premium quality ingredients for delicious food. We source fresh, locally-produced ingredients whenever possible.</p>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Additional Benefits of Choosing SU Catering</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">24/7 Customer Support</h4>
                    <p className="text-gray-600">Our team is available around the clock to assist with your queries and last-minute changes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Event Planning Assistance</h4>
                    <p className="text-gray-600">We help you plan the perfect menu and service style for your specific event type.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Equipment & Setup</h4>
                    <p className="text-gray-600">Complete setup including serving equipment, chafing dishes, and decorative elements.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cleanup Services</h4>
                    <p className="text-gray-600">Post-event cleanup included so you can focus on enjoying your celebration.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-600 mt-12">
              Our goal is to deliver the best catering services in Islamabad with complete customer satisfaction. We don't just cater events – we create memorable culinary experiences that your guests will talk about long after the event is over.
            </p>
          </div>
        </section>

        {/* How to Book */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              How to Book Catering Services in Islamabad
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Reach out via phone, WhatsApp, or email to discuss your catering needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Share Details</h3>
                <p className="text-gray-600">Provide event date, guest count, venue, and any special requirements</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Choose Menu</h3>
                <p className="text-gray-600">Select from our packages or create a customized menu with our chef</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Confirm Booking</h3>
                <p className="text-gray-600">Review and confirm your booking with advance payment</p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-xl max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Booking Information We Need</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Event Details</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Event type (wedding, corporate, birthday, etc.)</li>
                    <li>• Date and time of the event</li>
                    <li>• Expected number of guests</li>
                    <li>• Venue location and setup requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Menu Preferences</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Preferred cuisine type (Pakistani, Continental, BBQ)</li>
                    <li>• Dietary restrictions or allergies</li>
                    <li>• Budget range per person</li>
                    <li>• Service style (buffet, plated, live cooking)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Our team will handle the rest and ensure a smooth experience. From initial consultation to event execution, we're with you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Your Event Now
                </Link>
                <a href="tel:+923001234567" className="inline-flex items-center justify-center px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors">
                  Call: +92 300 1234567
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book Your Event?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get in touch with us today for the best catering services in Islamabad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Now
              </Link>
              <a href="tel:+923001234567" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors">
                Call: +92 300 1234567
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ What is the cost of catering services in Islamabad?</h3>
                <p className="text-gray-600">The cost depends on the number of guests, menu selection, and type of event. Our packages start from Rs. 799 per person for budget options and go up to Rs. 1999+ per person for premium services. We offer both budget and premium packages to suit various needs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide catering services in Rawalpindi?</h3>
                <p className="text-gray-600">Yes, we provide catering services in Rawalpindi and nearby areas including Taxila, Wah Cantt, and selected areas of Attock and Murree. Our service coverage extends throughout the Islamabad-Rawalpindi region.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can I customize my catering menu?</h3>
                <p className="text-gray-600">Yes, we offer fully customizable menu options. Our culinary team works with you to create personalized menus based on your preferences, dietary restrictions, cultural requirements, and budget. We can modify existing packages or create entirely new menus.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide staff and serving services?</h3>
                <p className="text-gray-600">Yes, complete catering services including staff and setup are included in our standard and premium packages. This includes chefs, servers, cleanup crew, serving equipment, and decorative elements based on your chosen package.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ How early should I book catering services?</h3>
                <p className="text-gray-600">It is recommended to book at least 1–2 weeks in advance for small events and 4-6 weeks for larger events like weddings. For peak wedding season (October-March), we suggest booking 2-3 months in advance to secure your preferred date.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ What types of events do you cater for?</h3>
                <p className="text-gray-600">We cater for all types of events including weddings, corporate meetings, birthday parties, anniversaries, religious ceremonies, social gatherings, outdoor BBQ parties, and formal banquets. No event is too small or too large.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you offer vegetarian and special dietary options?</h3>
                <p className="text-gray-600">Yes, we offer extensive vegetarian, vegan, gluten-free, and other special dietary options. Our team can accommodate allergies and religious dietary requirements with advance notice.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ What is included in your catering packages?</h3>
                <p className="text-gray-600">Our packages include food preparation, delivery to venue, setup of buffet or serving stations, serving staff (for standard and premium packages), serving equipment, and cleanup. Premium packages also include live cooking stations and decorative elements.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide wedding catering services?</h3>
                <p className="text-gray-600">Yes, we specialize in wedding catering with complete packages including mehndi, barat, and walima events. We offer traditional wedding menus, elegant presentation, and specialized wedding service staff.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can you cater for outdoor events and BBQ parties?</h3>
                <p className="text-gray-600">Absolutely! We provide outdoor catering services with live BBQ stations, grilling equipment, and weather-appropriate setups. Perfect for garden parties, rooftop events, and outdoor celebrations.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ What areas of Islamabad do you serve?</h3>
                <p className="text-gray-600">We serve all major areas including all sectors (G, F, E, I, H), DHA Islamabad, Bahria Town, Gulberg Greens, Park Enclave, Blue Area, and other housing societies within Islamabad.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you offer corporate catering services?</h3>
                <p className="text-gray-600">Yes, we provide comprehensive corporate catering for meetings, conferences, office events, and company celebrations. We offer professional presentation, timely delivery, and menu options suitable for business settings.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ How do you ensure food quality and hygiene?</h3>
                <p className="text-gray-600">We maintain strict food safety protocols, use fresh ingredients, and follow proper hygiene standards. Our kitchen is regularly inspected, and our staff is trained in food safety procedures.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept cash, bank transfers, and online payments. A 30% advance payment is required to confirm booking, with the remaining amount due on the event day or before setup.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Can you provide catering for last-minute events?</h3>
                <p className="text-gray-600">While advance booking is preferred, we can accommodate last-minute requests based on availability. Additional charges may apply for rush orders with less than 48 hours notice.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ Do you provide tasting sessions before booking?</h3>
                <p className="text-gray-600">Yes, we offer tasting sessions for larger events (50+ guests) with advance booking. A small fee may apply which can be adjusted against the final booking amount.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Conclusion
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8">
              If you are looking for reliable and affordable catering services in Islamabad, SU Catering is the perfect choice. With our professional team, high-quality food, and flexible packages, we ensure your event is a complete success.
            </p>
            <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
              Book Your Catering Service Today
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
