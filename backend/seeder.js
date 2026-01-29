const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const User = require('./models/User');
const Tool = require('./models/Tool');
const tools = require('./data/tools');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Tool.deleteMany();
        await User.deleteMany();

        const createdUser = await User.create({
            username: 'admin',
            email: 'admin@example.com',
            password: 'adminpassword123',
            role: 'admin'
        });

        const adminId = createdUser._id;

        console.log(`Importing ${tools.length} tools...`);

        const sampleTools = tools.map((tool) => {
            return { ...tool, user: adminId };
        });

        await Tool.insertMany(sampleTools);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Tool.deleteMany();
        await User.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
