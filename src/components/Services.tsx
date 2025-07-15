import React from 'react';
import { Users, Target, Briefcase, TrendingUp, Shield, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Skilled Recruitment',
      description: 'Professional recruitment for skilled positions across the UK and Europe including technical, managerial, and specialist roles.',
      features: ['Technical specialists', 'Management positions', 'Professional services roles']
    },
    {
      icon: Target,
      title: 'Non-Skilled Positions',
      description: 'Comprehensive recruitment for non-skilled and entry-level positions across various industries in the UK and Europe.',
      features: ['General labor positions', 'Entry-level opportunities', 'Industrial and service roles']
    },
    {
      icon: Briefcase,
      title: 'Temporary Employment',
      description: 'Flexible temporary staffing solutions for both skilled and non-skilled positions across the UK and European markets.',
      features: ['Short-term contracts', 'Seasonal workforce', 'Project-based staffing']
    },
    {
      icon: TrendingUp,
      title: 'UK & Europe Coverage',
      description: 'Extensive network coverage across the United Kingdom and European markets with local expertise and compliance knowledge.',
      features: ['UK market expertise', 'European network', 'Local compliance knowledge']
    },
    {
      icon: Shield,
      title: 'Permanent Placements',
      description: 'Long-term permanent recruitment solutions for both skilled and non-skilled positions with comprehensive candidate screening.',
      features: ['Full-time positions', 'Career development', 'Long-term partnerships']
    },
    {
      icon: Clock,
      title: 'Rapid Response',
      description: 'Urgent staffing solutions across the UK and Europe with accelerated timelines for critical workforce needs.',
      features: ['24/7 availability', 'Express placement', 'Emergency workforce solutions']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive recruitment solutions tailored to your organization's unique needs. 
            From executive search to contract staffing, we deliver results that matter.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-navy-900 p-3 rounded-lg group-hover:bg-gold-500 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-navy-900 font-medium hover:text-gold-500 transition-colors flex items-center gap-2">
                  Learn More
                  <span className="text-gold-500">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;