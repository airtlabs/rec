import React from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '1500+', label: 'Successful Placements' },
    { number: '500+', label: 'Partner Companies' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from candidate selection to client service.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our extensive network spans across industries and geographies, connecting talent worldwide.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships based on trust, transparency, and mutual success.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology and methodologies to deliver superior results.'
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            About CAVELLE GROUP
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A trusted partner in recruitment across the UK and Europe, delivering exceptional talent 
            solutions for both skilled and non-skilled positions across diverse industries.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-navy-900">
              Your UK & Europe Recruitment Partner
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded with a vision to connect talent across the UK and Europe, CAVELLE GROUP LTD 
              has established itself as a premier recruitment consultancy specializing in both skilled 
              and non-skilled positions. Our team brings deep market knowledge across European territories 
              and a commitment to excellence that sets us apart.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you need skilled professionals, non-skilled workers, or temporary staff, we understand 
              that every organization has unique needs. We specialize in permanent and temporary placements 
              across all skill levels, providing tailored recruitment strategies for the UK and European markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Our Story
              </button>
              <button className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Meet Our Team
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional team meeting"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-navy-900 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;