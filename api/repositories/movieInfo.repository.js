import { connect } from "./mongodb.js";
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

async function getMovieInfo(movieInfoId){
  try{
    const mongoose = await connect();
    const MovieInfo = mongoose.model("MovieInfo", MovieSchema);
    return await MovieInfo.findOne({ movieInfoId }).exec();
  }catch(err){
    throw err;
  }
}

async function deleteMovieInfo(movieId){
  try{
    const mongoose = await connect();
    const MovieInfo = mongoose.model("MovieInfo", MovieSchema);
    await MovieInfo.deleteOne({ movieId });
  }catch(err){
    throw err;
  }
}

async function findAll(){
  try{
    const mongoose = await connect();
    const MovieInfo = mongoose.model("MovieInfo", MovieSchema);
    return await MovieInfo.find({}).exec();
  }catch(err){
    throw err;
  }
}

export default {
  createMovieInfo,
  updateMovieInfo,
  getMovieInfo,
  findAll,
  deleteMovieInfo
};