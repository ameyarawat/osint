import { Link } from 'react-router-dom';
import { Users, Globe, Lock, Database, Search, Share2, Map, Camera, Anchor, Plane, Car, Wind } from 'lucide-react';

const Categories = () => {
    const categories = [
        { name: 'People OSINT', icon: Users, desc: 'Find individuals using social media, public records, and email lookups.', color: 'text-purple-400' },
        { name: 'Domain OSINT', icon: Globe, desc: 'Investigate websites, efficient subdomain enumeration, and DNS records.', color: 'text-blue-400' },
        { name: 'Social Media', icon: Share2, desc: 'Analyze social footprints across Twitter, Facebook, LinkedIn and more.', color: 'text-pink-400' },
        { name: 'Image Analysis', icon: Camera, desc: 'Reverse image search, metadata extraction, and forensic analysis.', color: 'text-yellow-400' },
        { name: 'Maritime OSINT', icon: Anchor, desc: 'Ship tracking, AIS data, and port information.', color: 'text-cyan-500' },
        { name: 'Aviation OSINT', icon: Plane, desc: 'Flight tracking, aircraft registry, and ADS-B data.', color: 'text-sky-500' },
        { name: 'Vehicle OSINT', icon: Car, desc: 'VIN checks, license plate lookup, and owner history.', color: 'text-red-500' },
        { name: 'Radar OSINT', icon: Wind, desc: 'Weather radar, environmental monitoring, and signals.', color: 'text-teal-400' },
        { name: 'Dark Web', icon: Lock, desc: 'Monitor Tor hidden services and deep web marketplaces safely.', color: 'text-red-400' },
        { name: 'Data Leaks', icon: Database, desc: 'Search through breached databases and credential dumps.', color: 'text-green-400' },
        { name: 'Geospatial', icon: Map, desc: 'Geolocation tools, satellite imagery analysis, and map reconnaissance.', color: 'text-orange-400' },
        { name: 'Search Engines', icon: Search, desc: 'Specialized search engines for IoT, code, and documents.', color: 'text-cyan-400' },
    ];

    return (
        <div className="bg-osint-dark min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Explore Tool Categories</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Browse our curated collection of OSINT tools organized by investigation type. Start your research in the right place.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.name}
                            to={`/tools?category=${encodeURIComponent(cat.name)}`}
                            className="bg-osint-card p-8 rounded-xl border border-gray-800 hover:border-osint-accent hover:bg-gray-800 transition-all group flex flex-col items-center text-center"
                        >
                            <div className={`p-4 rounded-full bg-gray-900/50 mb-6 group-hover:scale-110 transition-transform`}>
                                <cat.icon className={`h-10 w-10 ${cat.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{cat.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
