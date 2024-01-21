// const mongoose = require('mongoose')

// // hard constants
// const MONGO_DB_URI = "mongodb://127.0.0.1:27017/aktiWeb4"

// const connectToMongoDb = () => {
//     mongoose
//         .connect(MONGO_DB_URI)
//         .then(()=> {
//             console.log(`mongo db connected with this string: ${MONGO_DB_URI}`)
//         })
//         .catch(()=> {
//             console.log(`error in mongo db connection`)
//         })
// }

// module.exports = connectToMongoDb

const mongoose = require('mongoose')


const MONGO_DB_URI = "mongodb://127.0.0.1:27017/aktiWeb4"

const connectToMongoDb = async ()=> {
    try {
        const response = await  mongoose.connect(MONGO_DB_URI)
        // console.log(response.STATES[1])
        if (response.STATES[1]){
            console.log(`mongodb connected at ${MONGO_DB_URI}`) 
        }else{
            console.log(`an error ocurred dwhile connecting to MongoDB`)
        }
    } catch (error) {
        console.log(error)
    }
    
    
}
module.exports = connectToMongoDb