// to use express you must require it
const express = require('express');
const bodyParser= require('body-parser')
const app = express();


const MongoClient = require('mongodb').MongoClient// react is the password

MongoClient.connect("mongodb+srv://OnlineLearning-App:react@cluster0.kvb0h.mongodb.net/?retryWrites=true&w=majority", 
{useUnifiedTopology: true}) 
  .then(client => { // using promises instead of callbacks
    console.log('Connected to Database')

    const db = client.db('OnlineLearning-App')
    const categoriesCollection = db.collection('categories')
    const coursesCollection = db.collection('courses')
    const instructorsCollection = db.collection('instructors')
    const recommendCoursesCollection = db.collection('recommendCourses')
    const studentsCollection = db.collection('students')
    

    app.use(bodyParser.urlencoded({extended: true}))//The urlencoded method within body-parser tells body-parser to extract data 
    //from the <form> element and add them to the body property in the request object.
    

    app.get('/', (req, res) => {// READ> serve up an index.html page back to the browser. (__dirname is the current directory you're in)
      res.sendFile(__dirname + '/index.html')// displays a form to the user...just for testing...
    })

    // CRUD 
    
    app.post('/students', (req, res) => {// CREATE. posts to form action='/...'
      studentsCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/')
        console.log(result)
      })

      .catch(error => console.error(error))
    })

    app.post('/courses', (req, res) => {
      coursesCollection.insertOne(req.body)
      .then(result => {
        res.redirect('/')
        console.log(result)
      })

      .catch(error => console.error(error))
    })

    app.listen(3000, function() {// creating a server that browsesrs can connect to. node server.js to make sure server is running
      console.log('listening on port 3000')
    })
      
  })
  .catch(error => console.error(error))