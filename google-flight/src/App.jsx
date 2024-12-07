import { Container } from "@mui/material";
import DrawerApp from "./Components/DrawerApp";
import Header from "./Components/Header";
import FlightInput from "./Components/FlightInput";
import FlightCard from "./Components/FlightCard";
import Loading from "./Components/Loading";

function App() {


  return (
    <>
      <Header />
      <DrawerApp />
      <Container maxWidth="lg" >
        <FlightInput />
        <FlightCard />
        <Loading />
      </Container>
    </>
  )
}

export default App;
