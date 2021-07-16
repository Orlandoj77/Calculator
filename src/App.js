import React, { Component } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import { Box, Div, Article, Section } from "./Styled";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = (val) => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = (val) => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };

  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator == "plus") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == "subtract") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == "multiply") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == "divide") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber),
      });
    }
  };
  render() {
    return (
      <Div className>
        <Box>
          <Section>
            <h1 style={{ color: "#ffff", fontSize: 15 }}> Calculator</h1>
            <Article className="calculator">
              <Input>{this.state.input}</Input>
              <ClearButton
                className="btnlg btnclear"
                handleClear={this.clearInput}
              >
                C
              </ClearButton>

              <Button type="button" handleClick={this.divide}>
                /
              </Button>

              <Button type="button" handleClick={this.multiply}>
                *
              </Button>
              <Button type="button" handleClick={this.addToInput}>
                7
              </Button>

              <Button type="button" handleClick={this.addToInput}>
                8
              </Button>
              <Button type="button" handleClick={this.addToInput}>
                9
              </Button>

              <Button type="button" handleClick={this.addToInput}>
                4
              </Button>
              <Button type="button" handleClick={this.subtract}>
                -
              </Button>
              <Button type="button" handleClick={this.addToInput}>
                5
              </Button>
              <Button type="button" handleClick={this.addToInput}>
                6
              </Button>
              <Button type="button" handleClick={this.addToInput}>
                1
              </Button>
              <Button type="button" handleClick={this.add}>
                +
              </Button>

              <Button type="button" handleClick={this.addToInput}>
                2
              </Button>
              <Button type="button" handleClick={this.addToInput}>
                3
              </Button>
              <Button type="button" handleClick={this.addZeroToInput}>
                0
              </Button>
              <Button class="btnlg" type="button" handleClick={this.evaluate}>
                =
              </Button>
              <Button type="button" handleClick={this.addDecimal}>
                .
              </Button>
            </Article>
          </Section>
        </Box>
      </Div>
    );
  }
}

export default App;
