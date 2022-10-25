import React from "react";
import InfoForm from "./InfoForm";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddBook = this.handleAddBook.bind(this);
    this.deleteBookList = this.deleteBookList.bind(this);
    this.handleAddBookByForm = this.handleAddBookByForm.bind(this);

    this.state = {
      infos: [
        {
          nameBook: "Javascript: The Good Parts by Douglas Crockford",
          author: {
            name: "Douglas Crockford",
            gender: "Male",
            address: "Hanoi",
            facebook: "http://facebook.author",
            email: "douglascrockford@gmail.com",
            phone: "+21345546485163",
          },
        },
      ],
    };
  }

  handleAddBook() {
    this.setState((prevState) => ({
      infos: prevState.infos.concat([
        {
          nameBook: "Name Book Update",
          author: {
            name: "Updated Author",
            gender: "Female",
            address: "HCMC, Vietnam",
            facebook: "http://facebook.author",
            email: "douglascrsdfockford@gmail.com",
            phone: "+2134f5563",
          },
        },
      ]),
    }));
  }

  deleteBookList() {
    this.setState((prevState) => {
      prevState.infos.pop();
      return {
        infos: prevState.infos,
      };
    });
  }

  handleAddBookByForm(book) {
    console.log(book);
    const newBook = {
      nameBook: book.bookName,
      author: {
        name: book.authorName,
        gender: book.authorGender,
        address: book.authorAddress,
        facebook: book.authorFacebook,
        email: book.authorEmail,
        phone: book.authorPhone,
      },
    };
    this.setState((prevState) => {
      prevState.infos.push(newBook);
      return {
        infos: prevState.infos,
      };
    });
  }

  render() {
    console.log("this.state", this.state);
    return (
      <div style={{ color: "white" }}>
        <InfoForm onAddBook={this.handleAddBookByForm} />
        Danh sach <br />
        <br />
        <button onClick={this.handleAddBook}>Add Book Info</button> <br />
        <br />
        <button onClick={this.deleteBookList}>Delete Book Info</button>
        <br />
        <br />
        <div>
          {this.state.infos.map(({ nameBook, author }, index) => {
            return (
              <div>
                {index}, {nameBook}
                <div>{author.name}</div>
                <div>{author.gender}</div>
                <div>{author.address}</div>
                <div>{author.facebook}</div>
                <div>{author.phone}</div>
                <div>
                  <br />
                  <br />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Books;
