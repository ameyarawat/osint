import { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, ExternalLink, Download, Shield, Terminal, BookOpen, AlertCircle } from 'lucide-react';
import api from '../api';
import AuthContext from '../context/AuthContext';

const ToolDetail = () => {
    const { id } = useParams();
    const [tool, setTool] = useState(null);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext); // Need to import useContext and AuthContext

    useEffect(() => {
        const fetchTool = async () => {
            try {
                const { data } = await api.get(`/tools/${id}`);
                setTool(data);

                // Track history if user is logged in
                if (user) {
                    // don't await, let it run in background
                    api.post('/users/history/tool', { toolId: id }).catch(err => console.error('History save failed', err));
                }

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTool();
    }, [id, user]);

    if (loading) return <div className="text-center py-20 text-white">Loading...</div>;
    if (!tool) return <div className="text-center py-20 text-white">Tool not found</div>;

    return (
        <div className="bg-osint-dark min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/tools" className="inline-flex items-center text-gray-400 hover:text-white mb-6">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Directory
                </Link>

                {/* Header */}
                <div className="bg-osint-card rounded-xl border border-gray-800 p-8 mb-8 shadow-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold text-white tracking-tight">{tool.tool_name}</h1>
                                <span className="bg-osint-accent/20 text-osint-accent px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                    {tool.category}
                                </span>
                            </div>
                            <p className="text-gray-400 text-lg">{tool.short_description}</p>
                        </div>
                        <div className="flex gap-3">
                            {tool.official_website && (
                                <a href={tool.official_website} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors border border-gray-700">
                                    <ExternalLink className="h-4 w-4" /> Website
                                </a>
                            )}
                            <a href={tool.download_link} target="_blank" rel="noopener noreferrer" className="bg-osint-accent hover:bg-sky-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all font-semibold">
                                <Download className="h-4 w-4" /> Download
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {tool.tags.map(tag => (
                            <span key={tag} className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded font-mono">#{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Description & Metadata */}
                    <div className="lg:col-span-2 space-y-8">
                        <section className="bg-osint-card rounded-lg border border-gray-800 p-6">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Shield className="h-5 w-5 text-osint-secondary" /> About {tool.tool_name}
                            </h2>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                                {tool.description}
                            </p>
                        </section>

                        {tool.installation_steps && (
                            <section className="bg-osint-card rounded-lg border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <Terminal className="h-5 w-5 text-yellow-500" /> Installation
                                </h2>
                                <div className="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-gray-700">
                                    <ReactMarkdown>{tool.installation_steps}</ReactMarkdown>
                                </div>
                            </section>
                        )}

                        {tool.usage_guide && (
                            <section className="bg-osint-card rounded-lg border border-gray-800 p-6">
                                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-purple-400" /> Usage Guide
                                </h2>
                                <div className="prose prose-invert max-w-none prose-pre:bg-black/50 prose-pre:border prose-pre:border-gray-700">
                                    <ReactMarkdown>{tool.usage_guide}</ReactMarkdown>
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column: Key Features & Usage */}
                    <div className="space-y-6">
                        <div className="bg-osint-card rounded-lg border border-gray-800 p-6">
                            <h3 className="font-semibold text-white mb-4 border-b border-gray-800 pb-2">Key Features</h3>
                            <ul className="space-y-2">
                                {tool.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-400">
                                        <span className="text-osint-secondary mr-2">•</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-osint-card rounded-lg border border-gray-800 p-6">
                            <h3 className="font-semibold text-white mb-4 border-b border-gray-800 pb-2">Use Cases</h3>
                            <ul className="space-y-2">
                                {tool.use_cases.map((useCase, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-400">
                                        <span className="text-osint-accent mr-2">•</span> {useCase}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-900/10 rounded-lg border border-blue-900/50 p-6">
                            <div className="flex items-start gap-3">
                                <AlertCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h4 className="text-blue-400 font-semibold text-sm mb-1">Supported Platforms</h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {tool.platform_supported.map(plat => (
                                            <span key={plat} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded">
                                                {plat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ToolDetail;
