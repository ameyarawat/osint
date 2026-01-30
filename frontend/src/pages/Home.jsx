import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Search, Database, Globe, Users, Lock } from 'lucide-react';
import api from '../api';
import ToolCard from '../components/ToolCard';

const Home = () => {
    const [featuredTools, setFeaturedTools] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTools = async () => {
            try {
                const { data } = await api.get('/tools');
                // Take first 10 for marquee
                setFeaturedTools(data.slice(0, 10));
            } catch (error) {
                console.error('Error fetching tools', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTools();
    }, []);

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
                            Master the Art of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-osint-secondary to-osint-accent">Open Source Intelligence</span>
                        </h1>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400">
                            The ultimate directory for ethical OSINT tools. detailed guides, verified links, and categorized resources for cybersecurity professionals.
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            <Link to="/tools" className="px-8 py-3 bg-osint-accent hover:bg-sky-600 text-white font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20">
                                Explore Directory <ArrowRight className="h-5 w-5" />
                            </Link>
                            <Link to="/about" className="px-8 py-3 bg-osint-card/30 hover:bg-gray-800/50 text-white font-bold rounded-lg transition-all backdrop-blur-sm">
                                Learn OSINT
                            </Link>
                        </div>

                        {/* Search Bar */}
                        <div className="mt-12 max-w-xl mx-auto relative group transition-transform duration-300 hover:scale-105">
                            <div className="absolute -inset-1 bg-gradient-to-r from-osint-secondary to-osint-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                if (searchQuery.trim()) {
                                    navigate(`/tools?search=${encodeURIComponent(searchQuery)}`);
                                }
                            }} className="relative bg-black/60 backdrop-blur-md rounded-lg p-2 flex items-center">
                                <Search className="h-6 w-6 text-gray-400 ml-3" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search for tools like Maltego, Shodan..."
                                    className="w-full bg-transparent border-none text-white focus:ring-0 focus:outline-none px-4 py-2"
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is OSINT? */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                What is <span className="text-osint-accent">OSINT</span>?
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                <strong>Open Source Intelligence (OSINT)</strong> is the practice of collecting and analyzing information from publicly available sources to produce actionable intelligence. It is a critical component of cybersecurity, investigative journalism, and legal research.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                Unlike hacking, OSINT relies on <strong>legal, accessible data</strong>. The challenge lies not in finding the data, but in connecting the dots to reveal the bigger picture.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-osint-accent/10 rounded-lg text-osint-accent">
                                        <Database className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Passive Reconnaissance</h3>
                                        <p className="text-gray-500">Gathering information without directly interacting with the target (e.g., WHOIS records, social media looking).</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                        <Globe className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg">Active Reconnaissance</h3>
                                        <p className="text-gray-500">Probing the target system directly to discover vulnerabilities (e.g., port scanning, banner grabbing).</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-osint-card/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden shadow-2xl group hover:border-osint-accent/50 transition-all">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-osint-accent/5 rounded-full blur-3xl group-hover:bg-osint-accent/10 transition-colors"></div>
                            <h3 className="text-2xl font-bold text-white mb-6">The Intelligence Cycle</h3>
                            <ul className="space-y-6 relative z-10">
                                {[
                                    { title: 'Planning & Direction', desc: 'Defining the goals and scope of the investigation.' },
                                    { title: 'Collection', desc: 'Gathering raw data from open sources (Web, Social, Records).' },
                                    { title: 'Processing', desc: 'Organizing and translating data into a usable format.' },
                                    { title: 'Analysis', desc: 'Interpreting the data to find patterns and answers.' },
                                    { title: 'Dissemination', desc: 'Presenting the findings in a clear, actionable report.' },
                                ].map((step, idx) => (
                                    <li key={idx} className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/50 text-osint-accent font-bold">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium">{step.title}</h4>
                                            <p className="text-sm text-gray-500">{step.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Preview */}
            <section className="py-20 bg-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <Link to="/categories" className="inline-block group">
                            <h2 className="text-3xl font-bold text-white group-hover:text-osint-accent transition-colors flex items-center gap-2 justify-center">
                                Popular Categories <ArrowRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                            </h2>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'People OSINT', icon: Users, color: 'text-purple-400' },
                            { name: 'Domain OSINT', icon: Globe, color: 'text-blue-400' },
                            { name: 'Dark Web', icon: Lock, color: 'text-red-400' },
                            { name: 'Social Media', icon: Database, color: 'text-green-400' },
                        ].map((cat) => (
                            <Link key={cat.name} to={`/tools?category=${encodeURIComponent(cat.name)}`} className="bg-osint-card p-6 rounded-3xl border border-white/5 hover:border-osint-accent/50 hover:bg-osint-card transition-all text-center group shadow-lg">
                                <cat.icon className={`h-10 w-10 mx-auto mb-4 ${cat.color} transform transition-transform duration-300 group-hover:scale-[1.4]`} />
                                <h3 className="font-semibold text-white">{cat.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Tools Marquee */}
            <section className="py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold text-white">Featured Tools</h2>
                        <Link to="/tools" className="text-osint-accent hover:text-white font-medium flex items-center gap-1">
                            View All <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                {loading ? (
                    <div className="text-center text-gray-500">Loading tools...</div>
                ) : (
                    <div className="relative w-full">
                        <div className="flex animate-marquee-reverse hover:pause gap-8 w-max">
                            {/* Duplicate list to create infinite loop */}
                            {[...featuredTools, ...featuredTools].map((tool, idx) => (
                                <div key={`${tool._id}-${idx}`} className="w-[300px] md:w-[350px] flex-shrink-0">
                                    <ToolCard tool={tool} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Home;
