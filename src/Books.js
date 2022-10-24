import React from "react";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddBook = this.handleAddBook.bind(this);
    this.deleteBookList = this.deleteBookList.bind(this);

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
        {
          nameBook: "React JS:The Good Parts by",
          author: {
            name: "Douglas",
            gender: "Female",
            address: "Hanoi, Vietnam",
            facebook: "http://facebook.author",
            email: "douglascrockford@gmail.com",
            phone: "+21345563",
            role: "daddy",
          },
        },

        {
          nameBook: "Vue: The Good Parts",
          author: {
            name: "Vue- Douglas",
            gender: "Female",
            address: "HCM, Vietnam",
            facebook: "http://facebook.address",
            email: "Vue@gmail.com",
            phone: "+21fdsg345563",
            role: "mommy",
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

  render() {
    console.log("this.state", this.state);
    return (
      <div style={{ color: "white" }}>
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
