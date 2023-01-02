import Button from "./components/shared/Button";

function App() {
  return (
    <div className="bg-darkGrey text-h1 text-peach w-screen h-screen">
      Hello, World!
      <div className="m-16">
        <Button>LEARN MORE</Button>
      </div>
      <div className="m-16">
        <Button isDark>LEARN MORE</Button>
      </div>
    </div>
  );
}

export default App;
