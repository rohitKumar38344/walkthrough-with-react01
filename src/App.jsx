import { Button } from "./Button";
import { Person } from "./Person";
import { Header } from "./Header";
import { List } from "./List";

function App() {
  return (
    <div>
      <Person name={"rk"} age={23} />
      <Button
        text={"react"}
        onClick={function test() {
          alert("Button clicked");
        }}
      />
      <Header title={"Header is here"} />
      <List items={["eat", "sleep", "code", "repeat"]} />
    </div>
  );
}

export default App;
