import React, { useState } from 'react';
import { Truck, Bus, Wrench, MapPin, Clock, KeyRound as Pound, Users, Calendar } from 'lucide-react';

const CurrentlyHiring = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const currentJobs = [
    {
      icon: Bus,
      title: 'Bus & Coach Drivers',
      location: 'London, Manchester, Birmingham',
      type: 'Permanent & Temporary',
      salary: '£25,000 - £35,000',
      description: 'We are urgently seeking experienced Bus & Coach Drivers for positions across major UK cities. Full training provided for the right candidates.',
      requirements: [
        'Valid UK driving license (Category D)',
        'Driver CPC qualification',
        'Minimum 2 years driving experience',
        'Clean driving record',
        'Customer service skills'
      ],
      benefits: [
        'Competitive salary package',
        'Pension scheme',
        'Holiday entitlement',
        'Training and development',
        'Flexible working patterns'
      ],
      urgency: 'High',
      positions: '25+ positions available'
    },
    {
      icon: Truck,
      title: 'Truck Drivers (HGV)',
      location: 'UK Wide & Europe',
      type: 'Permanent & Contract',
      salary: '£30,000 - £45,000',
      description: 'Excellent opportunities for HGV drivers for UK and European routes. Both local and long-distance positions available.',
      requirements: [
        'Valid HGV license (Category C+E)',
        'Driver CPC qualification',
        'Digital tachograph card',
        'ADR certification (preferred)',
        'EU passport or work permit'
      ],
      benefits: [
        'Excellent rates of pay',
        'Overtime opportunities',
        'Modern fleet vehicles',
        'Fuel cards provided',
        'European travel opportunities'
      ],
      urgency: 'High',
      positions: '40+ positions available'
    },
    {
      icon: Wrench,
      title: 'Heavy Vehicle Mechanics',
      location: 'London, Birmingham, Leeds',
      type: 'Permanent',
      salary: '£35,000 - £50,000',
      description: 'Skilled Heavy Vehicle Mechanics required for busy transport depots. Work on buses, coaches, and HGV vehicles.',
      requirements: [
        'NVQ Level 3 in Vehicle Maintenance',
        'Heavy vehicle experience (minimum 3 years)',
        'MOT testing qualification (preferred)',
        'Diagnostic equipment experience',
        'Health & Safety awareness'
      ],
      benefits: [
        'Competitive salary',
        'Overtime available',
        'Company pension',
        'Tool allowance',
        'Career progression opportunities'
      ],
      urgency: 'Medium',
      positions: '15+ positions available'
    }
  ];

  const urgencyColors = {
    High: 'bg-red-100 text-red-800 border-red-200',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Low: 'bg-green-100 text-green-800 border-green-200'
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6">
            Currently Hiring
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immediate opportunities available across the UK and Europe. 
            Apply now for these urgent positions with competitive packages and excellent benefits.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-navy-900 mb-2">80+</div>
            <div className="text-gray-600">Open Positions</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-gold-500 mb-2">24hrs</div>
            <div className="text-gray-600">Average Response</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-navy-900 mb-2">5</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="text-3xl font-bold text-gold-500 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-8">
          {currentJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Job Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="bg-navy-900 p-4 rounded-2xl">
                      <job.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-900 mb-2">{job.title}</h2>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Pound className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-medium border ${urgencyColors[job.urgency as keyof typeof urgencyColors]}`}>
                      {job.urgency} Priority
                    </div>
                    <div className="flex items-center gap-2 text-navy-900 font-semibold">
                      <Users className="w-4 h-4" />
                      <span>{job.positions}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Content */}
              <div className="p-8">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {job.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Requirements */}
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">Requirements</h3>
                    <ul className="space-y-3">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-navy-900 rounded-full mt-2"></div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mt-2"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Apply Now
                  </button>
                  <button className="border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    More Information
                  </button>
                  <button className="text-gold-500 hover:text-gold-600 font-semibold px-4 py-3 transition-colors">
                    Share Position →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Process */}
        <div className="mt-20 bg-navy-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quick Application Process</h2>
            <p className="text-xl text-gray-300">
              Get started with your application in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Submit Application</h3>
              <p className="text-gray-300">Complete our quick online application form with your details and CV</p>
            </div>
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Initial Screening</h3>
              <p className="text-gray-300">Our recruitment team will review your application and contact you within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Working</h3>
              <p className="text-gray-300">Complete final checks and begin your new role with full support</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Application Process
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyHiring;