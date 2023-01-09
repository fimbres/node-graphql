import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    age: Number,
    profession: String,
});

export const userModel = model("User", userSchema)
;