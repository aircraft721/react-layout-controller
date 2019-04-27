const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')
const Joi = require('joi');

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
const _id = mongoose.Schema.Types.ObjectId;

const elementSchema = new mongoose.Schema({
    _id: _id,
    childElements: [],
    className: String,
    backgroundColor: String,
    paddingTop: String,
    paddingBottom: String,
    paddingLeft: String,
    paddingRight: String,
    marginTop: String,
    marginBottom: String,
    marginLeft: String,
    marginRight: String,
    padding: String,
    margin: String,
    height: String,
    width: String,
    minWidth: String,
    maxWidth: String,
    maxHeight: String,
    minHeight: String,
    float: String,
    overFlow: String,
    position: String,
    display: String,
    flexDirection: String,
    justifyContent: String,
    flexWrap: String,
    flexBasis: String,
    alignItems: String,
    alignContent: String,
    alignSelf: String,
})

const ElementModel = mongoose.model('Element', elementSchema);

//POST
app.post('/element/create', (req, res) => {
    const element = new ElementModel({
        _id: new mongoose.Types.ObjectId(),
        childElements: req.body.childElements,
        className: req.body.className,
        backgroundColor: req.body.backgroundColor,
        paddingTop: req.body.paddingTop,
        paddingBottom: req.body.paddingBottom,
        paddingLeft: req.body.paddingLeft,
        paddingRight: req.body.paddingRight,
        marginTop: req.body.marginTop,
        marginBottom: req.body.marginBottom,
        marginLeft: req.body.marginLeft,
        marginRight: req.body.marginRight,
        padding: req.body.padding,
        margin: req.body.margin,
        height: req.body.height,
        width: req.body.width,
        minWidth: req.body.minWidth,
        maxWidth: req.body.maxWidth,
        maxHeight: req.body.maxHeight,
        minHeight: req.body.minHeight,
        float: req.body.float,
        overFlow: req.body.overFlow,
        position: req.body.position,
        display: req.body.display,
        flexDirection: req.body.flexDirection,
        justifyContent: req.body.justifyContent,
        flexWrap: req.body.flexWrap,
        flexBasis: req.body.flexBasis,
        alignItems: req.body.alignItems,
        alignContent: req.body.alignContent,
        alignSelf: req.body.alignSelf,
    });

    const validation = validateInputData(req.body);
    console.log('validation', validation);

    element
        .save()
        .catch(err => console.error('error', err));

    res.status(200).json({
        message: 'post request succeded',
        element: element
    })
})

//GET BY ID
app.get('/element/:id', (req, res) => {
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

//GET ALL
app.get('/elements', (req, res) => {
    ElementModel.find({}, (err, elements) => {
        res.json(elements)
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

//VALIDATION
const validateInputData = (data) => {
    const schema = Joi.object().keys({
        className: Joi.string(),
        backgroundColor: Joi.string(),
        paddingTop: Joi.string().regex(/(\d+)(px|%|em)/),
        paddingBottom: Joi.string().regex(/(\d+)(px|%|em)/),
        paddingLeft: Joi.string().regex(/(\d+)(px|%|em)/),
        paddingRight: Joi.string().regex(/(\d+)(px|%|em)/),
        marginTop: Joi.string().regex(/(\d+)(px|%|em)/),
        marginBottom: Joi.string().regex(/(\d+)(px|%|em)/),
        marginLeft: Joi.string().regex(/(\d+)(px|%|em)/),
        marginRight: Joi.string().regex(/(\d+)(px|%|em)/),
        padding: Joi.string().regex(/(\d+)(px|%|em)/),
        margin: Joi.string().regex(/(\d+)(px|%|em)/),
        height: Joi.string().regex(/(\d+)(px|%|em|vh)/),
        width: Joi.string().regex(/^(\d+)(px|%|em|vw)/),
        minWidth: Joi.string().regex(/(\d+)(px|%|em|vw)/),
        maxWidth: Joi.string().regex(/(\d+)(px|%|em|vw)/),
        maxHeight: Joi.string().regex(/(\d+)(px|%|em|vh)/),
        minHeight: Joi.string().regex(/(\d+)(px|%|em|vh)/),
        float: Joi.string().regex(/(none|right|left)/),
        overFlow: Joi.string().regex(/(visible|hidden|scroll|auto)/),
        position: Joi.string().regex(/(static|relative|absolute|sticky)/),
        display: Joi.string().regex(/(block|inline|flex|grid|none)/),
        flexDirection: Joi.string().regex(/(colunn|column-reverse|row|row-reverse|inherit)/),
        justifyContent: Joi.string().regex(/(start|end|center|space-around|space-between|space-evenly|inherit)/),
        flexWrap: Joi.string().regex(/(wrap|no-wrap|wrap-reverse|inherit)/),
        flexBasis: Joi.string().regex(/(\d+)(px|%|em|auto)/),
        alignItems: Joi.string().regex(/(start|end|center|self-start|self-end|baseline|inherit)/),
        alignContent: Joi.string().regex(/(start|end|center|self-start|self-end|baseline|inherit)/),
        alignSelf: Joi.string().regex(/(start|end|center|self-start|self-end|baseline|inherit)/),
    });

    return Joi.validate(data, schema);
}

app.listen(port, () => console.log(`Example app listening on port ${port}`))
module.exports = app;