import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./components/style.css";
import { useState } from "react";

export default function App() {
  const [total, setTotal] = useState("");

  const DigitKey = (e) => {
    setTotal(total.concat(e.target.name));
  };
  const MinusPlus = () => {
    total.charAt(0) === "-"
      ? setTotal(Math.abs(total.substring(1)))
      : setTotal("-" + total);
  };

  const ResetKey = () => {
    setTotal("0");
  };
  //   const OperatorKey = () => {
  //     setTotal(total.slice(0, -1));
  //   };
  const CalcKey = () => {
    try {
      setTotal(eval(total).toString());
    } catch (err) {
      setTotal(" 0 ", err);
    }
  };
  const AuxKey = () => {
    setTotal(total / 100);
  };

  return (
    <div className="grid-container">
      <h1>Calculator</h1>

      <Container className="container">
        <Row>
          <Col>
            <div className="input"> {total}</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={ResetKey} className="grey-button">
              AC
            </Button>
            <Button onClick={MinusPlus} name="±" className="grey-button">
              +/-
            </Button>
            <Button onClick={AuxKey} name="%" className="grey-button">
              %
            </Button>
            <Button name="/" onClick={DigitKey} className="orange-button">
              &divide;
            </Button>
          </Col>
          <Col>
            <Button name="7" onClick={DigitKey}>
              7
            </Button>
            <Button name="8" onClick={DigitKey}>
              8
            </Button>
            <Button name="9" onClick={DigitKey}>
              9
            </Button>
            <Button name="*" onClick={DigitKey} className="orange-button">
              &times;
            </Button>
          </Col>
          <Col>
            <Button name="4" onClick={DigitKey}>
              4
            </Button>
            <Button name="5" onClick={DigitKey}>
              5
            </Button>
            <Button name="6" onClick={DigitKey}>
              6
            </Button>
            <Button name="-" onClick={DigitKey} className="orange-button">
              &ndash;
            </Button>
          </Col>
          <Col>
            <Button name="1" onClick={DigitKey}>
              1
            </Button>
            <Button name="2" onClick={DigitKey}>
              2
            </Button>
            <Button name="3" onClick={DigitKey}>
              3
            </Button>
            <Button name="+" onClick={DigitKey} className="orange-button">
              +
            </Button>
          </Col>
          <Col>
            <Button name="0" onClick={DigitKey} className="zero">
              0
            </Button>
            <Button name="." onClick={DigitKey}>
              .
            </Button>
            <Button name="=" onClick={CalcKey} className="orange-button">
              =
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
