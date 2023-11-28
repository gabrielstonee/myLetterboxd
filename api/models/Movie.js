class Movie{
  constructor(title, image, year, director, synopsis, cast) {
    this.title = title;
    this.image = image;
    this.year = year;
    this.director = director;
    this.synopsis = synopsis;
    this.cast = cast;
    this.reviews = []
  }

  get title() {
    return this.title;
  }
  get year() {
    return this.year;
  }
  get director() {
    return this.director;
  }
  get synopsis() {
    return this.synopsis;
  }
  get cast() {
    return this.director;
  }
  get reviews() {
    return this.reviews;
  }
  set reviews(review) {
    this.reviews.push(review);
  }
}

module.exports = Movie;