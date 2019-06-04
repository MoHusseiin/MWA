const express = require('express');
const gradeRouter = express.Router({caseSensitive:false, strict: true});

const baseUrl = "/grades/";
let grades = require('../model/grade');

let getIds = 2;

gradeRouter.get(baseUrl, (request, respon)=>{
    respon.status(200).json({status: 'ok', data:grades});
});

gradeRouter.get(baseUrl+":id", (request, respon, next)=>{
    const id = request.params.id;
    const grade = grades.find(x=> x.id == id);
    if(grade){
        request.grade = grade;
        return next();
    }else{
        return next(new Error('Grade Not Found!'));
    }
}, (request, respon) => {
    respon.status(200).json({
        status:'ok',data:request.grade})
});

gradeRouter.post(baseUrl, (request, response, next)=>{
    request.body.id = ++getIds;
    return next();
}, (req, res)=>{
    const grade = req.body;
    grades.push(grade);
    res.status(201).json({status: 'ok', data:grade});
});

gradeRouter.delete(baseUrl+":id", (request, respon, next)=>{
    const id = request.params.id;
    const grade = grades.find(x=> x.id == id);
    if(grade){
        request.grade = grade;
        return next();
    }else{
        return next(new Error('Grade Not Found!'));
    }
}, (req, res)=>{
    const id = req.params.id;
    grades = grades.filter(ele => ele.id != id);
    res.status(202).json({status: 'ok', data:req.grade});
});

module.exports=gradeRouter;