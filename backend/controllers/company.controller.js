import {Company} from "../models/company.model"

const registerCompany=async(req,res)=>{
  try {
    const {companyName}=req.body;
    if(!companyName){
        return res.status(400).json({
            message:"compant name is required",
            success:false
        })
    }
    let company=await Company.findOne({name:companyName})
    if(company){
        return res.status(400).json({
            message:"cant register the company with same name",
            success:false
        })
    }
    company=await Company.create({
        name:companyName,
        userId:req.id,
         
    })
    return res.status(200).json({
        message:"company created sucessfully",
        company,
        success:true
    })
  } catch (error) {
    console.log(error)
  }
}

export const getCompany=async(req,res)=>{
    try {
        const userId=req.id;
        const companies=await Company.findOne({userId})
        if(!companies){
            return res.status(404).json({
                message:"companies not Found",
                success:false
            })
        }
    } catch (error) {
        console.log(error)
    }
}

