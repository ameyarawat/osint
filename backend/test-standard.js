const mongoose = require('mongoose');

// Constructed from nslookup results
// Cluster: cluster0.xdy4gk5.mongodb.net
// Shards: ac-7le9i4z-shard-00-00, 01, 02
// User: ameyarawat:ameyarawat

const STANDARD_URI = "mongodb://ameyarawat:ameyarawat@ac-7le9i4z-shard-00-00.xdy4gk5.mongodb.net:27017,ac-7le9i4z-shard-00-01.xdy4gk5.mongodb.net:27017,ac-7le9i4z-shard-00-02.xdy4gk5.mongodb.net:27017/?ssl=true&replicaSet=atlas-7le9i4z-shard-0&authSource=admin&retryWrites=true&w=majority";

console.log('Testing STANDARD connection...');

mongoose.connect(STANDARD_URI)
    .then(() => {
        console.log('✅ SUCCESS: Connected to MongoDB via Standard String!');
        process.exit(0);
    })
    .catch(err => {
        console.error('❌ FAILURE with Standard String.');
        console.error(err);
        process.exit(1);
    });
