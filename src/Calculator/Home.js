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
function Calculator() {
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
              readonly
            ></InputResult>
            <Button
              className="btnlg btnclear"
              type="button"
              value="c"
              onclick="clean()"
            >
              C
            </Button>
            <Button type="button" value="/" onclick="getData(this)">
              /
            </Button>
            <Button type="button" value="*" onclick="getData(this)">
              *
            </Button>
            <Button type="button" value="7" onclick="getData(this)">
              7
            </Button>
            <Button type="button" value="8" onclick="getData(this)">
              8
            </Button>
            <Button type="button" value="9" onclick="getData(this)">
              9
            </Button>
            <Button type="button" value="-" onclick="getData(this)">
              -
            </Button>
            <Button type="button" value="4" onclick="getData(this)">
              4
            </Button>
            <Button type="button" value="5" onclick="getData(this)">
              5
            </Button>
            <Button
              type="button"
              value="6"
              onclick={(event) => console.log(event)}
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
            <Button type="button" value="1" onclick="getData(this)">
              1
            </Button>
            <Button type="button" value="2" onclick="getData(this)">
              2
            </Button>
            <Button type="button" value="3" onclick="getData(this)">
              3
            </Button>
            <Button class="btnlg" type="button" value="=" onclick="calculate()">
              =
            </Button>
            <Button type="button" value="0" onclick="getData(this)">
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
