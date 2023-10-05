import './App.css';
import Wrapper from './Components/Wrapper';
import Button from './Components/Button';
import ButtonBox from './Components/ButtonBox';
import Screen from './Components/Screen';

const App = () => {
  return (
    <Wrapper>
      <Screen value="0" />
      <ButtonBox>
        <Button
          className=""
          value="0"
          onClick={() => {
            console.log("Button clicked!");
          }}
        />
      </ButtonBox>
    </Wrapper>
  );
};

export default App;