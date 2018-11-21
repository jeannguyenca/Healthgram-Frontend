import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";
import ChartContainer from "./ChartContainer";
import MapHandle from "./MapHandle";
// import AirQuality from "./AirQuality";
import AirQualityBr from "./AirQualityBr";
import Clinics from "../components/Clinics";
// import AnimatedMap from "./components/SimpleMap";
// import Weather from "./Weather";

// import AutoSuggest from "./components/AutoSuggest";

class Planner extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      value: "",
      showData: false
    };
    this.inputRef = React.createRef();

    // this.onChangeText = this.onChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: this.inputRef.current.value, showData: true });
  };

  render() {
    return (
      <div className="container-fluid planner">
        <Row className="mapContainer" id="map">
          {/* Map component */}
          <MapHandle country={this.state.value} />
          <form onSubmit={this.handleSubmit}>
            <strong>Enter a location</strong>
            <input
              ref={this.inputRef}
              type="text"
              onChange={this.onChangeText}
              placeholder="Enter a country"
            />
            <Button color="primary" key="search">
              Submit
            </Button>
          </form>
        </Row>
        <Container>
          {/* Chart component */}
          {this.state.showData && (
            <ChartContainer
              show={this.state.showData}
              country={this.state.value}
            />
          )}
          <Row className="airContainter">
            {/* Air Quality */}
            {this.state.showData && (
              // <AirQuality
              //   show={this.state.showData}
              //   country={this.state.value}
              // />
              <AirQualityBr
                show={this.state.showData}
                country={this.state.value}
              />
            )}
            {/* Weather component */}
          </Row>
          <Row className="clinicListContainer">
            {this.state.showData && <Clinics />}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Planner;
