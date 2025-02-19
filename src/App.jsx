import { useTheme } from "./context/ThemeContext";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToogle";

const App = () => {
  const { state } = useTheme();

  return (
    <div className={state.isDark ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">React Hooks & Context API</h1>
        <ThemeToggle />
        <Counter />
      </div>
    </div>
  );
};

export default App;
