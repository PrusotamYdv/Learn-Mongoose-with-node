const mongoose = require('mongoose')
// CREATING A DATABASE 
mongoose.connect("mongodb://127.0.0.1:27017/learnMongo")
.then(()=> console.log("your file is successfuly connected to the mongo"))
.catch((value) => {
    console.log("sorry, your file containe some error so we cannot conncted it to the mongo plz try to check your file deeply");
})


// CREATING THE COLLECTIONS STRUCTURE
const GirlsData = new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    job:String,
    date:String,
    BoyfriendName:String
})
const BoysData = new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    job:String,
    date:String,
    Girlfrend:String
})
const BoysGirls = new mongoose.Schema({
    name:String,
    age:Number,
    address:String,
    job:String,
    date:String
})

// CREATING A COLLECTIONS
const AboutGirl = new mongoose.model("AboutGirl", GirlsData);
const AboutBoys = new mongoose.model("Aboutboys", BoysData);
const ForBoth = new mongoose.model("ForBoth", BoysGirls);

// SAVING THE DATA IN THE COLLECTIONS

let DataCollectionforgirl = new AboutGirl({
    name:'kajal',
    age:16,
    address:"Laxmipur",
    job:"Studing",
    date:"15",
    // BoyfriendName:"yes"
})
const COLLECTIONS = async()=>{
    try{
        let Pooja = new ForBoth({
            name:'Pooja',
            age:16,
            address:"sarsatipur",
            job:"Studing",
            date:"12",
            // Girlfrend:"yes"
        })   
             let Sanju = new ForBoth({
            name:'Sanju',
            age:16,
            address:"kishanpur",
            job:"Studing",
            date:"15",
            // Girlfrend:"yes"
        })   
             let Manish = new ForBoth({
            name:'Manish',
            age:16,
            address:"laxmipur",
            job:"Studing",
            date:"15",
            // Girlfrend:"yes"
        })
        await ForBoth.insertMany([Pooja,Sanju,Manish])
        let read =  await ForBoth.find({name:"Manish"})
        console.log(read);
        // console.log(result);
    }catch(err) {
       console.log(err); 
    }
}
COLLECTIONS()

