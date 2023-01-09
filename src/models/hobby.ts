import { Schema, model } from "mongoose";

const hobbySchema = new Schema({
    title: String,
    description: String,
});

export const hobbyModel = model("Hobby", hobbySchema);
