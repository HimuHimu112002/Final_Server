const { isLowercase } = require("validator")
const brandModel = require("../model/FoodBrandModel")
const categoryModel = require("../model/FoodCategoryModel")
const FoodModel = require('../model/FoodModel')

// food brand create
let foodBrandCreate = async (req, res)=>{
    let {brand} = req.body
    if(!brand){
        res.send({error: "Please Enter The Brandname"})
    }else{
        let brandcreate = new brandModel({
            brand: brand,
        })
        brandcreate.save()
        res.send({status:"success", message:"Brand Create Success"})
    }
}
// food brand read
let foodBrandGet = async (req, res)=>{
    try {
        let result= await brandModel.find({})
        res.send({status:"success", data:result})
    }catch (e) {
        res.send({status:"fail", message:"Something Went Wrong"})
    }
}

// food category create
let foodCategoryCreate = async (req, res)=>{
    let {category} = req.body
    if(!category){
        res.send({error: "Please Enter The Category"})
    }else{
        let categorycreate = new categoryModel({
            category: category,
        })
        categorycreate.save()
        res.send({status:"success", message:"Category Create Success"})
    }
}
// food category read
let foodCategoryGet = async (req, res)=>{
    try {
        let result= await categoryModel.find({})
        res.send({status:"success", data:result})
    }catch (e) {
        res.send({status:"fail", message:"Something Went Wrong"})
    }
}

// Food item create
let foodItemCreate = async (req, res)=>{
    let {name,brand,category,discription,price,uid} = req.body
    if(!name){
        res.send({error: "Please Enter The name"})
    }
    if(!brand){
        res.send({error: "Please Enter The brand"})
    }
    if(!category){
        res.send({error: "Please Enter The Category"})
    }
    if(!discription){
        res.send({error: "Please Enter The discription"})
    }
    if(!price){
        res.send({error: "Please Enter The price"})
    }
    else{
        let foodcreate = new FoodModel({
            name,
            brand,
            category,
            discription,
            img:req.file.filename,
            price,
            uid 
        })
        foodcreate.save()
        res.send({status:"success", message:"Food Create Success"})
    }
}

// food item read
let foodItemyGet = async (req, res)=>{
    try {
        let result= await FoodModel.find({})
        res.send({status:"success", data:result})
    }catch (e) {
        res.send({status:"fail", message:"Something Went Wrong"})
    }
}

// Food details
let foodDetails = async (req, res)=>{
    try{
        let _id = req.params.id;
        let result = await FoodModel.find({_id})
        res.send({status:"success", data:result})
    }catch(e){
        res.send({status:"fail", message:"Something Went Wrong", error:e.toString()})
    }
    
}

// Food Search
let foodSearch = async (req, res)=>{
    try{
        let name = req.params.name;
        let data= await  FoodModel.find({name})
        res.send({status:"success", data:data})
    }catch(e){
        res.send({status:"fail", message:"Something Went Wrong", error:e.toString()})
    }
}

// search food brand
const GetProductByBrand = async(req,res) =>{
    try {
        let BrandName = req.params.brand;
        let data = await FoodModel.find({brand:BrandName})
        res.send({status:"success", data:data})
    }catch (e) {
        res.send({status:"fail", message:"Something Went Wrong", error:e.toString()})
    }
}

// search food category
const GetProductByCategory = async(req,res) =>{
    try {
        let categories = req.params.category;
        let data = await FoodModel.find({category:categories})
        res.send({status:"success", data:data})
    }catch (e) {
        res.send({status:"fail", message:"Something Went Wrong", error:e.toString()})
    }
}
  
// Food delete
async function DeletFood(req, res){
    try{

        let deletData = req.body.id
        let result = await FoodModel.findByIdAndDelete(deletData)
        res.send({status:"success", data:result})
    }catch(e){
        res.send({status:"fail", message:"Something Went Wrong", error:e.toString()})
    }
    
}

// food update
let UpdateFood = async(req, res)=>{
    try {
        let _id = req.params.id;
        let reqBody = req.body;
        let data = await FoodModel.updateOne({_id:_id},{$set:reqBody},{upsert:true})
        res.send({status:"success", message:"Food update Success", data:data})
    }catch (e) {
        res.send({status:"fail", message:"Something Went Wrong", error:e.toString()})
    }
}

module.exports = {foodBrandCreate,foodBrandGet,foodCategoryCreate,foodCategoryGet,foodItemCreate,foodItemyGet,foodDetails,DeletFood,UpdateFood,foodSearch,GetProductByBrand,GetProductByCategory}