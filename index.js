const mon = require('mongoose')
mon.connect("mongodb://127.0.0.1:27017/Tryconncetion").then(() => {
    console.log("your server has been runing now");
}).catch(() => {
    console.log("your server cannot connected");
})
let playlist = new mon.Schema({
    name: String,
    number: Number,
    address: String,
    age:Number
})
let model1 = mon.model("data", playlist)
let fun = async () => {
    try {
        let data = new model1({
            name: "harry",
            number: 44656545,
            address: "india",
            age:18
        })
        let data2 = new model1({
            name: "harry2",
            number: 44656545,
            address: "america",
            age:15
        })
        let data3 = new model1({
            name: "harry3",
            number: 44656545,
            address: "nepal",
            age:19
        })
        await model1.insertMany([data, data2, data3])
    } catch (err) {
        console.log('ereor showing');
    }
}
// fun()
let result = async () => {
    try {
        // let data1 = await model1.find().select({name:false,number:false}).limit(200)
        let data1 = await model1.find({age:{$gt:18}})
        console.log(data1);
    } catch (error) {
        console.log("you have gotten an error");
    }
}
result()