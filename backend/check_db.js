const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Tool = require('./models/Tool');

dotenv.config();

connectDB();

const checkData = async () => {
    try {
        const tool = await Tool.findOne({ tool_name: 'Have I Been Pwned' });
        console.log('Tool:', tool ? tool.tool_name : 'Not Found');
        console.log('Category:', tool ? `'${tool.category}'` : 'N/A'); // Quotes to see whitespace

        const categories = await Tool.distinct('category');
        console.log('All Categories:', categories);

        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

checkData();
