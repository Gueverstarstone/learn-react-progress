import User from "./components/User";

function App() {
  const person ={
    name: 'Mungai',
    message: 'Welcome home',
    emoji: '👋',
    seatNumbers: [1,2,3,4]
  }
  return (
    <>
      <User person= {person}/>
    </>
  );
}

export default App;
