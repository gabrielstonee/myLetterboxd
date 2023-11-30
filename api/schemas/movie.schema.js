import mongoose from "mongoose";
import ReviewSchema from "./review.schema.js";

const MovieSchema = new mongoose.Schema(
  {
    title: String,
    imageUrl: String, // Adding a field to store the image URL
    year: String,
    director: String,
    synopsis: String,
    cast: [String],
    reviews: [ReviewSchema]
  }, { collection: "movieInfo" }
);

export default MovieSchema;