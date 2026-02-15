const http = require('http');

const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/tools?category=Data%20Leaks%20OSINT',
    method: 'GET',
};

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const tools = JSON.parse(data);
            const tool = tools.find(t => t.tool_name === 'Have I Been Pwned');

            console.log('Status Code:', res.statusCode);
            console.log('Total Tools Found:', tools.length);
            if (tool) {
                console.log('Target Tool Found:', tool.tool_name);
                console.log('Tool Category:', tool.category);
            } else {
                console.log('Target Tool NOT Found in response');
            }
        } catch (e) {
            console.error('Error parsing JSON:', e.message);
            console.log('Raw Data:', data);
        }
    });
});

req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
});

req.end();
