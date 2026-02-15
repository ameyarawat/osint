import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Save, ArrowLeft, Plus, X } from 'lucide-react';
import api from '../api';

const ToolForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        tool_name: '',
        category: 'People OSINT',
        description: '',
        short_description: '',
        features: [],
        use_cases: [],
        installation_steps: '',
        usage_guide: '',
        official_website: '',
        download_link: '',
        platform_supported: [],
        license_type: 'Free',
        tags: []
    });

    // Helper state for array inputs
    const [featureInput, setFeatureInput] = useState('');
    const [useCaseInput, setUseCaseInput] = useState('');
    const [tagInput, setTagInput] = useState('');

    const categories = ['People OSINT', 'Domain OSINT', 'Social Media', 'Image Analysis', 'Dark Web', 'Relationship Analysis', 'IoT Search Engine', 'Data Leaks OSINT', 'Geospatial', 'Search Engines'];
    const platforms = ['Windows', 'Linux', 'macOS', 'Web'];
    const licenses = ['Free', 'Paid', 'Freemium'];

    useEffect(() => {
        if (isEditMode) {
            fetchTool();
        }
    }, [id]);

    const fetchTool = async () => {
        try {
            const { data } = await api.get(`/tools/${id}`);
            setFormData(data);
        } catch (error) {
            console.error('Error fetching tool', error);
            alert('Failed to load tool data');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e, val, field) => {
        const { checked } = e.target;
        setFormData(prev => {
            const current = prev[field];
            if (checked) return { ...prev, [field]: [...current, val] };
            return { ...prev, [field]: current.filter(item => item !== val) };
        });
    };

    const addItem = (field, inputState, setInputState) => {
        if (!inputState.trim()) return;
        setFormData(prev => ({
            ...prev,
            [field]: [...prev[field], inputState.trim()]
        }));
        setInputState('');
    };

    const removeItem = (field, index) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditMode) {
                await api.put(`/tools/${id}`, formData);
                alert('Tool updated successfully');
            } else {
                await api.post('/tools', formData);
                alert('Tool created successfully');
            }
            navigate('/admin/dashboard');
        } catch (error) {
            console.error(error);
            alert(error.response?.data?.message || 'Error saving tool');
        }
    };

    return (
        <div className="bg-osint-dark min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={() => navigate('/admin/dashboard')} className="inline-flex items-center text-gray-400 hover:text-white mb-6">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
                </button>

                <div className="bg-osint-card rounded-xl border border-gray-800 p-8 shadow-2xl">
                    <h1 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-4">
                        {isEditMode ? 'Edit Tool' : 'Add New Tool'}
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Basic Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Tool Name *</label>
                                <input type="text" name="tool_name" value={formData.tool_name} onChange={handleChange} required className="w-full bg-black/50 border border-gray-700 text-white rounded p-2 focus:ring-osint-accent focus:border-osint-accent" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Category *</label>
                                <select name="category" value={formData.category} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 text-white rounded p-2 focus:ring-osint-accent focus:border-osint-accent">
                                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Short Description (for card)</label>
                                <input type="text" name="short_description" value={formData.short_description} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 text-white rounded p-2 focus:ring-osint-accent focus:border-osint-accent" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Full Description *</label>
                                <textarea name="description" value={formData.description} onChange={handleChange} required rows={4} className="w-full bg-black/50 border border-gray-700 text-white rounded p-2 focus:ring-osint-accent focus:border-osint-accent" />
                            </div>
                        </div>

                        {/* URLs & Classification */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Official Website</label>
                                <input type="url" name="official_website" value={formData.official_website} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 text-white rounded p-2 focus:ring-osint-accent focus:border-osint-accent" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Download Link *</label>
                                <input type="url" name="download_link" value={formData.download_link} onChange={handleChange} required className="w-full bg-black/50 border border-gray-700 text-white rounded p-2 focus:ring-osint-accent focus:border-osint-accent" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">License</label>
                                <select name="license_type" value={formData.license_type} onChange={handleChange} className="w-full bg-black/50 border border-gray-700 text-white rounded p-2 focus:ring-osint-accent focus:border-osint-accent">
                                    {licenses.map(l => <option key={l} value={l}>{l}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Supported Platforms</label>
                                <div className="flex flex-wrap gap-4 mt-2">
                                    {platforms.map(plat => (
                                        <label key={plat} className="flex items-center space-x-2 text-sm text-gray-300">
                                            <input type="checkbox" checked={formData.platform_supported.includes(plat)} onChange={(e) => handleCheckboxChange(e, plat, 'platform_supported')} className="rounded bg-black/50 border-gray-700 text-osint-accent focus:ring-osint-accent" />
                                            <span>{plat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Array Inputs (Features, Use Cases, Tags) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Features */}
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Features (Add multiple)</label>
                                <div className="flex gap-2">
                                    <input type="text" value={featureInput} onChange={(e) => setFeatureInput(e.target.value)} className="flex-1 bg-black/50 border border-gray-700 text-white rounded p-2 text-sm" placeholder="e.g. Packet Sniffing" />
                                    <button type="button" onClick={() => addItem('features', featureInput, setFeatureInput)} className="bg-osint-secondary hover:bg-green-600 text-white p-2 rounded"><Plus className="h-4 w-4" /></button>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {formData.features.map((f, i) => (
                                        <span key={i} className="bg-gray-800 text-xs px-2 py-1 rounded flex items-center gap-1 text-gray-300">
                                            {f} <button type="button" onClick={() => removeItem('features', i)}><X className="h-3 w-3 hover:text-red-400" /></button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Use Cases */}
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Use Cases</label>
                                <div className="flex gap-2">
                                    <input type="text" value={useCaseInput} onChange={(e) => setUseCaseInput(e.target.value)} className="flex-1 bg-black/50 border border-gray-700 text-white rounded p-2 text-sm" placeholder="e.g. Reconnaissance" />
                                    <button type="button" onClick={() => addItem('use_cases', useCaseInput, setUseCaseInput)} className="bg-osint-secondary hover:bg-green-600 text-white p-2 rounded"><Plus className="h-4 w-4" /></button>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {formData.use_cases.map((uc, i) => (
                                        <span key={i} className="bg-gray-800 text-xs px-2 py-1 rounded flex items-center gap-1 text-gray-300">
                                            {uc} <button type="button" onClick={() => removeItem('use_cases', i)}><X className="h-3 w-3 hover:text-red-400" /></button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-400 mb-1">Tags</label>
                                <div className="flex gap-2">
                                    <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} className="flex-1 bg-black/50 border border-gray-700 text-white rounded p-2 text-sm" placeholder="e.g. network" />
                                    <button type="button" onClick={() => addItem('tags', tagInput, setTagInput)} className="bg-osint-secondary hover:bg-green-600 text-white p-2 rounded"><Plus className="h-4 w-4" /></button>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {formData.tags.map((t, i) => (
                                        <span key={i} className="bg-gray-800 text-xs px-2 py-1 rounded flex items-center gap-1 text-gray-300">
                                            #{t} <button type="button" onClick={() => removeItem('tags', i)}><X className="h-3 w-3 hover:text-red-400" /></button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Installation & Guide (Markdown) */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Installation Steps (Markdown Supported)</label>
                                <textarea name="installation_steps" value={formData.installation_steps} onChange={handleChange} rows={6} className="w-full bg-black/50 border border-gray-700 text-white rounded p-2 font-mono text-sm focus:ring-osint-accent focus:border-osint-accent" placeholder="## Steps..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Usage Guide (Markdown Supported)</label>
                                <textarea name="usage_guide" value={formData.usage_guide} onChange={handleChange} rows={6} className="w-full bg-black/50 border border-gray-700 text-white rounded p-2 font-mono text-sm focus:ring-osint-accent focus:border-osint-accent" placeholder="## How to run..." />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-800 flex justify-end">
                            <button type="submit" className="bg-osint-accent hover:bg-sky-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-sky-500/20 flex items-center gap-2 transition-all">
                                <Save className="h-5 w-5" /> Save Tool
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ToolForm;
