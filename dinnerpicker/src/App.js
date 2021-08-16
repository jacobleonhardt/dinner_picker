import ChatView from "./components/ChatView";

function App() {
  return (
    <div className="grid grid-cols gap-2 place-content-center bg-gray-100 p-3">
      <h1>Hello from DinnerPicker!</h1>
      <ChatView />
    </div>
  );
}

export default App;
