import { connect } from "./mongo.db.js";
import MovieSchema from "../schemas/movie.schema.js";

async function createMovieInfo(movieInfo){
  try{
    const mongoose = await connect();
    const MovieInfo = mongoose.model("MovieInfo", MovieSchema);
    movieInfo = new MovieInfo(movieInfo);
    await movieInfo.save();
  }catch(err){
    throw err;
  }
}

async function updateMovieInfo(movieInfo){
  try{
    const mongoose = await connect();
    const MovieInfo = mongoose.model("MovieInfo", MovieSchema);
    await MovieInfo.findOneAndUpdate({ movieId: movieInfo.movieId}, movieInfo);
  }catch(err){
    throw err;
  }
}

async function getProductInfo(productId){
  try{
    const mongoose = await connect();
    const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
    return await ProductInfo.findOne({ productId }).exec();
  }catch(err){
    throw err;
  }
}

async function deleteProductInfo(productId){
  try{
    const mongoose = await connect();
    const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
    await ProductInfo.deleteOne({ productId });
  }catch(err){
    throw err;
  }
}

async function findAll(){
  try{
    const mongoose = await connect();
    const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
    return await ProductInfo.find({}).exec();
  }catch(err){
    throw err;
  }
}

export default {
  createMovieInfo,
  updateMovieInfo,
  getProductInfo,
  createReview,
  deleteReview,
  findAll,
  deleteProductInfo
};