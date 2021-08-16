import ChatView from "./components/ChatView";

function App() {
  return (
    <div className="h-screen grid grid-cols gap-2 place-content-center text-center bg-gray-100 p-3">
      <h1>Welcome to DinnerPicker</h1>
      <ChatView />
    </div>
  );
}

export default App;
