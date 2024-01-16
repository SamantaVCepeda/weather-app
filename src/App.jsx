import { Container, Typography } from "@mui/material";
import Input from "./Components/Input";



export default function App(){
  return (
    <Container maxWidth="xs" sx={{ mt: 2 }}>
      <Typography variant="h2" align="center" component="h1" gutterBottom>
        Weather-app
      </Typography>
      <Input />
      <Typography
        textAlign="center"
        sx={{ mt: 2, fontSize: "10px" }}
        >
        Powered by:{" "}
        <a
        href="https://www.weatherapi.com/"
        title="Weather API"
        >
        WeatherAPI.com
        </a>
    </Typography>
    </Container>
  )
}
