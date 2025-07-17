import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Users, Target, TrendingUp } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  
  const slides = [
    {
      title: "Professional",
      highlight: "Recruitment",
      subtitle: "Solutions",
      description: "Connecting exceptional talent across the UK and Europe with leading organizations. CAVELLE GROUP LTD provides comprehensive recruitment services for skilled and non-skilled positions across diverse industries.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      benefits: [
        "UK & Europe market expertise",
        "Skilled and non-skilled positions",
        "Permanent and temporary placements"
      ],
      primaryCTA: "Find Talent",
      secondaryCTA: "Explore Opportunities",
      icon: Users,
      gradient: "from-navy-900/80 via-navy-800/70 to-transparent"
    },
    {
      title: "Executive",
      highlight: "Search",
      subtitle: "Excellence",
      description: "Flexible temporary employment solutions across the UK and Europe. From skilled professionals to non-skilled workers, we provide rapid deployment for short-term projects and seasonal demands.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      benefits: [
        "Skilled temporary professionals",
        "Non-skilled workforce solutions",
        "Rapid deployment across UK & Europe"
      ],
      primaryCTA: "Temporary Staff",
      secondaryCTA: "Learn More",
      icon: Target,
      gradient: "from-navy-900/85 via-navy-700/75 to-transparent"
    },
    {
      title: "Strategic",
      highlight: "Talent",
      subtitle: "Consulting",
      description: "Comprehensive recruitment across all skill levels throughout the UK and Europe. From technical specialists and management roles to general labor and entry-level positions - we cover the full spectrum.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
      benefits: [
        "Technical and professional roles",
        "General labor and entry-level positions",
        "Full spectrum across UK & Europe"
      ],
      primaryCTA: "View Positions",
      secondaryCTA: "View Services",
      icon: TrendingUp,
      gradient: "from-navy-900/80 via-navy-800/65 to-navy-900/40"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleSlideChange((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (newSlide: number | ((prev: number) => number)) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (typeof newSlide === 'function') {
        setCurrentSlide(newSlide);
      } else {
        setCurrentSlide(newSlide);
      }
      setTimeout(() => setIsTransitioning(false), 100);
    }, 300);
  };

  const nextSlide = () => {
    handleSlideChange((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      handleSlideChange(index);
    }
  };

  return (
    <div className="relative" style={{ height: '1100px' }}>
      <div className="absolute inset-0">
        {/* Slider content */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.image}
              alt={`${slide.title} ${slide.subtitle}`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}></div>
          </div>
        ))}

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Animated Icon */}
                <div className={`flex items-center gap-4 transition-all duration-700 ease-out ${
                  isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}>
                  <div className="bg-gold-500/20 backdrop-blur-sm p-4 rounded-2xl border border-gold-400/30 transform hover:scale-110 transition-transform duration-300">
                    {React.createElement(slides[currentSlide].icon, { 
                      className: "w-8 h-8 text-gold-400" 
                    })}
                  </div>
                  <div className="text-gold-400 font-semibold text-sm uppercase tracking-widest">
                    {slides[currentSlide].title} Services
                  </div>
                </div>

                {/* Animated Title */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                    <div className={`transition-all duration-700 ease-out delay-100 ${
                      isTransitioning ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'
                    }`}>
                      {slides[currentSlide].title}
                    </div>
                    <div className={`text-gold-400 transition-all duration-700 ease-out delay-200 ${
                      isTransitioning ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'
                    }`}>
                      {slides[currentSlide].highlight}
                    </div>
                    <div className={`transition-all duration-700 ease-out delay-300 ${
                      isTransitioning ? 'opacity-0 translate-x-12' : 'opacity-100 translate-x-0'
                    }`}>
                      {slides[currentSlide].subtitle}
                    </div>
                  </h1>
                </div>

                {/* Animated Description */}
                <p className={`text-xl text-gray-200 leading-relaxed max-w-2xl transition-all duration-700 ease-out delay-400 ${
                  isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}>
                  {slides[currentSlide].description}
                </p>

                {/* Animated Benefits */}
                <div className="space-y-4">
                  {slides[currentSlide].benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 transition-all duration-700 ease-out ${
                        isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'
                      }`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="bg-gold-500/20 backdrop-blur-sm p-2 rounded-full border border-gold-400/30">
                        <CheckCircle className="w-5 h-5 text-gold-400" />
                      </div>
                      <span className="text-gray-200 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Animated CTA Buttons */}
                <div className={`flex flex-col sm:flex-row gap-6 pt-8 transition-all duration-700 ease-out delay-800 ${
                  isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}>
                  <button className="group bg-gold-500 hover:bg-gold-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-gold-500/25 transform hover:scale-105">
                    {slides[currentSlide].primaryCTA}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                  <button className="border-2 border-white/80 text-white hover:bg-white hover:text-navy-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-none transform hover:scale-105">
                    {slides[currentSlide].secondaryCTA}
                  </button>
                </div>
              </div>

              {/* Right Side - Company Logo/Branding */}
              <div className={`hidden md:flex justify-center items-center transition-all duration-700 ease-out delay-600 ${
                isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}>
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="text-center space-y-6">
                    <img src="/logo.png" alt="Cavelle Group Logo" className="h-28 mx-auto" />
                    <div className="flex justify-center space-x-2">
                      <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse delay-100"></div>
                      <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-8 bg-white/10 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/20">
            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentSlide 
                      ? 'bg-gold-500 w-12 h-3 shadow-lg shadow-gold-500/50' 
                      : 'bg-white/40 hover:bg-white/60 w-3 h-3'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-xl transition-all duration-300 group border border-white/30 hover:border-gold-400/50"
              >
                <ChevronLeft className="w-5 h-5 text-white group-hover:text-gold-400 transition-colors" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-xl transition-all duration-300 group border border-white/30 hover:border-gold-400/50"
              >
                <ChevronRight className="w-5 h-5 text-white group-hover:text-gold-400 transition-colors" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-gold-400 to-gold-600 transition-all duration-300 ease-out shadow-lg shadow-gold-500/50"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="flex flex-col items-center space-y-2 text-white/60">
            <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;