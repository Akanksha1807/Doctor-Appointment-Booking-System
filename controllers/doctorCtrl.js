const doctorModel = require("../models/doctorModel");
const userModel = require('../models/userModels')
const getDoctorInfoController = async(req, res) =>{
    try {
        const doctor = await doctorModel.findOne({userId:req.body.userId})
        res.status(200).send({
            success:true,
            data:doctor,
            message:'Doctor data fetched successfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:true,
            error,
            message:'Error in fetching doc details'
        })
        
    }
}

const updateProfileController = async(req, res) =>{
    try {
        const doctor = await doctorModel.findOneAndUpdate({userId:req.body.userId}, req.body)
        res.status(201).send({
            success:true, 
            message:'Doctor Profile Updated',
            data:doctor
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in updating doctor profile',
            error
        })
    }
}
const getDoctorByIdController = async(req, res) =>{
    try {
        const doctor = await doctorModel.findOne({_id:req.body.doctorId})
        res.status(200).send({
            success:true,
            data:doctor,
            message:'Doctor info fetched succesfully'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error, 
            message:'Error in fetching doctor information'
        })
    }
}
module.exports = {getDoctorInfoController,updateProfileController,getDoctorByIdController}