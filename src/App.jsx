import User from "./components/User";

function App() {
  const seatNumbers =[1, 2, 3,4]
  return (
    <>
      <User 
      name="Mungai!" 
      message="Welcome home" 
      emoji="👋"
      seatNumbers={seatNumbers}
      />
  
    </>
  );
}

export default App;
