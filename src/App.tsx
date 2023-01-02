import Button from "./components/shared/Button";
import InputText from "./components/shared/InputText";
import Textarea from "./components/shared/Textarea";

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
      <div className="m-16">
        <InputText
          label="name"
          error={{ isError: true, message: "Can’t be empty" }}
        />
      </div>
      <div className="m-16">
        <Textarea label="your message" />
      </div>
    </div>
  );
}

export default App;
