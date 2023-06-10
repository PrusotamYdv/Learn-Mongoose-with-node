const mon = require('mongoose')
let connection = async () => {
    try {
        mon.connect("mongodb://127.0.0.1:27017/CustomValidation")
        console.log("your file has been connected to database successfuly");
    } catch (err) {
        console.log("You have gotten some err in connections functions");
    }
}
connection()
let Collection = new mon.Schema({
    name: String,
    age: {
        type:Number,
        validate(value){
            if(value<0){
                throw new Error("your age is in negative")
            }
        }
    },
    address: String,
    email:{
        type:String,
        validate(value){
            if(!value.includes("@gmail.com")){
                throw new Error("Invlaid email")
            }
        }
    }
})
let DataName = mon.model("Data", Collection)
let output = async () => {
    try {
        let data = new DataName({
            name: "prusotam",
            age: 15,
            address: "sarsa",
            email:"prusotamyadav@gmail.com"
        })
        data.save()
        console.log("Your data has been saved");
    } catch (err) {
        console.log("you have gotten some error in output");
    }
}
// output()
const result = async()=>{
    let tolog = await DataName.find()
    console.log(tolog);
}
result()
