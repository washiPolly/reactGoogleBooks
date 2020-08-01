import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from 'axios';


function Books() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyBjBhHbs9f8Dyp1xyn0LGGG9f9zAPhFSpQ")

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.get("https://www.googleapis.com/books/v1/volumes?q=$" + book + "&maxResult=40")
      .then(data => {
        console.log(data.data.items)
        setResult(data.data.items)
      })
  }
  // // Setting our component's initial state
  // const [books, setBooks] = useState([])
  // const [formObject, setFormObject] = useState({})

  // // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadBooks()
  // }, [])

  // // Loads all books and sets them to books
  // function loadBooks() {
  //   API.getBooks()
  //     .then(res =>
  //       setBooks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value })
  // };

  // // When the form is submitted, use the API.saveBook method to save the book data
  // // Then reload books from the database
  // // function handleFormSubmit(event) {
  // //   event.preventDefault();
  // //   if (formObject.title && formObject.author) {
  // //     API.saveBook({
  // //       title: formObject.title,
  // //       author: formObject.author,
  // //       synopsis: formObject.synopsis
  // //     })
  // //       .then(res => loadBooks())
  // //       .catch(err => console.log(err));
  // //   }
  // // };

  // // Handle Submit
  // const handleSubmit = () => {
  //   if (formObject.title) {
  //     axios.get('https://www.googleapis.com/books/v1/volumes?q=${query}')
  //       .then(res => {
  //         console.log(res.data)
  //       }).catch(err => {
  //         console.log(err.response)
  //       })
  //   }
  // }



  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <Row>
        <Col size="lg-12">
          <Jumbotron>
            <h1>Google Books Search</h1>
            <h2>Search for and Save Books of Interest</h2>
          </Jumbotron>
          <form onSubmit={handleSubmit}>
            <Input

              // name="title"
              value={book}
              placeholder="Book Search (required)"
              onChange={handleChange}
            />

            <FormBtn type="submit" >
              Search
              </FormBtn>
          </form>
        </Col>

        <Col size="md-12">

          {result.map(book => (
            <div className="card">
              <div className="card-body">

                <tr style={{ fontWeight: "bold" }}>{book.volumeInfo.title}</tr>
                <tr>Written By: {book.volumeInfo.authors}</tr>

                <a href={book.volumeInfo.previewLink}>
                  <img style={{ float: "left", paddingTop: "25px" }} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
                </a>
                <table >



                  <tr style={{ float: "left", paddingTop: "20px", marginLeft: "25px" }}>Description: {book.volumeInfo.description}</tr>
                </table>
              </div>
            </div>
          ))}

        </Col>
        {/* <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Books On My List</h1>
          </Jumbotron>
          {books.length ? (
            <List>
              {books.map(book => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    <strong>
                      {book.title} by {book.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h3>No Results to Display</h3>
            )}
        </Col> */}
      </Row>
    </Container>
  );
}


export default Books;
