import { Shield } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-osint-card border-t border-gray-800 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <Shield className="h-6 w-6 text-osint-secondary mr-2" />
                        <span className="text-gray-300 text-sm">
                            &copy; {new Date().getFullYear()} OSINT Hub. Educational Purposes Only.
                        </span>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Terms of Use
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
