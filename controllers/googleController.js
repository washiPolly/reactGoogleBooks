const axios = require("axios");
const db = require("../models");
const { model } = require("../models/book");

// findAll searches API and returns only ones we haven't saved. Also only return results with title, author, link, description, and image
module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios
            .get("https://www.googleapis.com/book/v1/volumes", {
                params
            })
            .then(results =>
                results.data.items.filter(
                    results =>
                        result.volumeInfo.title &&
                        result.volumeInfo.infoLink &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.description &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.imageLinks.thumbnail

                )
            )
            .then(apiBooks => apiBooks.fulter(apiBook =>
                dbBooks.every(dbBook => dbNook / googleId.toString() !== apiBook.id
                )
            )
            )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    }
}