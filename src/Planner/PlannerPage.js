import React, { Component } from "react";
import Planner from "./containers/Planner";
import { Row, Col, Button } from "reactstrap";
import plan from "./img/plan@1x.svg";

class PlannerPage extends Component {
  constructor() {
    super();
    this.state = {
      isNewPlan: null
    };
    this.handleButtons = this.handleButtons.bind(this);
  }

  handleButtons(e) {
    if (e.target.id === "newPlan") {
      this.setState({ isNewPlan: true });
    } else if (e.target.id === "editPlan") {
      this.setState({ isNewPlan: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <section className="plannerLanding">
          <Row className="landing">
            <Col sm="12" md={{ size: 5, offset: 1 }}>
              <h1>Start Now</h1>
              <p>Pick your location and prepare your trip with simple steps.</p>
              <form>
                <Button
                  color="primary"
                  key="newPlan"
                  id="newPlan"
                  onClick={this.handleButtons}
                >
                  Create New
                </Button>
                <Button
                  color="primary"
                  outline
                  key="editPlan"
                  id="editPlan"
                  onClick={this.handleButtons}
                >
                  Edit Plan
                </Button>
              </form>
            </Col>
            <Col sm="12" md={{ size: 5 }}>
              <img src={plan} alt="Plan your trip" />
            </Col>
          </Row>
        </section>
        <section>{this.state.isNewPlan && <Planner />}</section>
      </React.Fragment>
    );
  }
}

export default PlannerPage;
