import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Suggestions extends Component {


  dataHandle(data){
    return (this.props.info && Object.keys(data.info).map((section) => {
      return data.info[section].length < 4 ? <div key={section}>
          <strong>{section}</strong>
          <ul>
            {data.info[section].map((line, index) => {
              return <li key={index}>{line}</li>;
            })}
          </ul>
        </div> : <div key={section}>
          <strong>{section}</strong> <p>{data.info[section]}</p>
        </div>; 
   }))
 }

  render(){
    return <Row>
        <Col xs={{ size: 10, offset: 1 }} className="suggestion">
          <div className="left">
            <h1>Be Prepared</h1>
            <img src={this.props.img} alt={this.props.alt} />
          </div>
          <div className="right">{this.dataHandle(this.props.info)}</div>
        </Col>
      </Row>;
  }
}

export default Suggestions;