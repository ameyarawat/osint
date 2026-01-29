const tools = [
    // --- Frameworks & All-in-One ---
    {
        tool_name: 'Maltego',
        category: 'Relationship Analysis',
        description: 'Maltego is a comprehensive tool for graphical link analysis that offers real-time data mining and information gathering, as well as the representation of this information on a node-based graph.',
        short_description: 'Graphical link analysis and data mining tool.',
        features: ['Link Analysis', 'Visualisation', 'Data Integration', 'Real-time Mining'],
        use_cases: ['Cyber Security', 'Forensics', 'Journalism'],
        official_website: 'https://www.maltego.com/',
        download_link: 'https://www.maltego.com/downloads/',
        platform_supported: ['Windows', 'Linux', 'macOS'],
        license_type: 'Freemium',
        tags: ['graph', 'framework', 'visualisation']
    },
    {
        tool_name: 'SpiderFoot',
        category: 'Frameworks',
        description: 'SpiderFoot is an open source intelligence automation tool. It integrates with just about every data source available and utilises a range of methods for data analysis, making that data easy to navigate.',
        short_description: 'Automated OSINT collection framework.',
        features: ['Automation', '100+ Modules', 'Web UI', 'Reporting'],
        use_cases: ['Reconnaissance', 'Threat Intelligence', 'Asset Discovery'],
        official_website: 'https://www.spiderfoot.net/',
        download_link: 'https://github.com/smicallef/spiderfoot',
        platform_supported: ['Windows', 'Linux', 'macOS'],
        license_type: 'Freemium',
        tags: ['automation', 'framework', 'recon']
    },
    {
        tool_name: 'Recon-ng',
        category: 'Frameworks',
        description: 'Recon-ng is a full-featured Web Reconnaissance framework written in Python. Complete with independent modules, database interaction, built in convenience functions, interactive help, and command completion.',
        short_description: 'Modular web reconnaissance framework.',
        features: ['Modular', 'Database Support', 'Command Line', 'API Integration'],
        use_cases: ['Web Reconnaissance', 'Penetration Testing'],
        official_website: 'https://github.com/lanmaster53/recon-ng',
        download_link: 'https://github.com/lanmaster53/recon-ng',
        platform_supported: ['Linux', 'macOS', 'Windows (WSL)'],
        license_type: 'Free',
        tags: ['cli', 'framework', 'python']
    },
    {
        tool_name: 'OSINT Framework',
        category: 'Frameworks',
        description: 'OSINT Framework is a web-based directory that categorizes different OSINT tools and resources. It serves as a starting point for looking up tools for specific tasks.',
        short_description: 'Directory of OSINT tools and resources.',
        features: ['Categorized Links', 'Web Interface', 'Interactive Tree'],
        use_cases: ['Tool Discovery', 'Educational'],
        official_website: 'https://osintframework.com/',
        download_link: 'https://osintframework.com/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['directory', 'web', 'resource']
    },

    // --- Search Engines & IoT ---
    {
        tool_name: 'Shodan',
        category: 'IoT Search Engine',
        description: 'Shodan is the world\'s first search engine for Internet-connected devices. It lets you find servers, webcams, routers, and more using various filters.',
        short_description: 'Search engine for Internet-connected devices.',
        features: ['Device Search', 'Vulnerability Search', 'Port Scanning'],
        use_cases: ['Vulnerability Assessment', 'Market Research', 'Security Auditing'],
        official_website: 'https://www.shodan.io/',
        download_link: 'https://cli.shodan.io/',
        platform_supported: ['Web', 'Windows', 'Linux', 'macOS'],
        license_type: 'Freemium',
        tags: ['iot', 'search', 'scanner']
    },
    {
        tool_name: 'Censys',
        category: 'IoT Search Engine',
        description: 'Censys Search is a tool that allows computer scientists to ask questions about the devices and networks that compose the Internet. Driven by Internet-wide scanning.',
        short_description: 'Search engine for internet-wide scan data.',
        features: ['Asset Discovery', 'Certificate Search', 'IPv4 Scanning'],
        use_cases: ['Attack Surface Management', 'Threat Hunting'],
        official_website: 'https://censys.io/',
        download_link: 'https://search.censys.io/',
        platform_supported: ['Web'],
        license_type: 'Freemium',
        tags: ['search', 'certificates', 'ipv4']
    },
    {
        tool_name: 'Google Dorks',
        category: 'Search Engines',
        description: 'Google Dorking utilizes advanced Google search operators to find specific strings of text within search results, often revealing sensitive information or vulnerabilities.',
        short_description: 'Advanced Google search operators.',
        features: ['Advanced Search', 'Information Leakage Discovery'],
        use_cases: ['Vulnerability Research', 'Information Gathering'],
        official_website: 'https://www.exploit-db.com/google-hacking-database',
        download_link: 'https://www.google.com/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['google', 'dorking', 'search']
    },

    // --- Username & People OSINT ---
    {
        tool_name: 'Sherlock',
        category: 'People OSINT',
        description: 'Sherlock allows you to hunt down social media accounts by username across social networks. It searches 300+ sites.',
        short_description: 'Find usernames across social networks.',
        features: ['Cross-platform Search', 'Fast', 'Tor Support'],
        use_cases: ['Person Investigation', 'Background Checks'],
        official_website: 'https://github.com/sherlock-project/sherlock',
        download_link: 'https://github.com/sherlock-project/sherlock',
        platform_supported: ['Windows', 'Linux', 'macOS'],
        license_type: 'Free',
        tags: ['username', 'social media', 'python']
    },
    {
        tool_name: 'Maigret',
        category: 'People OSINT',
        description: 'Collect a dossier on a person by username only, checking for accounts on a huge number of sites. It is a fork of Sherlock with more features.',
        short_description: 'Advanced username checker and dossier builder.',
        features: ['PDF Reporting', 'HTML Reporting', 'Recursive Search'],
        use_cases: ['Person Investigation', 'Dossier Building'],
        official_website: 'https://github.com/soxoj/maigret',
        download_link: 'https://github.com/soxoj/maigret',
        platform_supported: ['Linux', 'macOS'],
        license_type: 'Free',
        tags: ['username', 'report', 'python']
    },
    {
        tool_name: 'Have I Been Pwned',
        category: 'People OSINT',
        description: 'Have I Been Pwned allows you to check if your email address or phone number has been in a data breach.',
        short_description: 'Check for data breaches.',
        features: ['Breach Search', 'Password Search', 'Domain Search'],
        use_cases: ['Security Awareness', 'Credential Verification'],
        official_website: 'https://haveibeenpwned.com/',
        download_link: 'https://haveibeenpwned.com/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['email', 'breach', 'security']
    },

    {
        tool_name: 'EPIOS',
        category: 'People OSINT',
        description: 'EPIOS allows you to search for Google Reviews and Google Maps contributions linked to an email address, often revealing the real name and location history of a target.',
        short_description: 'Trace Google accounts and reviews via email.',
        features: ['Google Maps Tracking', 'Review Analysis', 'Email Investigation'],
        use_cases: ['Person Investigation', 'Geolocation', 'Background Checks'],
        official_website: 'https://epieos.com/',
        download_link: 'https://epieos.com/',
        platform_supported: ['Web'],
        license_type: 'Freemium',
        tags: ['email', 'google', 'tracking']
    },
    {
        tool_name: 'Blackbird',
        category: 'People OSINT',
        description: 'Blackbird is a modern and fast username reconnaissance tool that searches for accounts across major social media sites and websites.',
        short_description: 'Fast username enumeration tool.',
        features: ['High Speed', 'Async Search', 'JSON Output'],
        use_cases: ['Username Enumeration', 'Social Media Recon'],
        official_website: 'https://github.com/p1ngul1/blackbird',
        download_link: 'https://github.com/p1ngul1/blackbird',
        platform_supported: ['Windows', 'Linux', 'macOS'],
        license_type: 'Free',
        tags: ['username', 'recon', 'python']
    },

    // --- Domain & Email OSINT ---
    {
        tool_name: 'TheHarvester',
        category: 'Domain OSINT',
        description: 'TheHarvester is a tool for gathering e-mail accounts, subdomain names, virtual hosts, open ports/ banners, and employee names from different public sources.',
        short_description: 'E-mail, subdomain and people harvesting tool.',
        features: ['Email Harvesting', 'Subdomain Enumeration', 'SearchResult Scraping'],
        use_cases: ['Reconnaissance', 'Penetration Testing'],
        official_website: 'https://github.com/laramies/theHarvester',
        download_link: 'https://github.com/laramies/theHarvester',
        platform_supported: ['Linux', 'macOS'],
        license_type: 'Free',
        tags: ['recon', 'email', 'domain']
    },
    {
        tool_name: 'Sublist3r',
        category: 'Domain OSINT',
        description: 'Sublist3r is a python tool designed to enumerate subdomains of websites using OSINT. It helps penetration testers and bug hunters collect and gather subdomains for the domain they are targeting.',
        short_description: 'Fast subdomain enumeration tool.',
        features: ['Subdomain Enumeration', 'Search Engine Integration'],
        use_cases: ['Bug Bounty', 'Reconnaissance'],
        official_website: 'https://github.com/aboul3la/Sublist3r',
        download_link: 'https://github.com/aboul3la/Sublist3r',
        platform_supported: ['Windows', 'Linux', 'macOS'],
        license_type: 'Free',
        tags: ['dns', 'subdomain', 'python']
    },
    {
        tool_name: 'DNSDumpster',
        category: 'Domain OSINT',
        description: 'DNSDumpster is a FREE domain research tool that can discover hosts related to a domain. Finding visible hosts from the attackers perspective is an important part of the security assessment process.',
        short_description: 'Domain research and DNS mapping tool.',
        features: ['DNS Mapping', 'Host Discovery', 'Visual Graph'],
        use_cases: ['Domain Recon', 'Attack Surface Mapping'],
        official_website: 'https://dnsdumpster.com/',
        download_link: 'https://dnsdumpster.com/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['dns', 'map', 'web']
    },
    {
        tool_name: 'Whois',
        category: 'Domain OSINT',
        description: 'WHOIS is a query and response protocol that is used for querying databases that store the registered users or assignees of an Internet resource, such as a domain name or an IP address block.',
        short_description: 'Domain registration info lookup.',
        features: ['Registrant Info', 'Name Servers', 'Registration Dates'],
        use_cases: ['Domain Research', 'Attribution'],
        official_website: 'https://who.is/',
        download_link: 'https://who.is/',
        platform_supported: ['Web', 'CLI'],
        license_type: 'Free',
        tags: ['domain', 'registration', 'lookup']
    },

    {
        tool_name: 'Phonebook.cz',
        category: 'Domain OSINT',
        description: 'Phonebook.cz lists all domains, email addresses, or URLs for the given input domain. It is one of the most comprehensive resources for email gathering.',
        short_description: 'Search for domains, emails, and URLs.',
        features: ['Email Harvesting', 'Subdomain Discovery', 'Wildcard Support'],
        use_cases: ['Reconnaissance', 'Attack Surface Mapping'],
        official_website: 'https://phonebook.cz/',
        download_link: 'https://phonebook.cz/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['email', 'domain', 'database']
    },
    {
        tool_name: 'ViewDNS.info',
        category: 'Domain OSINT',
        description: 'ViewDNS.info provides a large collection of free network tools including Reverse IP Lookup, DNS, Whois, Traceroute, and many others in one place.',
        short_description: 'All-in-one DNS and network toolkit.',
        features: ['Reverse Whois', 'IP History', 'DNS Report'],
        use_cases: ['Infrastructure Recon', 'DNS Analysis'],
        official_website: 'https://viewdns.info/',
        download_link: 'https://viewdns.info/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['dns', 'network', 'toolkit']
    },

    // --- Network Analysis ---
    {
        tool_name: 'Nmap',
        category: 'Network OSINT',
        description: 'Nmap ("Network Mapper") is a free and open source utility for network discovery and security auditing. It reveals hosts on a network, services, operating systems, and firewalls.',
        short_description: 'Network discovery and security auditing.',
        features: ['Port Scanning', 'OS Detection', 'Scriptable (NSE)'],
        use_cases: ['Network Mapping', 'Vulnerability Scanning'],
        official_website: 'https://nmap.org/',
        download_link: 'https://nmap.org/download.html',
        platform_supported: ['Windows', 'Linux', 'macOS'],
        license_type: 'Free',
        tags: ['network', 'scanner', 'admin']
    },
    {
        tool_name: 'Wireshark',
        category: 'Network OSINT',
        description: 'Wireshark is the world\'s foremost and widely-used network protocol analyzer. It lets you see what\'s happening on your network at a microscopic level.',
        short_description: 'Network protocol analyzer.',
        features: ['Packet Capture', 'Deep Inspection', 'Filters'],
        use_cases: ['Network Troubleshooting', 'Analysis', 'Education'],
        official_website: 'https://www.wireshark.org/',
        download_link: 'https://www.wireshark.org/download.html',
        platform_supported: ['Windows', 'Linux', 'macOS'],
        license_type: 'Free',
        tags: ['network', 'packets', 'sniffer']
    },

    // --- Image & File Analysis ---
    {
        tool_name: 'ExifTool',
        category: 'Image Analysis',
        description: 'ExifTool is a platform-independent Perl library plus a command-line application for reading, writing, and editing meta information in a wide variety of files.',
        short_description: 'Read and edit file metadata.',
        features: ['Metadata Extraction', 'Wide Format Support'],
        use_cases: ['Forensics', 'Verification'],
        official_website: 'https://exiftool.org/',
        download_link: 'https://exiftool.org/',
        platform_supported: ['Windows', 'Linux', 'macOS'],
        license_type: 'Free',
        tags: ['metadata', 'exif', 'forensics']
    },
    {
        tool_name: 'TinEye',
        category: 'Image Analysis',
        description: 'TinEye is a reverse image search engine. You can submit an image to TinEye to find out where it came from, how it is being used, if modified versions of the image exist, or to find higher resolution versions.',
        short_description: 'Reverse image search engine.',
        features: ['Reverse Search', 'Match Tracking'],
        use_cases: ['Copyright Checking', 'Origin Verification'],
        official_website: 'https://tineye.com/',
        download_link: 'https://tineye.com/',
        platform_supported: ['Web'],
        license_type: 'Freemium',
        tags: ['image', 'search', 'reverse']
    },
    {
        tool_name: 'FOCA',
        category: 'Information Gathering',
        description: 'FOCA (Fingerprinting Organizations with Collected Archives) is a tool used mainly to find metadata and hidden information in the documents its scans.',
        short_description: 'Metadata extraction from documents.',
        features: ['Document Analysis', 'Metadata Extraction', 'Network Mapping'],
        use_cases: ['Penetration Testing', 'Forensics'],
        official_website: 'https://github.com/ElevenPaths/FOCA',
        download_link: 'https://github.com/ElevenPaths/FOCA/releases',
        platform_supported: ['Windows'],
        license_type: 'Free',
        tags: ['metadata', 'documents', 'windows']
    },

    {
        tool_name: 'PimEyes',
        category: 'Image Analysis',
        description: 'PimEyes is an online face search engine that goes through the Internet to find pictures containing given faces.',
        short_description: 'Reverse image search for faces.',
        features: ['Face Recognition', 'Privacy Protection', 'Alerts'],
        use_cases: ['Identity Verification', 'Privacy Monitoring'],
        official_website: 'https://pimeyes.com/',
        download_link: 'https://pimeyes.com/',
        platform_supported: ['Web'],
        license_type: 'Paid',
        tags: ['face', 'search', 'recognition']
    },
    {
        tool_name: 'InVID',
        category: 'Image Analysis',
        description: 'InVID (We Verify) is a plugin to debunk fake news and verify videos and images. It includes features for fragmentation, reverse search, and metadata analysis.',
        short_description: 'Video and image verification plugin.',
        features: ['Video Analysis', 'Keyframe Extraction', 'Metadata'],
        use_cases: ['Fact Checking', 'Journalism', 'Forensics'],
        official_website: 'https://www.invid-project.eu/',
        download_link: 'https://chrome.google.com/webstore/detail/invid-we-verify-plugin/mitalboeldknhbbnanebkifmnfjbgkef',
        platform_supported: ['Web', 'Browser Extension'],
        license_type: 'Free',
        tags: ['video', 'verification', 'forensics']
    },

    // --- Dark Web ---
    {
        tool_name: 'Tor Browser',
        category: 'Dark Web',
        description: 'Tor Browser isolates each website you visit so third-party trackers and ads can\'t follow you. It opens access to the .onion network (Dark Web).',
        short_description: 'Access the Tor network anonymously.',
        features: ['Anonymity', 'Anti-Fingerprinting', 'Onion Routing'],
        use_cases: ['Privacy', 'Dark Web Access'],
        official_website: 'https://www.torproject.org/',
        download_link: 'https://www.torproject.org/download/',
        platform_supported: ['Windows', 'Linux', 'macOS', 'Android'],
        license_type: 'Free',
        tags: ['privacy', 'darkweb', 'onion']
    },
    {
        tool_name: 'Ahmia',
        category: 'Dark Web',
        description: 'Ahmia is a search engine for hidden services on the Tor network. It makes hidden services accessible to a wide range of people, not just early adopters.',
        short_description: 'Search engine for Tor hidden services.',
        features: ['Onion Search', 'I2P Search'],
        use_cases: ['Dark Web Research', 'Discovery'],
        official_website: 'https://ahmia.fi/',
        download_link: 'https://ahmia.fi/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['search', 'darkweb', 'onion']
    },

    {
        tool_name: 'OnionSearch',
        category: 'Dark Web',
        description: 'OnionSearch is a Python script that searches for content on the Tor network using multiple dark web search engines simultaneously.',
        short_description: 'Aggregate search for Tor hidden services.',
        features: ['Multi-engine Search', 'Python Script', 'Fast'],
        use_cases: ['Dark Web Recon', 'Hidden Service Discovery'],
        official_website: 'https://github.com/megadose/OnionSearch',
        download_link: 'https://github.com/megadose/OnionSearch',
        platform_supported: ['Linux', 'macOS', 'Windows'],
        license_type: 'Free',
        tags: ['darkweb', 'onion', 'search']
    },

    // --- Social Media ---
    {
        tool_name: 'Social Searcher',
        category: 'Social Media',
        description: 'Social Searcher is a free social media search engine. It allows searching for content in social networks in real-time and provides deep analytics data.',
        short_description: 'Real-time social media search engine.',
        features: ['Real-time Search', 'Analytics', 'Sentiment Analysis'],
        use_cases: ['Brand Monitoring', 'Trend Analysis'],
        official_website: 'https://www.social-searcher.com/',
        download_link: 'https://www.social-searcher.com/',
        platform_supported: ['Web'],
        license_type: 'Freemium',
        tags: ['social', 'analytics', 'monitoring']
    },
    {
        tool_name: 'WhatsMyName',
        category: 'Social Media',
        description: 'WhatsMyName is a powerful username enumeration tool and list that checks for the existence of web accounts across hundreds of sites.',
        short_description: 'Username enumeration across many sites.',
        features: ['High Accuracy', 'Web Interface', 'Export Results'],
        use_cases: ['Person Investigation', 'Digital Footprinting'],
        official_website: 'https://whatsmyname.app/',
        download_link: 'https://whatsmyname.app/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['username', 'social', 'recon']
    },
    {
        tool_name: 'Toutatis',
        category: 'Social Media',
        description: 'Toutatis is a tool that allows you to extract information from Instagram accounts such as emails, phone numbers, and more using the API.',
        short_description: 'Instagram information gathering tool.',
        features: ['Instagram API', 'Contact Extraction', 'ID Retrieval'],
        use_cases: ['Social Engineering', 'Profile Profiling'],
        official_website: 'https://github.com/megadose/toutatis',
        download_link: 'https://github.com/megadose/toutatis',
        platform_supported: ['Linux', 'macOS'],
        license_type: 'Free',
        tags: ['instagram', 'social', 'osint']
    },
    // --- Maritime OSINT ---
    {
        tool_name: 'MarineTraffic',
        category: 'Maritime OSINT',
        description: 'MarineTraffic displays near real-time positions of ships and yachts worldwide. It uses the largest network of terrestrial AIS receivers.',
        short_description: 'Real-time ship tracking and maritime intelligence.',
        features: ['Vessel Tracking', 'Port Arrivals', 'Photos'],
        use_cases: ['Maritime Recon', 'Logistics Tracking'],
        official_website: 'https://www.marinetraffic.com/',
        download_link: 'https://www.marinetraffic.com/en/mobile-apps',
        platform_supported: ['Web', 'Android', 'iOS'],
        license_type: 'Freemium',
        tags: ['maritime', 'ships', 'tracking']
    },
    {
        tool_name: 'VesselFinder',
        category: 'Maritime OSINT',
        description: 'VesselFinder is a free vessel tracking service providing real-time data on the positions and movements of over 200,000 vessels daily.',
        short_description: 'Free AIS vessel tracking.',
        features: ['Real-time Tracking', 'Voyage History', 'Port Database'],
        use_cases: ['Vessel Monitoring', 'OSINT'],
        official_website: 'https://www.vesselfinder.com/',
        download_link: 'https://www.vesselfinder.com/',
        platform_supported: ['Web', 'Android', 'iOS'],
        license_type: 'Freemium',
        tags: ['ships', 'ais', 'tracking']
    },

    {
        tool_name: 'FleetMon',
        category: 'Maritime OSINT',
        description: 'FleetMon provides real-time vessel tracking and a massive port database. It is widely used for logsitics and maritime research.',
        short_description: 'Vessel tracking and port database.',
        features: ['Real-time Tracking', 'Port Database', 'Logistics'],
        use_cases: ['Supply Chain Tracking', 'Maritime Research'],
        official_website: 'https://www.fleetmon.com/',
        download_link: 'https://www.fleetmon.com/',
        platform_supported: ['Web', 'Android', 'iOS'],
        license_type: 'Freemium',
        tags: ['maritime', 'logistics', 'ports']
    },
    {
        tool_name: 'MyShipTracking',
        category: 'Maritime OSINT',
        description: 'MyShipTracking is a free real-time AIS vessel tracking website. It offers advanced filtering and unlimited track history in the browser.',
        short_description: 'Free advanced AIS tracking.',
        features: ['Unlimited History', 'Advanced Filters', 'Real-time AIS'],
        use_cases: ['Vessel Monitoring', 'Historical Analysis'],
        official_website: 'https://www.myshiptracking.com/',
        download_link: 'https://www.myshiptracking.com/',
        platform_supported: ['Web', 'iOS'],
        license_type: 'Free',
        tags: ['ais', 'tracking', 'history']
    },

    // --- Aviation OSINT ---
    {
        tool_name: 'FlightRadar24',
        category: 'Aviation OSINT',
        description: 'Flightradar24 is a global flight tracking service that provides you with real-time information about thousands of aircraft around the world.',
        short_description: 'Live air traffic tracking.',
        features: ['Live Tracking', 'Flight History', 'Playback'],
        use_cases: ['Flight Monitoring', 'Travel Investigation'],
        official_website: 'https://www.flightradar24.com/',
        download_link: 'https://www.flightradar24.com/apps',
        platform_supported: ['Web', 'Android', 'iOS'],
        license_type: 'Freemium',
        tags: ['planes', 'tracking', 'aviation']
    },
    {
        tool_name: 'ADS-B Exchange',
        category: 'Aviation OSINT',
        description: 'ADS-B Exchange is the world\'s largest source of open unblocked flight data. It does not filter out military or private aircraft.',
        short_description: 'Unfiltered flight tracking data.',
        features: ['Unfiltered Data', 'Military Tracking', 'Historical Data'],
        use_cases: ['Military Recon', 'Private Jet Tracking'],
        official_website: 'https://www.adsbexchange.com/',
        download_link: 'https://www.adsbexchange.com/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['aviation', 'ads-b', 'tracking']
    },

    {
        tool_name: 'FlightAware',
        category: 'Aviation OSINT',
        description: 'FlightAware is a premier flight tracking data company. It provides accurate real-time, historical, and predictive flight insights.',
        short_description: 'Premier flight tracking and status.',
        features: ['Flight Status', 'Predictive Data', 'Airport Delays'],
        use_cases: ['Travel Tracking', 'Aviation Analysis'],
        official_website: 'https://flightaware.com/',
        download_link: 'https://flightaware.com/mobile/',
        platform_supported: ['Web', 'Android', 'iOS'],
        license_type: 'Freemium',
        tags: ['flight', 'delays', 'commercial']
    },
    {
        tool_name: 'OpenSky Network',
        category: 'Aviation OSINT',
        description: 'The OpenSky Network is a non-profit community-based receiver network which has been continuously collecting air traffic surveillance data since 2013.',
        short_description: 'Community-based air traffic data.',
        features: ['Raw Data Access', 'Research API', 'Historical Data'],
        use_cases: ['Academic Research', 'Data Analysis'],
        official_website: 'https://opensky-network.org/',
        download_link: 'https://opensky-network.org/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['opensource', 'aviation', 'data']
    },

    // --- Vehicle OSINT ---
    {
        tool_name: 'VinCheck.info',
        category: 'Vehicle OSINT',
        description: 'VinCheck.info offers free VIN check reports including theft records, accident history, and salvage titles for vehicles in the US.',
        short_description: 'Free VIN check and vehicle history.',
        features: ['VIN Decode', 'Theft Check', 'Accident History'],
        use_cases: ['Vehicle Investigation', 'Fraud Detection'],
        official_website: 'https://vincheck.info/',
        download_link: 'https://vincheck.info/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['vehicle', 'vin', 'check']
    },
    {
        tool_name: 'FaxVin',
        category: 'Vehicle OSINT',
        description: 'FaxVin allows you to check license plates and VINs to get vehicle history reports. Useful for finding owner info (where available by law) and specs.',
        short_description: 'License plate and VIN lookup.',
        features: ['Plate Lookup', 'VIN Check', 'Specs'],
        use_cases: ['Vehicle Recon', 'Owner Lookup'],
        official_website: 'https://www.faxvin.com/',
        download_link: 'https://www.faxvin.com/',
        platform_supported: ['Web'],
        license_type: 'Freemium',
        tags: ['license-plate', 'vehicle', 'lookup']
    },

    // --- Geospatial & Satellite OSINT ---
    {
        tool_name: 'Google Earth Pro',
        category: 'Geospatial',
        description: 'Google Earth Pro on desktop is free and offers advanced features like historical imagery, movie making, and data import/export.',
        short_description: 'Advanced satellite imagery and mapping.',
        features: ['Historical Imagery', '3D Measurement', 'High-Res Printing'],
        use_cases: ['Geolocation', 'Site Analysis', 'Mapping'],
        official_website: 'https://www.google.com/earth/versions/#earth-pro',
        download_link: 'https://www.google.com/earth/versions/#earth-pro',
        platform_supported: ['Windows', 'macOS', 'Linux'],
        license_type: 'Free',
        tags: ['satellite', 'mapping', '3d']
    },
    {
        tool_name: 'Sentinel Hub',
        category: 'Geospatial',
        description: 'Sentinel Hub provides access to Sentinel, Landsat, and other Earth observation data. EO Browser allows you to browse and compare full resolution images.',
        short_description: 'Earth observation satellite imagery.',
        features: ['Multi-spectral', 'Time-lapse', 'EO Browser'],
        use_cases: ['Environmental Monitoring', 'Change Detection'],
        official_website: 'https://www.sentinel-hub.com/',
        download_link: 'https://apps.sentinel-hub.com/eo-browser/',
        platform_supported: ['Web'],
        license_type: 'Freemium',
        tags: ['satellite', 'imagery', 'analysis']
    },
    {
        tool_name: 'Zoom Earth',
        category: 'Geospatial',
        description: 'Zoom Earth shows the latest near real-time satellite images and the best high-resolution aerial views in a fast, zoomable map.',
        short_description: 'Near real-time satellite imagery and weather.',
        features: ['Live Weather', 'Storm Tracking', 'Daily Imagery'],
        use_cases: ['Weather Recon', 'Live Events'],
        official_website: 'https://zoom.earth/',
        download_link: 'https://zoom.earth/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['satellite', 'weather', 'live']
    },

    {
        tool_name: 'NASA Worldview',
        category: 'Geospatial',
        description: 'NASA Worldview lets you interactively browse global, full-resolution satellite imagery and then download the underlying data. Updated daily.',
        short_description: 'Interactive NASA satellite imagery.',
        features: ['Daily Imagery', 'Wildfire Tracking', 'Air Quality'],
        use_cases: ['Environmental Monitoring', 'Disaster Response'],
        official_website: 'https://worldview.earthdata.nasa.gov/',
        download_link: 'https://worldview.earthdata.nasa.gov/',
        platform_supported: ['Web'],
        license_type: 'Free',
        tags: ['nasa', 'satellite', 'environment']
    },

    // --- Radar & Environmental ---
    {
        tool_name: 'Windy.com',
        category: 'Radar OSINT',
        description: 'Windy provides real-time visualize weather forecast. It offers different layers for wind, rain, temperature, and pressure which can be useful for maritime/aviation planning.',
        short_description: 'Real-time weather radar and wind patterns.',
        features: ['Weather Radar', 'Wind Map', 'Forecast'],
        use_cases: ['Mission Planning', 'Environmental Analysis'],
        official_website: 'https://www.windy.com/',
        download_link: 'https://www.windy.com/',
        platform_supported: ['Web', 'Android', 'iOS'],
        license_type: 'Free',
        tags: ['weather', 'radar', 'map']
    },
    {
        tool_name: 'Blitzortung',
        category: 'Radar OSINT',
        description: 'Blitzortung.org is a worldwide community-based lightning detection network. It visualizes lightning strikes in real-time.',
        short_description: 'Real-time lightning detection.',
        features: ['Real-time Lightning', 'Audio Alerts', 'Global Network'],
        use_cases: ['Storm Tracking', 'Weather Safety'],
        official_website: 'https://www.blitzortung.org/',
        download_link: 'https://www.blitzortung.org/',
        platform_supported: ['Web', 'Android', 'iOS'],
        license_type: 'Free',
        tags: ['lightning', 'weather', 'storm']
    },
    {
        tool_name: 'RainViewer',
        category: 'Radar OSINT',
        description: 'RainViewer offers a complete weather radar map and rain forecast. It includes a massive archive of weather radar data.',
        short_description: 'Weather radar and rain forecast.',
        features: ['Radar Archive', 'Satellite Map', 'Rain Alerts'],
        use_cases: ['Weather Analysis', 'Forecast'],
        official_website: 'https://www.rainviewer.com/',
        download_link: 'https://www.rainviewer.com/',
        platform_supported: ['Web', 'Android', 'iOS'],
        license_type: 'Freemium',
        tags: ['rain', 'radar', 'forecast']
    }
];

module.exports = tools;
