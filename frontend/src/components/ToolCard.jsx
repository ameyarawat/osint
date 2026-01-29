import { ExternalLink, Download, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ToolCard = ({ tool }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/tools/${tool._id}`)}
            className="bg-osint-card rounded-lg overflow-hidden border border-gray-800 hover:border-osint-accent transition-all duration-300 shadow-lg hover:shadow-osint-accent/10 flex flex-col h-full cursor-pointer transform hover:scale-105"
        >
            <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider ${tool.license_type === 'Free' ? 'bg-green-900/50 text-green-400' :
                        tool.license_type === 'Paid' ? 'bg-red-900/50 text-red-400' :
                            'bg-yellow-900/50 text-yellow-400'
                        }`}>
                        {tool.license_type}
                    </div>
                    {tool.category && (
                        <span className="text-gray-400 text-xs border border-gray-700 rounded px-2 py-1">
                            {tool.category}
                        </span>
                    )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-osint-secondary" />
                    {tool.tool_name}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {tool.short_description || tool.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tool.platform_supported.map((platform) => (
                        <span key={platform} className="bg-osint-dark text-xs text-gray-500 px-2 py-1 rounded border border-gray-800">
                            {platform}
                        </span>
                    ))}
                </div>
            </div>

            <div className="bg-gray-900/50 px-6 py-4 border-t border-gray-800 flex justify-between items-center">
                <Link
                    to={`/tools/${tool._id}`}
                    className="text-osint-accent hover:text-white text-sm font-medium transition-colors"
                    onClick={(e) => e.stopPropagation()}
                >
                    Read Guide
                </Link>
                <div className="flex gap-3">
                    {tool.official_website && (
                        <a
                            href={tool.official_website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                            title="Official Website"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExternalLink className="h-5 w-5" />
                        </a>
                    )}
                    {tool.download_link && (
                        <a
                            href={tool.download_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                            title="Download"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Download className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToolCard;
