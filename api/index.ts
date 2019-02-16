const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')

const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.set('port', port);

mongoose.connect('mongodb://localhost/layout')
    .then(() => console.log('Connected to mongodb'))
    .catch(err => console.error('could not connect to mongodb', err));

mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

const elementSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    className: String,
    height: String,
    width: String,
    backgroundColor: String
})

const ElementModel = mongoose.model('Element', elementSchema);

//POST
app.post('/element/create', (req, res) => {
    const element = new ElementModel({
        _id: new mongoose.Types.ObjectId(),
        className: req.body.className,
        width: req.body.width,
        height: req.body.height,
        backgroundColor: req.body.backgroundColor
    });

    element
        .save()
        .then(result => console.log(result))
        .catch(err => console.error('error', err));

    res.status(200).json({
        message: 'post request succeded',
        element: element
    })
})

//GET BY ID
app.get('/element/get/:id', (req, res) => {
    const id = req.params.id;
    
    ElementModel.findById({_id: id}, (err, element) => {
        if (err) {
            console.log('err', err);
            return res.status(500).send();
        }
        res.status(200).json({
            element: element
        })
    })
})

//GET
app.get('/element/get', (req, res) => {
    ElementModel.find({}, (err, divs) => {
        res.json(divs)
    });
})

//DELETE
app.delete('/element/delete/:id', (req, res) => {
    const id = req.params.id;
    ElementModel.findOneAndRemove({_id: id}, (err) => {
        if(err){
            console.log('err', err);
            return res.status(500).send();
        }
        return res.status(200).send();
    });
})

//UPDATE
app.patch('/element/update/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;

    ElementModel.findOneAndUpdate({_id: id}, (update), {new: true}, (err, element) => {
        if (err) {
            console.log('err', err);
            return res.status(500).send();
        };
        res.status(200).json({
            element
        });
    }); 
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
module.exports = app;