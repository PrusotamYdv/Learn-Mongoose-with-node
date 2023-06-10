const mon = require('mongoose')
let connection = async ()=>{
    mon.connect("mongodb://127.0.0.1:27017/Validation").then(() => {
        console.log("your file has been connected to the database of mongodb");
    }).catch((err) => {
        console.log("your file has not been connected to the database of mongodb");
    })
}
connection()
const Data = new mon.Schema({
    name: {
        required: true,
        uppercase:true,
        type: String
    },
    address: String,
    number: {
        type: Number,
        required: true
    },
    age: Number
})
const PlayList = mon.model("PlayLists", Data)
const PlayList2 = mon.model("PlayLists2", Data)
let output = async () => {
    try {
        const prusotam = await new PlayList({
            name: "prusotam",
            address: "sarsa",
            number: 9801622232,
            age: 15
        })
        const shyam = await new PlayList({
            name: "shyam",
            address: "sarsa",
            number: 9801622236,
            age: 21
        })
        const ramudagar = await new PlayList({
            name: "ramudagar",
            address: "kishanpur",
            number: 9819810015,
            age: 16
        })
        PlayList.insertMany([prusotam, shyam, ramudagar])
        console.log("your data has been saved to the data base");
    } catch (err) {
        console.log("your data has not been saved to the data base");
    }
}
// output()
const output2 = async()=>{
    try {
        let laxmi = new PlayList2({
            name:"laxmi",
            address:"kishanpur",
            number:9818553592,
            age:14
        })
        let outputdata = await laxmi.save()
        console.log(outputdata);
    } catch (err) {
        console.log("you have gotten some error in output2");
    }
}
output2()
const update = async(_id)=>{
    try {
        let log = await PlayList2.findOneAndUpdate()
        console.log(log);
    } catch (err) {
        console.log("you have gotten some error in update function");
    }
}
// update("6483ee609e108a644febfb78")
const result = async()=>{
    try {
        const data = async()=>{
            let file = await PlayList.find({name:"prusotam",address:"sarsa"})
            console.log(file);
        }
        data()
    } catch (err) {
        console.log("during resluting , you have gotten an error");
    }
}
// result()

