import "./App.css";
import FunctionComponent from "./components/1.1_myFirstReactComponent/01_FunctionComponent";
import FunctionalComponent from "./components/1.1_myFirstReactComponent/02_FunctionalComponent";
import ClassComponent from "./components/1.1_myFirstReactComponent/03_ClassComponent";

function App() {
  return (
    <div className="flex-col text-center pt-32">
      <h1 className="text-5xl text-white">Hello Earth!</h1>
      <FunctionComponent />
      <h1 className="text-5xl text-white mt-12">Hello Earth!</h1>
      <FunctionalComponent />
      <h1 className="text-5xl text-white mt-12">Hello Earth!</h1>
      <ClassComponent />
    </div>
  );
}

export default App;
