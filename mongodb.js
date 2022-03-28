//CRUD create read update delete

const mongodb = require('mongodb')
const Db = require('mongodb/lib/db')

//provide fuction necessary for development 
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID


//cpmst {MongoClient, ObjectID} = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'

const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error,client)=>{
    if (error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set:{
            completed: true
        }
    }).then ((result) =>{
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

    /*
    const updatepromise = db.collection('users').updateOne({
        _id: new ObjectID('624184048ece2a5454f4280a')
    },{
        $inc:{
            age: 1
        }
    }).then((result)=>{
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })

    */
    /*
    db.collection('users').insertOne({
        name:'Angus',
        age: 27
    }, (error, result) =>{
        if (error){
            return console.log('unable to insert user')
        }

        console.log(result.ops)
    })
    

    db.collection('users').insertMany([
        {
            name: 'Jen',
            age: 28
        },{
            name: 'Ye',
            age: 29
        }
    ], (error, result) => {
        if (error){
            return console.log('unable to insert user')
        }

        console.log(result.ops)
    })
    
    db.collection('tasks').insertMany([
        {
            description: 'Clean',
            boolean: true
        },{
            description: 'wash',
            boolean: true
        },{
            description: 'sleep',
            boolean: false
        }
    ], (error, result) => {
        if (error){
            return console.log('unable to insert task')
        }

        console.log(result.ops)
    })

*/

})