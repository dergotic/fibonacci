import React from "react";
import logo from "./fibonacci.jpeg";
import "./App.css";

class Fibonacci extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", members: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.calculateFibonacci = this.calculateFibonacci.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.calculateFibonacci(this.state.value);
  }

  calculateFibonacci(input) {
    let inputConverted = Number(input);

    if (
      Number.isNaN(inputConverted) ||
      !Number.isInteger(inputConverted) ||
      inputConverted === 0
    ) {
      alert("Please enter valid number (whole), you entered: " + input);
      this.setState({ value: "", members: [] });
      return;
    }

    if (inputConverted < 2) {
      this.setState({ members: [0, 1] });
      return [0, 1];
    } else {
      let sequence = this.calculateFibonacci(inputConverted - 1);
      sequence.push(
        sequence[sequence.length - 1] + sequence[sequence.length - 2]
      );
      this.setState({ members: sequence });
      return sequence;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Fibonacci sequence members.</p>
        </header>

        <section className="App-section">
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter the number of Fibonacci members you want to calulate: <br />
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                title="Please enter a whole number value."git 
              />
            </label>
            <input type="submit" value="Submit" />
          </form>

          {this.state.members.map((member, index) => (
            <p className="Fibonacci-members" key={index}>
              {member}
              {index < this.state.members.length - 1 ? ",\u00A0" : ""}
            </p>
          ))}
        </section>
      </div>
    );
  }
}

export default Fibonacci;
