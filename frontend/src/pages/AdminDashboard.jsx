import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { Plus, Trash2, Edit, LogOut, Shield } from 'lucide-react';
import api from '../api';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [tools, setTools] = useState([]);
    const [users, setUsers] = useState([]);

    // Quick Stats
    const totalTools = tools.length;
    const categories = [...new Set(tools.map(t => t.category))].length;
    const totalUsers = users.length;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [toolsRes, usersRes] = await Promise.all([
                api.get('/tools?limit=100'),
                api.get('/users')
            ]);
            setTools(toolsRes.data);
            setUsers(usersRes.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this tool?')) {
            try {
                await api.delete(`/tools/${id}`);
                setTools(tools.filter(t => t._id !== id));
            } catch (error) {
                alert('Failed to delete tool');
            }
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="bg-osint-dark min-h-screen">
            {/* Top Bar */}
            <header className="bg-osint-card border-b border-gray-800 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-osint-secondary" />
                    <span className="font-bold text-white text-lg">Admin Dashboard</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm">Welcome, {user?.username}</span>
                    <button onClick={handleLogout} className="text-red-400 hover:text-red-300 text-sm flex items-center gap-1">
                        <LogOut className="h-4 w-4" /> Logout
                    </button>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-osint-card p-6 rounded-lg border border-gray-800">
                        <h3 className="text-gray-400 text-sm font-medium">Total Tools</h3>
                        <p className="text-3xl font-bold text-white mt-1">{totalTools}</p>
                    </div>
                    <div className="bg-osint-card p-6 rounded-lg border border-gray-800">
                        <h3 className="text-gray-400 text-sm font-medium">Categories</h3>
                        <p className="text-3xl font-bold text-white mt-1">{categories}</p>
                    </div>
                    <div className="bg-osint-card p-6 rounded-lg border border-gray-800">
                        <h3 className="text-gray-400 text-sm font-medium">Users</h3>
                        <p className="text-3xl font-bold text-white mt-1">{totalUsers}</p>
                    </div>
                </div>

                {/* Tools Management */}
                <div className="bg-osint-card rounded-lg border border-gray-800 overflow-hidden">
                    <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
                        <h2 className="text-xl font-bold text-white">Manage Tools</h2>
                        <Link to="/admin/tools/new" className="bg-osint-secondary hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-colors">
                            <Plus className="h-4 w-4" /> Add New Tool
                        </Link>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-900/50 text-gray-400 text-xs uppercase">
                                <tr>
                                    <th className="px-6 py-3">Tool Name</th>
                                    <th className="px-6 py-3">Category</th>
                                    <th className="px-6 py-3">Status</th>
                                    <th className="px-6 py-3 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {tools.map(tool => (
                                    <tr key={tool._id} className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4 text-white font-medium">{tool.tool_name}</td>
                                        <td className="px-6 py-4 text-gray-400 text-sm">
                                            <span className="bg-gray-800 px-2 py-1 rounded text-xs">{tool.category}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-2 py-1 rounded ${tool.license_type === 'Free' ? 'text-green-400 bg-green-900/20' : 'text-yellow-400 bg-yellow-900/20'
                                                }`}>
                                                {tool.license_type}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-3">
                                                <Link to={`/admin/tools/edit/${tool._id}`} className="text-blue-400 hover:text-blue-300">
                                                    <Edit className="h-4 w-4" />
                                                </Link>
                                                <button onClick={() => handleDelete(tool._id)} className="text-red-400 hover:text-red-300">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Users Management */}
                <div className="bg-osint-card rounded-lg border border-gray-800 overflow-hidden mt-8">
                    <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
                        <h2 className="text-xl font-bold text-white">Registered Users</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-900/50 text-gray-400 text-xs uppercase">
                                <tr>
                                    <th className="px-6 py-3">Username</th>
                                    <th className="px-6 py-3">Email</th>
                                    <th className="px-6 py-3">Role</th>
                                    <th className="px-6 py-3">Joined</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {users.map(u => (
                                    <tr key={u._id} className="hover:bg-gray-800/50 transition-colors">
                                        <td className="px-6 py-4 text-white font-medium">{u.username}</td>
                                        <td className="px-6 py-4 text-gray-400 text-sm">{u.email}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs px-2 py-1 rounded ${u.role === 'admin' ? 'text-purple-400 bg-purple-900/20' : 'text-blue-400 bg-blue-900/20'
                                                }`}>
                                                {u.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 text-xs">
                                            {new Date(u.createdAt).toLocaleDateString()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
