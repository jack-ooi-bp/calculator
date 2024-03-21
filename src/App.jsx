import { useReducer } from "react";
import "./styles.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSbhBIhD4raxYUdMaEPmk_RjWSLyUq3PM",
  authDomain: "personalwebsite-36ca2.firebaseapp.com",
  projectId: "personalwebsite-36ca2",
  storageBucket: "personalwebsite-36ca2.appspot.com",
  messagingSenderId: "391405365028",
  appId: "1:391405365028:web:c759fd430c7368c97535b1",
  measurementId: "G-K0DQM1DTDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  CHOOSE_OPERATION: "choose-operator",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  // eslint-disable-next-line default-case
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }

      if (payload.digit === "0" && state.currentOperand === "0") {
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

    // eslint-disable-next-line no-fallthrough
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }

      if (state.currentOperand == null) return state;
      if (state.currentOperand.lenght === 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    // eslint-disable-next-line no-fallthrough
    case ACTIONS.EVALUATE:
      if (
        state.currentOperand == null ||
        state.previousOperand == null ||
        state.operation == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  // eslint-disable-next-line default-case
  switch (operation) {
    case "+":
      computation = prev + current;
      break;

    case "-":
      computation = prev + current;
      break;

    case "*":
      computation = prev * current;
      break;

    case "/":
      computation = prev / current;
      break;
  }

  return computation.toString();
}

const integerFormatter = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
});

function formantoperand(operand) {
  if (operand == null) return;
  const [integer, decimal] = operand.split(".");
  if (decimal == null) return integerFormatter.format(integer);
  return `${integerFormatter.format(integer)}.${decimal}`;
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="Flexbox">
      <Header />
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {formantoperand(previousOperand)} {operation}
          </div>
          <div className="current-operand">
            {formantoperand(currentOperand)}
          </div>
        </div>
        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.CLEAR })}
        >
          AC
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
          DEL
        </button>
        <OperationButton operation={"/"} dispatch={dispatch} />
        <DigitButton digit={"1"} dispatch={dispatch} />
        <DigitButton digit={"2"} dispatch={dispatch} />
        <DigitButton digit={"3"} dispatch={dispatch} />
        <OperationButton operation={"*"} dispatch={dispatch} />
        <DigitButton digit={"4"} dispatch={dispatch} />
        <DigitButton digit={"5"} dispatch={dispatch} />
        <DigitButton digit={"6"} dispatch={dispatch} />
        <OperationButton operation={"+"} dispatch={dispatch} />
        <DigitButton digit={"7"} dispatch={dispatch} />
        <DigitButton digit={"8"} dispatch={dispatch} />
        <DigitButton digit={"9"} dispatch={dispatch} />
        <OperationButton operation={"-"} dispatch={dispatch} />
        <DigitButton digit={"."} dispatch={dispatch} />
        <DigitButton digit={"0"} dispatch={dispatch} />
        <button
          className="span-two"
          onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
        >
          =
        </button>
      </div>
      <Footer className="Footer" />
    </div>
  );
}

export default App;
