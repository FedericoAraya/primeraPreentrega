import mongoose from "mongoose";

const messagesCollection = 'messages' 

const messagesScheme = mongoose.Schema({
    id: Number,
    name: String,
    type: String,
    photo: String
})

const viewMessagesModel = mongoose.model(messagesCollection, messagesScheme)

export default viewMessagesModel