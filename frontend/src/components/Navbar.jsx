import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { Menu, X, Shield, User, LogOut } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-osint-card border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <Shield className="h-8 w-8 text-osint-accent" />
                            <span className="font-bold text-xl tracking-tight text-white">
                                OSINT<span className="text-osint-accent">Hub</span>
                            </span>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
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
                    <div className="hidden md:block">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link to={user.role === 'admin' ? '/admin/dashboard' : '/profile'} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                                    <User className="h-5 w-5" />
                                    <span className="text-sm font-medium">{user.username}</span>
                                </Link>
                                <button onClick={handleLogout} className="text-gray-400 hover:text-red-400">
                                    <LogOut className="h-5 w-5" />
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link to="/login" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
                                    Login
                                </Link>
                                <Link to="/signup" className="bg-osint-accent hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-lg shadow-sky-500/20">
                                    Sign Up
                                </Link>
                            </div>
                        )}
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
                        {user ? (
                            <>
                                <Link to={user.role === 'admin' ? '/admin/dashboard' : '/profile'} onClick={() => setIsOpen(false)} className="text-osint-accent block px-3 py-2 rounded-md text-base font-medium">
                                    My Profile
                                </Link>
                                <button onClick={() => { handleLogout(); setIsOpen(false); }} className="text-red-400 block w-full text-left px-3 py-2 rounded-md text-base font-medium">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" onClick={() => setIsOpen(false)} className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
                                    Login
                                </Link>
                                <Link to="/signup" onClick={() => setIsOpen(false)} className="text-osint-accent block px-3 py-2 rounded-md text-base font-medium">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

