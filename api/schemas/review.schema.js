import mongoose from "mongoose";
import MovieSchema from "./movie.schema.js";

const ReviewSchema = new mongoose.Schema(
  {
    user: String,
    score: Number,
    content: String,
  }, {collection: "review"}
);

export default ReviewSchema;