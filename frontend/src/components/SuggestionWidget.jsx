import { useState } from 'react';
import { MessageSquarePlus, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from '../api'; // Assuming api.js exports an axios instance as 'api' or similar. 
// If api.js is not set up that way, I'll fallback to standard fetch or check api.js content first.
// Let me check api.js content in the next step to be sure, but for now I'll write standard fetch to be safe and independent.

const SuggestionWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [suggestion, setSuggestion] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!suggestion.trim()) return;

        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('http://localhost:5000/api/suggestions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ suggestion }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to submit');
            }

            setStatus('success');
            setSuggestion('');
            setTimeout(() => {
                setStatus('idle');
                setIsOpen(false);
            }, 2000);
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
            setStatus('error');
            setTimeout(() => {
                setStatus('idle');
                setErrorMessage('');
            }, 4000);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-72 bg-osint-card border border-osint-border rounded-lg shadow-xl overflow-hidden backdrop-blur-md bg-opacity-95"
                    >
                        <div className="p-4 bg-osint-primary/10 border-b border-osint-border flex justify-between items-center">
                            <h3 className="text-sm font-semibold text-osint-accent">Suggest a Tool</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-osint-text-muted hover:text-white transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="p-4">
                            {status === 'success' ? (
                                <div className="text-center py-6 text-green-400">
                                    <p className="font-medium">Thanks for the suggestion!</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <textarea
                                        className="w-full bg-osint-bg border border-osint-border rounded p-2 text-sm text-osint-text focus:outline-none focus:border-osint-accent resize-none h-24 mb-3 placeholder-osint-text-muted/50"
                                        placeholder="Tell us about a tool we should add..."
                                        value={suggestion}
                                        onChange={(e) => setSuggestion(e.target.value)}
                                        disabled={status === 'submitting'}
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting' || !suggestion.trim()}
                                        className="w-full bg-osint-accent hover:bg-osint-accent-hover text-black font-medium py-2 px-4 rounded transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'submitting' ? (
                                            'Sending...'
                                        ) : (
                                            <>
                                                Send Suggestion <Send size={14} />
                                            </>
                                        )}
                                    </button>
                                    {status === 'error' && (
                                        <p className="text-xs text-red-500 mt-2 text-center px-1 font-medium">{errorMessage}</p>
                                    )}
                                </form>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 bg-osint-accent hover:bg-osint-accent-hover text-black rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                title="Suggest a tool"
            >
                {isOpen ? <X size={24} /> : <MessageSquarePlus size={24} />}
            </button>
        </div>
    );
};

export default SuggestionWidget;
