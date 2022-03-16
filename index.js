const EventEmitter = require ('events');
const emitter = new EventEmitter();
const fs = require('fs');
const path = require ('path').parse ('/users/test.txt');
const os = require ('os');
const http = require ('http');
const _ = require ('underscore');
const csv = require('csv-parser');
const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json());

app.post('/api/courses', (req,res) => {
  const courses = {
    id: courses.length +1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
})

const port = process.env.PORT || 5000
app.listen (port, () => console.log (`listening on port ${port}...`))


app.get('/', (req,res) => {
  res.send("nodemon - for monitoring changes")
})

const courses = [
  {id: 1, name: "js"},
  {id: 2, name: "js"},
  {id: 3, name: "js"}
]
app.get ('/api/courses', (req,res) => {
  res.send (courses);
});

app.get ('/api/courses/:id', (req, res) => {
  res.send(courses);
})

app.get ('/api/courses/:id', (req, res) => {
  const my_course = courses.find(course => course.id === ParseInt(req.params.id));
  if(!my_course) res.statusCode(404).send("not found");
  
  const result = validateCourse(req.body);
  console.log(result);
  if(result.error){
    res.status(400).send("Name is required and should be min 3char")
    return;
  }

  my_course.name = req.body.name
  res.send(my_course);
})

function validateCourse(course){
  const schema = Joi.object({
    name: Joi.string().min(3).required
  });
  return schema.validate(course);
}

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
});

const server = http.createServer((req,res) => {})

var totalMemory = os.totalmem();
var freeMemmory = os.freemem()
console.log('Total Memory: ' + totalMemory);
console.log (`Total Memory: ${totalMemory}`);
console.log (`Free Memory: ${freeMemmory}`);


try{
    fs.unlikSync ('./tmp/hello');
    console.log('successfully deleted /tmp/hello');
}catch (err) {}

fs.readdir('./', function(err, files) {
 if(err) console.log("Error", err);
 else console.log("Result", files)
});

emitter.on('messageLogged', (eventArg) => {
    console.log("Listener called", eventArg );

});
emitter.emit('messageLogged', {id:1, url:"http://"});