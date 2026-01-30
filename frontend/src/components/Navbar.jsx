import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Radar, Search } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                const heroSearch = document.getElementById('hero-search-container');
                if (heroSearch) {
                    const rect = heroSearch.getBoundingClientRect();
                    // Show navbar search when hero search scrolls behind/past the navbar (64px height)
                    setShowSearch(rect.bottom < 64);
                } else {
                    setShowSearch(window.scrollY > 400);
                }
            } else {
                setShowSearch(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        setTimeout(handleScroll, 100); // Small delay to ensure DOM is ready on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/tools?search=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
        }
    };

    return (
        <nav className="bg-osint-card border-b border-gray-800 sticky top-0 z-50">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <Radar className="h-8 w-8 text-osint-accent" />
                            <span className="font-bold text-xl tracking-tight text-white">
                                OSINT<span className="text-osint-accent">Hub</span>
                            </span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-8 flex items-baseline space-x-4">
                                <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Home
                                </Link>
                                <Link to="/tools" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Directory
                                </Link>
                                <Link to="/categories" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Categories
                                </Link>
                                <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    Legal & Ethical
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className={`hidden md:flex items-center transition-all duration-500 transform ${showSearch ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search tools..."
                                className="bg-gray-900/50 text-sm text-white border border-gray-700 rounded-full pl-10 pr-4 py-1.5 focus:outline-none focus:border-osint-accent focus:ring-1 focus:ring-osint-accent w-64 transition-all"
                            />
                            <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </form>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-osint-card border-b border-gray-800">
                        <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </Link>
                        <Link to="/tools" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Directory
                        </Link>
                        <Link to="/categories" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Categories
                        </Link>
                        <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Legal & Ethical
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

