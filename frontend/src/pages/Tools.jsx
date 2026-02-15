import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import api from '../api';
import ToolCard from '../components/ToolCard';
import AuthContext from '../context/AuthContext';

const Tools = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialSearch = searchParams.get('search') || '';
    const initialCategory = searchParams.get('category') || '';
    const initialPlatform = searchParams.get('platform') || '';
    const initialLicense = searchParams.get('license') || '';

    const [tools, setTools] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(initialSearch);
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [selectedPlatform, setSelectedPlatform] = useState(initialPlatform);
    const [selectedLicense, setSelectedLicense] = useState(initialLicense);

    const [openSections, setOpenSections] = useState({
        category: false,
        platform: false,
        license: false
    });

    const categories = ['People OSINT', 'Domain OSINT', 'Social Media', 'Image Analysis', 'Maritime OSINT', 'Aviation OSINT', 'Vehicle OSINT', 'Radar OSINT', 'Geospatial', 'Dark Web', 'Relationship Analysis', 'IoT Search Engine', 'Data Leaks OSINT'];
    const platforms = ['Windows', 'Linux', 'macOS', 'Web'];
    const licenses = ['Free', 'Paid', 'Freemium'];

    // Sync state with URL params changes (e.g. from Home page)
    useEffect(() => {
        const query = searchParams.get('search') || '';
        const category = searchParams.get('category') || '';

        setSearch(query);
        setSelectedCategory(category);
    }, [searchParams]);

    useEffect(() => {
        fetchTools();
    }, [selectedCategory, selectedPlatform, selectedLicense, search]); // Added search to dependency

    const fetchTools = async () => {
        setLoading(true);
        try {
            const params = {};
            if (selectedCategory) params.category = selectedCategory;
            if (selectedPlatform) params.platform = selectedPlatform;
            if (selectedLicense) params.license = selectedLicense;
            if (search) params.search = search;

            const { data } = await api.get('/tools', { params });
            setTools(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const { user } = useContext(AuthContext);

    const handleSearch = (e) => {
        e.preventDefault();
        // Update URL to reflect search
        if (search) {
            setSearchParams({ search });

            // Save search history
            if (user) {
                api.post('/users/history/search', { query: search }).catch(err => console.error('Search history save failed', err));
            }
        } else {
            setSearchParams({});
        }
        // fetchTools triggered by dependency
    };

    const clearFilters = () => {
        setSelectedCategory('');
        setSelectedPlatform('');
        setSelectedLicense('');
        setSearch('');
        setSearchParams({});
    };

    return (
        <div className="bg-osint-dark min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header & Search */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">OSINT Tools Directory</h1>
                        <p className="text-gray-400">Discover and access the best open source intelligence tools.</p>
                    </div>
                    <form onSubmit={handleSearch} className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search tools..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-osint-card border border-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-osint-accent focus:border-transparent outline-none"
                        />
                    </form>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:w-1/4 space-y-6">
                        <div className="bg-osint-card p-6 rounded-lg border border-gray-800">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-white flex items-center gap-2">
                                    <Filter className="h-4 w-4" /> Filters
                                </h3>
                                {(selectedCategory || selectedPlatform || selectedLicense || search) && (
                                    <button onClick={clearFilters} className="text-xs text-osint-accent hover:text-white flex items-center gap-1">
                                        <X className="h-3 w-3" /> Clear
                                    </button>
                                )}
                            </div>

                            {/* Category Filter */}
                            <div className="mb-6 border-b border-gray-800 pb-4">
                                <button
                                    onClick={() => setOpenSections(prev => ({ ...prev, category: !prev.category }))}
                                    className="flex items-center justify-between w-full text-sm font-medium text-gray-400 uppercase tracking-wide hover:text-white transition-colors"
                                >
                                    Category
                                    {openSections.category ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </button>
                                {openSections.category && (
                                    <div className="space-y-2 mt-4 animate-fadeIn">
                                        {categories.map(cat => (
                                            <label key={cat} className="flex items-center space-x-2 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    checked={selectedCategory === cat}
                                                    onChange={() => setSelectedCategory(cat)}
                                                    className="form-radio text-osint-accent focus:ring-osint-accent bg-gray-900 border-gray-700"
                                                />
                                                <span className={`text-sm ${selectedCategory === cat ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>{cat}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Platform Filter */}
                            <div className="mb-6 border-b border-gray-800 pb-4">
                                <button
                                    onClick={() => setOpenSections(prev => ({ ...prev, platform: !prev.platform }))}
                                    className="flex items-center justify-between w-full text-sm font-medium text-gray-400 uppercase tracking-wide hover:text-white transition-colors"
                                >
                                    Platform
                                    {openSections.platform ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </button>
                                {openSections.platform && (
                                    <div className="space-y-2 mt-4 animate-fadeIn">
                                        {platforms.map(plat => (
                                            <label key={plat} className="flex items-center space-x-2 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="platform"
                                                    checked={selectedPlatform === plat}
                                                    onChange={() => setSelectedPlatform(plat)}
                                                    className="form-radio text-osint-accent focus:ring-osint-accent bg-gray-900 border-gray-700"
                                                />
                                                <span className={`text-sm ${selectedPlatform === plat ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>{plat}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* License Filter */}
                            <div>
                                <button
                                    onClick={() => setOpenSections(prev => ({ ...prev, license: !prev.license }))}
                                    className="flex items-center justify-between w-full text-sm font-medium text-gray-400 uppercase tracking-wide hover:text-white transition-colors"
                                >
                                    License
                                    {openSections.license ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </button>
                                {openSections.license && (
                                    <div className="space-y-2 mt-4 animate-fadeIn">
                                        {licenses.map(lic => (
                                            <label key={lic} className="flex items-center space-x-2 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    name="license"
                                                    checked={selectedLicense === lic}
                                                    onChange={() => setSelectedLicense(lic)}
                                                    className="form-radio text-osint-accent focus:ring-osint-accent bg-gray-900 border-gray-700"
                                                />
                                                <span className={`text-sm ${selectedLicense === lic ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>{lic}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </aside>

                    {/* Tool Grid */}
                    <main className="lg:w-3/4">
                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-osint-accent"></div>
                            </div>
                        ) : tools.length === 0 ? (
                            <div className="text-center py-20 bg-osint-card rounded-lg border border-gray-800 flex flex-col items-center">
                                <AlertCircle className="h-12 w-12 text-gray-600 mb-4" />
                                {search ? (
                                    <>
                                        <h3 className="text-xl font-bold text-white mb-2">Tool Not Found</h3>
                                        <p className="text-gray-400 max-w-md">
                                            We couldn't find any tool matching "<span className="text-osint-accent font-mono">{search}</span>".
                                        </p>
                                        <p className="text-gray-500 text-sm mt-2">
                                            Invalid Input or the tool is not in our library.
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <h3 className="text-xl text-white mb-2">No tools found</h3>
                                        <p className="text-gray-500">Try adjusting your filters.</p>
                                    </>
                                )}
                                <button onClick={clearFilters} className="mt-6 text-osint-accent hover:text-white text-sm font-medium">
                                    Clear all filters and search
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {tools.map(tool => (
                                    <ToolCard key={tool._id} tool={tool} />
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Tools;
