import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import CityWeather from "../CityWeather";
// props received as a parameter
const CityInput = ({city,setCity,fetchCityWeather,cityWeather}) => {
  
  const [error, setError] = React.useState("");
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };
  // console.log("city is",city);
  const handleSubmit = () =>{
    if(!city){
        setError("City Field Is Empty");
    }else{
      setError("");
      fetchCityWeather();
    }
  }
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control 
          value={city}
          type="text" 
          placeholder="Enter city" 
          onChange={handleInputChange} />
          <p className="text-danger">{error}</p>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>Submit</Button>
      </Form>
      {/* <CityWeather cityWeather={cityWeather}/> */}
      {cityWeather!=undefined?<div><CityWeather cityWeather={cityWeather}/></div>:null}
    </Container>
     
  );
};
export default CityInput;