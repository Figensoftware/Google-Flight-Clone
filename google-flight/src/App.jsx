import { Container } from "@mui/material";
import DrawerApp from "./Components/DrawerApp";
import Header from "./Components/Header";
import FlightInput from "./Components/FlightInput";
import Grid from '@mui/material/Grid2'

function App() {


  return (
    <>
      <Header />
      <DrawerApp />
      <Container maxWidth="lg" >
        <FlightInput />
        <Grid container >
          <Grid size={{ xs: 10, md: 10, lg: 10 }}>
            Item

          </Grid>
          <Grid size={{ xs: 2, md: 2, lg: 2 }}>
            Item
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App;
