import React from 'react';
import { Heart, GraduationCap, ChefHat, Briefcase, Users, MapPin } from 'lucide-react';

const Sectors = () => {
  const sectors = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Specialized healthcare recruitment across the UK and Europe for critical medical positions.',
      positions: [
        'Nurses (RGN, RMN, RLD)',
        'Midwives',
        'Radiologists',
        'Healthcare Assistants',
        'Care Workers',
        'Medical Technicians'
      ],
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Educational professionals for schools, nurseries, and childcare facilities across the UK and Europe.',
      positions: [
        'School Teachers (Primary & Secondary)',
        'Nursery Teachers',
        'Nursery Managers',
        'Teaching Assistants',
        'Childminders',
        'Special Educational Needs Support'
      ],
      image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: ChefHat,
      title: 'Hospitality & Restaurants',
      description: 'Culinary professionals for restaurants, hotels, and hospitality venues across the UK and Europe.',
      positions: [
        'Head Chefs',
        'Sous Chefs',
        'Pastry Chefs',
        'Line Cooks',
        'Kitchen Assistants',
        'Restaurant Managers'
      ],
      image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Briefcase,
      title: 'Management & Professional',
      description: 'Management and professional roles across various industries in the UK and Europe.',
      positions: [
        'Civil Engineers',
        'Graphic Designers',
        'Project Managers',
        'Business Analysts',
        'HR Professionals',
        'Finance Specialists'
      ],
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Recruitment Sectors
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in recruiting across key sectors throughout the UK and Europe, 
            providing both skilled and non-skilled professionals for permanent and temporary positions.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="space-y-16">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-r ${sector.color} p-4 rounded-2xl`}>
                    <sector.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-navy-900">{sector.title}</h2>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {sector.description}
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-navy-900">Available Positions:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {sector.positions.map((position, posIndex) => (
                      <div key={posIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                        <span className="text-gray-700 font-medium">{position}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    View Open Positions
                  </button>
                  <button className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Submit CV
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                <img
                  src={sector.image}
                  alt={`${sector.title} professionals`}
                  className="rounded-2xl shadow-xl w-full h-80 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${sector.color} opacity-20 rounded-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Areas */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Coverage Areas</h2>
            <p className="text-lg text-gray-600">
              We provide recruitment services across the UK and Europe with local expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {['United Kingdom', 'Germany', 'Poland', 'Malta', 'Ireland'].map((country, index) => (
              <div key={index} className="text-center">
                <div className="bg-navy-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-navy-900">{country}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Hire in Your Sector?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our sector specialists to discuss your specific recruitment needs across the UK and Europe.
          </p>
          <button className="bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
            Contact Sector Specialist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sectors;