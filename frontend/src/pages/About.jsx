import { Shield, AlertTriangle, Scale, Lock } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-osint-dark min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <h1 className="text-4xl font-bold text-white mb-2 text-center">Legal & Ethical Usage</h1>
                <p className="text-gray-400 text-center mb-12">
                    Understanding the boundaries of Open Source Intelligence
                </p>

                <div className="space-y-8">
                    {/* Disclaimer Card */}
                    <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-6 flex gap-4">
                        <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0" />
                        <div>
                            <h3 className="text-lg font-bold text-red-400 mb-2">Important Disclaimer</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                The tools and information provided on OSINT Hub are for <strong>educational and legal research purposes only</strong>.
                                Neither OSINT Hub nor the tool authors are responsible for any misuse or damage caused by these programs.
                            </p>
                        </div>
                    </div>

                    {/* What is OSINT */}
                    <div className="bg-osint-card border border-gray-800 rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <Shield className="h-6 w-6 text-osint-accent" /> What is OSINT?
                        </h2>
                        <p className="text-gray-300 mb-4">
                            Open Source Intelligence (OSINT) refers to the collection and analysis of data gathered from open sources (overt and publicly available sources) to produce actionable intelligence.
                        </p>
                        <p className="text-gray-300">
                            It is used by cybersecurity professionals, researchers, journalists, and law enforcement to identify threats, gather evidence, or conduct due diligence.
                        </p>
                    </div>

                    {/* Ethical Guidelines */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-osint-card border border-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Scale className="h-5 w-5 text-green-400" /> Do's (Ethical)
                            </h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li><strong>Do</strong> investigate public data.</li>
                                <li><strong>Do</strong> respect privacy laws (GDPR, CCPA).</li>
                                <li><strong>Do</strong> use data to improve security.</li>
                                <li><strong>Do</strong> report vulnerabilities to owners.</li>
                                <li><strong>Do</strong> obtain authorization for active scans.</li>
                            </ul>
                        </div>

                        <div className="bg-osint-card border border-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                <Lock className="h-5 w-5 text-red-400" /> Don'ts (Illegal)
                            </h3>
                            <ul className="list-disc list-inside text-gray-400 space-y-2">
                                <li><strong>Don't</strong> hack or exploit systems without permission.</li>
                                <li><strong>Don't</strong> doxx or harass individuals.</li>
                                <li><strong>Don't</strong> use pirated or cracked software.</li>
                                <li><strong>Don't</strong> access protected/private data.</li>
                                <li><strong>Don't</strong> use tools for stalking.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
