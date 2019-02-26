const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos')
    // .findOneAndUpdate({
    //     _id: new ObjectID('5c74a1a58687f7d08e4767da')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // })
    // .then((result) => {
    //     console.log(result);
    // });

    db.collection('Users')
    .findOneAndUpdate({
        _id: new ObjectID('5c7456d3ff3ff4579f3e573d')
    }, {
        $set : {
            name: 'Daniel'
        },
        $inc : {
            age: 1
        }
    }, {
        returnOriginal: false
    })
    .then((result) => {
        console.log(result);
    })
    // client.close()
})