class User{
  constructor(name, username, profile_pic, password) {
    this.name = name;
    this.username = username;
    this.profile_pic = profile_pic;
    this.password = password;
    this.favorites = [];
    this.watcheds = [];
  }

  get name() {
    return this.name;
  }
  get username() {
    return this.username;
  }
  get password() {
    return this.password;
  }
  get favorites() {
    return this.favorites;
  }
  get watched() {
    return this.watched;
  }
  set favorites(favorite) {
    this.favorites.push(favorite);
  }
  set watcheds(watched) {
    this.watched.push(watched);
  }
}

module.exports = User;