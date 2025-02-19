import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slice/counterSlice";
import { useTheme } from "../context/ThemeContext";


const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const { state } = useTheme();

  const style = {
    backgroundColor : state.isDark ? "black": "White" ,
    padding : "20px",
    borderRadius : "8px",
    color : state.isDark ? "white" : "black"
  }

  return (
    <div className="flex flex-col justify-content-center items-center mt-4" style={style}>
      <h2 className="text-2xl">Counter: {count}</h2>
      <div className="mt-2 flex gap-4">
        <button
          className="p-2 bg-green-500 text-white rounded hover:bg-green-700"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="p-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;