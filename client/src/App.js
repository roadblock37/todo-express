import "./App.css";
import Todo from "./components/todo";
import Header from "./components/header";
import TodoContainer from "./components/todoContainer";

function App() {
  return (
    <main>
      <Header />
      <section>
        <TodoContainer/>
      </section>
    </main>
  );
}

export default App;
