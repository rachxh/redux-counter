import { useSelector, useDispatch } from "react-redux";
import { selectCount } from './feature/CounterSlice'
import { increment } from './feature/CounterSlice'
import Button from "./component/Button";
import Circle from "./component/Circle";
import './App.css';

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <Circle count={count} />
      <Button> Decrease 5</Button>
      <Button> Decrease 1</Button>
      <Button> Reset</Button>
      <Button onClick={() => dispatch(increment())}> Increase 1</Button>
      <Button> Increase 5</Button>
      {/* <button onClick={() => dispatch(increment())}>+1</button> */}
    </div>
  );
}

export default App;


