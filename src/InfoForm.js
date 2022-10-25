import React from "react";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: [
        {
          bookName: "",
          author: {
            name: "",
            gender: "",
            address: "",
            facebook: "",
            phone: "",
          },
        },
      ],
    };
  }
  //handleChange
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  //handleSubmit
  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="bookName">
          Book name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label className="author">
          Author:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label className="gender">
          Gender:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label className="address">
          Address:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label className="facebook">
          Facebook:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label className="phone">
          Phone:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InfoForm;
