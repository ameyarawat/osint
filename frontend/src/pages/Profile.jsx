import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import api from '../api';
import { History, Search, Trash2, ExternalLink } from 'lucide-react';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [searchHistory, setSearchHistory] = useState([]);
    const [toolHistory, setToolHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const { data } = await api.get('/users/history');
            setSearchHistory(data.searchHistory || []);
            setToolHistory(data.toolHistory || []);
        } catch (error) {
            console.error('Error fetching history', error);
        } finally {
            setLoading(false);
        }
    };

    const clearSearchHistory = async () => {
        try {
            await api.delete('/users/history/search');
            setSearchHistory([]);
        } catch (error) {
            console.error(error);
        }
    };

    const clearToolHistory = async () => {
        try {
            await api.delete('/users/history/tool');
            setToolHistory([]);
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <div className="text-white text-center py-20">Loading profile...</div>;

    return (
        <div className="min-h-screen bg-osint-dark py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white">My Profile</h1>
                        <p className="text-gray-400">Welcome back, <span className="text-osint-accent">{user?.username}</span></p>
                    </div>
                    {user?.role === 'admin' && (
                        <Link to="/admin/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                            Admin Dashboard
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Search History */}
                    <div className="bg-osint-card rounded-lg border border-gray-800 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <Search className="h-5 w-5 text-blue-400" /> Recent Searches
                            </h2>
                            {searchHistory.length > 0 && (
                                <button onClick={clearSearchHistory} className="text-gray-500 hover:text-red-400 p-1">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                        {searchHistory.length === 0 ? (
                            <p className="text-gray-500 text-sm italic">No search history yet.</p>
                        ) : (
                            <div className="space-y-3">
                                {searchHistory.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={`/tools?search=${encodeURIComponent(item.query)}`}
                                        className="block bg-black/30 p-3 rounded border border-gray-800 hover:border-blue-500/50 transition-colors"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">{item.query}</span>
                                            <span className="text-xs text-gray-600">{new Date(item.timestamp).toLocaleDateString()}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Tool History */}
                    <div className="bg-osint-card rounded-lg border border-gray-800 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <History className="h-5 w-5 text-green-400" /> Recently Viewed Tools
                            </h2>
                            {toolHistory.length > 0 && (
                                <button onClick={clearToolHistory} className="text-gray-500 hover:text-red-400 p-1">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            )}
                        </div>
                        {toolHistory.length === 0 ? (
                            <p className="text-gray-500 text-sm italic">No tool history yet.</p>
                        ) : (
                            <div className="space-y-3">
                                {toolHistory.map((item, index) => (
                                    item.tool ? (
                                        <Link
                                            key={index}
                                            to={`/tools/${item.tool._id}`}
                                            className="block bg-black/30 p-3 rounded border border-gray-800 hover:border-green-500/50 transition-colors"
                                        >
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <img src={item.tool.logoUrl || '/placeholder-tool.png'} alt="logo" className="h-6 w-6 rounded" />
                                                    <span className="text-gray-300 font-medium">{item.tool.name}</span>
                                                </div>
                                                <span className="text-xs text-gray-600">{new Date(item.timestamp).toLocaleDateString()}</span>
                                            </div>
                                        </Link>
                                    ) : null
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
