const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  authors: { type: [String], required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  date: { type: Date, default: Date.now },
  googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
