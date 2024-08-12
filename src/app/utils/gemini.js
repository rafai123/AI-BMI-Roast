const { GoogleGenerativeAI } = require("@google/generative-ai");

const key = process.env.API_KEY
console.log(key)
console.log(process.env.API_KEY)

const genAI = new GoogleGenerativeAI(key)

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
})

export default model