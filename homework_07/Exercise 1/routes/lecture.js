const express = require('express');
const lectureRouter = express.Router({caseSensitive:true, strict: true});
const { ObjectId } = require('mongodb').ObjectID;

const baseUrl = "/lectures/";

lectureRouter.get(baseUrl, async (req, res)=>{
    try {
        const lectures = await req.db.collection('lectures').find({}).toArray();
        if(lectures.length === 0){
            res.status(204);
        }else{
            res.status(200).json({status: 'ok', data: lectures});
        }
    } catch (error) {
        return next(new Error(' Can\'t get all lectures '+ error.message)); 
    }
});

lectureRouter.get(baseUrl+":id", async (req, res, next) => {
    try {
        const lectureId = req.params.id;
        const lecture = await req.db.collection('lectures').findOne({_id: new ObjectId(lectureId)});   
        console.log("lecture ==> "+ lecture)
        res.status(200).json({status: 'ok', data: lecture});
    } catch (error) {
        return next(new Error(' Can\'t get lecture with this Id '+ error.message)); 
    }
});

lectureRouter.post(baseUrl, async (req, res, next) => {
    try {
        const lecture = await req.db.collection('lectures').insertOne(req.body);   
        res.status(201).json({status: 'ok', data: lecture});
    } catch (error) {
        return next(new Error(' Can\'t add new lecture '+ error.message)); 
    }
});

lectureRouter.delete(baseUrl+":id", async (req, res, next) => {
    try {
        const lectureId = req.params.id;
        const lecture = await req.db.collection('lectures').deleteOne({_id: new ObjectId(lectureId)});   
        res.status(202).json({status: 'ok', data: lecture});
    } catch (error) {
        return next(new Error(' Can\'t delete lecture with this Id '+ error.message)); 
    }
});

lectureRouter.get(baseUrl+"search/:lecName", async (req, res, next) => {
    try {
        const lecName = req.params.lecName;
        const lectures = await req.db.collection('lectures').find({lecture: {$regex: lecName}}).toArray();   
        if(lectures.length === 0){
            res.status(204);
        }else{
            res.status(200).json({status: 'ok', data: lectures});
        }
    } catch (error) {
        return next(new Error(' Can\'t add new lecture '+ error.message)); 
    }
});

module.exports = lectureRouter;