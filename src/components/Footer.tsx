import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-navy-900 text-white px-3 py-2 rounded-lg font-bold text-xl">
                CAVELLE
              </div>
              <span className="ml-2 text-gray-400 font-medium">GROUP LTD</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional recruitment solutions across the UK and Europe, connecting skilled and non-skilled talent with leading organizations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <img src="/logo.png" alt="Cavelle Group Logo" className="h-16" />
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Skilled Recruitment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Non-Skilled Positions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Temporary Employment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Permanent Placements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">UK & Europe Coverage</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Locations</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">United Kingdom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Germany</a></li>
              <li><a href="#" className="hover:text-white transition-colors">France</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Netherlands</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ireland</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+44 07424413744</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@cavellegroup.com</span>
              </div>
              <div className="text-sm">
                Suite 6346 Unit 3a 34-35 Hatton Garden, Holborn, London, England, EC1N8DX
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CAVELLE GROUP LTD. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;