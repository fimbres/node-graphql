import { Schema, model } from "mongoose";

const postSchema = new Schema({
    comment: String
});

export const postModel = model("Post", postSchema);
