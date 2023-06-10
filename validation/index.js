const mon = require('mongoose')
mon.connect("mongodb://127.0.0.1:27017/shyam").then(() => {
    console.log('your file has been connected to the maongo');
}).catch((err) => {
    console.log("you have gotten some error while connecting to the mongo");
    
})

let shema  = new mon.Schema({
    name:{
        type:String,
        required:true
    },
    address:String,
    age:{
        type:Number,
        validate(value){
            if(value>100){
                console.log("your age is not valid");
            }

        }
    }
})

let collection = mon.model("new",shema)

let fun = async()=>{
    try {
        let output = await new collection({
            name:"shaym",
            address:"sarsa",
            age:53
        })
        output.save()
        console.log("your data has been saved to the database");
    } catch (err) {
        console.log('you have gotten some error on fun');
    } 
}
fun()



