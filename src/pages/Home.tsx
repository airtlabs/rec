import React, { useEffect } from 'react';
import { Users, Target, Briefcase, Award, CheckCircle, ArrowRight, MapPin, Phone, Mail, Star } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigation = (page: string) => {
    window.scrollTo(0, 0);
    onNavigate(page);
  };

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
    }
  ];

  const sectors = [
    {
      title: 'Healthcare',
      description: 'Nurses, Midwives, Radiologists, Healthcare Assistants',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Education',
      description: 'Teachers, Nursery Staff, Teaching Assistants',
      image: 'https://images.pexels.com/photos/8613082/pexels-photo-8613082.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Hospitality',
      description: 'Chefs, Pastry Chefs, Kitchen Staff',
      image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Management',
      description: 'Engineers, Designers, Drivers',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      color: 'from-purple-500 to-indigo-600'
    }
  ];

  const stats = [
    { number: '2+', label: 'Years Experience', icon: Award },
    { number: '1500+', label: 'Successful Placements', icon: Users },
    { number: '500+', label: 'Partner Companies', icon: Briefcase },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'HR Director, London Healthcare Trust',
      content: 'CAVELLE GROUP consistently delivers exceptional healthcare professionals. Their understanding of our needs and quick turnaround times have been invaluable.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Operations Manager, European Logistics',
      content: 'Outstanding service for our HGV driver recruitment across Europe. Professional, reliable, and they truly understand the transport industry.',
      rating: 5
    },
    {
      name: 'Emma Williams',
      role: 'School Principal, Birmingham',
      content: 'The quality of teaching staff provided by CAVELLE GROUP has been exceptional. They take time to understand our school culture and requirements.',
      rating: 5
    }
  ];

  const currentJobs = [
    {
      title: 'Bus & Coach Drivers',
      location: 'London, Manchester, Birmingham',
      type: 'Permanent & Temporary',
      urgency: 'High Priority',
      positions: '25+ Available'
    },
    {
      title: 'HGV Truck Drivers',
      location: 'UK Wide & Europe',
      type: 'Permanent & Contract',
      urgency: 'High Priority',
      positions: '40+ Available'
    },
    {
      title: 'Heavy Vehicle Mechanics',
      location: 'London, Birmingham, Leeds',
      type: 'Permanent',
      urgency: 'Medium Priority',
      positions: '2+ Available'
    }
  ];

  return (
    <div>
      <HeroSlider />
      
      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Our Recruitment Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive recruitment solutions across the UK and Europe for both skilled and non-skilled positions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gold-200 transform hover:-translate-y-2"
              >
                <div className="bg-navy-900 group-hover:bg-gold-500 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-gold-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-navy-900 group-hover:text-gold-500 font-semibold flex items-center gap-2 transition-colors">
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our track record speaks for itself across the UK and European markets
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <div className="bg-gold-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Recruitment Sectors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized recruitment across key industries in the UK and Europe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-12 relative">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${sector.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                </div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2">{sector.title}</h3>
                  <p className="text-gray-200 mb-4">{sector.description}</p>
                  <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 self-start">
                    View Positions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Hiring Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              Currently Hiring
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immediate opportunities available across the UK and Europe with competitive packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {currentJobs.map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gold-500 px-3 py-1 rounded-full text-sm font-semibold">
                    {job.urgency}
                  </div>
                  <div className="text-gold-400 font-semibold">{job.positions}</div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{job.title}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-navy-900 hover:bg-navy-800 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              View All Open Positions
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading organizations across the UK and Europe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-navy-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find the Right Talent?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Whether you need skilled professionals or non-skilled workers across the UK and Europe, 
            our expert team is ready to help you achieve your staffing goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold-500/25"
              onClick={() => handleNavigation('contact')}
            >
              Start Recruitment Process
            </button>
            <button
              className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => handleNavigation('contact')}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy-900 mb-6">
                Get In Touch Today
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to discuss your recruitment needs? Our expert team is here to help you find the right talent across the UK and Europe.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-navy-900 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">Phone</div>
                    <div className="text-gray-600">+44 20 7123 4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-navy-900 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">Email</div>
                    <div className="text-gray-600">info@cavellegroup.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-navy-900 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">London Office</div>
                    <div className="text-gray-600">25 Moorgate, London EC2R 6AY</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-navy-900 mb-6">Quick Contact</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent resize-none"
                />
                <button className="w-full bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;