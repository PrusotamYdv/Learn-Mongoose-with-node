const mon = require('mongoose')

mon.connect("mongodb://127.0.0.1:27017/learnMongo").then((value) => {
    console.log("your file has been connected to the mongo");
}).catch((err) => {
    console.log("your file has not been connected to the mongo");
})

let Collection = new mon.Schema({
    name:String,
    age:Number,
    address:String
})
let CollectionName = mon.model("ForBoth",Collection)
let fun = async()=>{
    try {
     
    let file = await new CollectionName({
        name:"shyam",
        age:21,
        address:"sarsa"
    })   
     let file2 = await new CollectionName({
        name:"ram",
        age:22,
        address:"dhanusha"
    })
    await CollectionName.insertMany([file,file2])
    console.log("your data has been saved to the mongo database");
    } catch (error) {
        console.log("your fun function has gotten some errror. please try to slove it");
    }
}
// fun()

let output = async()=>{
    try {
        // let result = await CollectionName.find({address:"kishanpur"}).select({name:true,address:true}).countDocuments()
        // let result = await CollectionName.find({age:{$gte:16}}).select({name:true})
        // let result = await CollectionName.find({address:{$nin:["kishanpur","laxmipur"]}}).select({name:true}).count()
        let result = await CollectionName.find().sort({age:-1}).select({name:true,age:true})
        console.log(result);
    
    } catch (err) {
        console.log("you have gotten some error in output function");
    }
  

}
output()