import {
  Box,
  Div,
  Button,
  Article,
  Section,
  InputResult,
  // Image,
} from "./Styled";
import fundo from "../Assets/Imagens/Fundo.svg";
import { useState } from "react";
function Calculator() {
  const [changedValue, setchangedValue] = useState(0);

  function getData(e) {
    let value = e.target.name;
    setchangedValue(changedValue + value);
  }

  function clearData() {
    setchangedValue(0);
  }

  return (
    <Div>
      {/* <Image src={fundo} /> */}
      <Box>
        <Section>
          <Article className="calculator">
            <InputResult
              type="text"
              placeholder="0"
              id="result"
              value={changedValue}
              readonly
            ></InputResult>
            <Button
              className="btnlg btnclear"
              type="button"
              value="c"
              onClick={clearData}
            >
              C
            </Button>
            <Button type="button" value="/" onclick="getData(this)">
              /
            </Button>
            <Button type="button" value="*" onclick="getData(this)">
              *
            </Button>
            <Button
              type="button"
              name="7"
              onClick={(event) => {
                getData(event);
              }}
            >
              7
            </Button>
            <Button
              type="button"
              name="8"
              onClick={(event) => {
                getData(event);
              }}
            >
              8
            </Button>
            <Button
              type="button"
              name="9"
              onClick={(event) => {
                getData(event);
              }}
            >
              9
            </Button>
            <Button type="button" value="-" onclick="getData(this)">
              -
            </Button>
            <Button
              type="button"
              name="4"
              onClick={(event) => {
                getData(event);
              }}
            >
              4
            </Button>
            <Button
              type="button"
              name="5"
              onClick={(event) => {
                getData(event);
              }}
            >
              5
            </Button>
            <Button
              name="6"
              type="button"
              onClick={(event) => {
                getData(event);
              }}
            >
              6
            </Button>
            <Button
              class="btnplus"
              type="button"
              value="+"
              onclick="getData(this)"
            >
              +
            </Button>
            <Button
              type="button"
              name="1"
              onClick={(event) => {
                getData(event);
              }}
            >
              1
            </Button>
            <Button
              type="button"
              name="2"
              onClick={(event) => {
                getData(event);
              }}
            >
              2
            </Button>
            <Button
              type="button"
              name="3"
              onClick={(event) => {
                getData(event);
              }}
            >
              3
            </Button>
            <Button class="btnlg" type="button" value="=" onclick="calculate()">
              =
            </Button>
            <Button
              type="button"
              name="0"
              onClick={(event) => {
                getData(event);
              }}
            >
              0
            </Button>
            <Button type="button" value="." onclick="getData(this)">
              .
            </Button>
          </Article>
        </Section>
      </Box>
    </Div>
  );
}

export default Calculator;
