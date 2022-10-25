import React from "react";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeBookName = this.handleChangeBookName.bind(this);
    this.handleChangeAuthorName = this.handleChangeAuthorName.bind(this);
    this.handleChangeAuthorGender = this.handleChangeAuthorGender.bind(this);
    this.handleChangeAuthorAddress = this.handleChangeAuthorAddress.bind(this);
    this.handleChangeAuthorFacebook =
      this.handleChangeAuthorFacebook.bind(this);
    this.handleChangeAuthorEmail = this.handleChangeAuthorEmail.bind(this);
    this.handleChangeAuthorPhone = this.handleChangeAuthorPhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      bookName: "",
      authorName: "",
      authorGender: "",
      authorAddress: "",
      authorFacebook: "",
      authorEmail: "",
      authorPhone: "",
    };
  }

  //handleChange
  handleChangeBookName(event) {
    this.setState({ bookName: event.target.value });
  }

  handleChangeAuthorName(event) {
    this.setState({ authorName: event.target.value });
  }
  handleChangeAuthorGender(event) {
    this.setState({ authorGender: event.target.value });
  }
  handleChangeAuthorAddress(event) {
    this.setState({ authorAddress: event.target.value });
  }
  handleChangeAuthorFacebook(event) {
    this.setState({ authorFacebook: event.target.value });
  }
  handleChangeAuthorEmail(event) {
    this.setState({ authorEmail: event.target.value });
  }
  handleChangeAuthorPhone(event) {
    this.setState({ authorPhone: event.target.value });
  }

  //handleSubmit
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddBook(this.state);
    this.setState({
      bookName: "",
      authorName: "",
      authorGender: "",
      authorAddress: "",
      authorFacebook: "",
      authorEmail: "",
      authorPhone: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="bookName">
          Book name:
          <input
            type="text"
            value={this.state.bookName}
            onChange={this.handleChangeBookName}
          />
        </label>
        <br />

        <label className="author">
          Author:
          <input
            type="text"
            value={this.state.authorName}
            onChange={this.handleChangeAuthorName}
          />
        </label>
        <br />

        <label className="gender">
          Gender:
          <input
            type="text"
            value={this.state.authorGender}
            onChange={this.handleChangeAuthorGender}
          />
        </label>
        <br />

        <label className="address">
          Address:
          <input
            type="text"
            value={this.state.authorAddress}
            onChange={this.handleChangeAuthorAddress}
          />
        </label>
        <br />

        <label className="facebook">
          Facebook:
          <input
            type="text"
            value={this.state.authorFacebook}
            onChange={this.handleChangeAuthorFacebook}
          />
        </label>
        <br />

        <label className="email">
          Email:
          <input
            type="text"
            value={this.state.authorEmail}
            onChange={this.handleChangeAuthorEmail}
          />
        </label>
        <br />

        <label className="phone">
          Phone:
          <input
            type="text"
            value={this.state.authorPhone}
            onChange={this.handleChangeAuthorPhone}
          />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InfoForm;
