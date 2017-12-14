import React, { Component } from "react";
import styled, { css } from "styled-components";

import EDGE_MAP from "./edgeMap";
import NODE_MAP from "./nodeMap";
import colors from "./colors";
import STEPS from "./steps";

import Box from "./box";
import Arrow from "./arrow";
import CheckMark from "./checkMark";

const Wrapper = styled.div`
  flex: 6.5;
  position: relative;
  background: ${colors["mainBack"]};
  margin-top: 50px;
`;

const SVG = styled.svg`
  top: 0;
  left: 0;
  position: relative;
`;

// first iteration will have an orange color
// youll pass a prop to determine highlight color and all that.
class Line extends Component {
  render() {
    let lit = STEPS[this.props.step].highlightedEdges.findIndex(val => {
      return EDGE_MAP[val] == this.props.id;
    });

    let final = this.props.step == "final";

    return (
      <line
        x1={this.props.x1}
        y1={this.props.y1}
        x2={this.props.x2}
        y2={this.props.y2}
        strokeWidth={4}
        stroke={
          lit != -1
            ? colors[final ? "litUp" : this.props.type]
            : colors["inactive"]
        }
        id={this.props.id}
      />
    );
  }
}

class Node extends Component {
  render() {
    let lit =
      STEPS[this.props.step].highlightedNodes.findIndex(val => {
        return NODE_MAP[val] == this.props.pos;
      }) !== -1;
    let verified =
      STEPS[this.props.step].verifiedNodes.findIndex(val => {
        return NODE_MAP[val] == this.props.pos;
      }) !== -1;

    let final =
      this.props.step == "final" &&
      this.props.id !== 0 &&
      this.props.id !== NODE_MAP.length - 1;

    let gear =
      this.props.pos !== "top" &&
      this.props.pos !== "bottom" &&
      lit &&
      !verified;
    let check =
      this.props.pos !== "top" && this.props.pos !== "bottom" && verified;

    return (
      <Box
        lit={lit}
        pos={this.props.pos}
        type={lit ? (final ? "litUp" : this.props.type) : "inactive"}
      >
        {gear && (
          <div className="gears-container">
            <div className="gear-rotate" />
            <div className="gear-rotate-left" />
          </div>
        )}
        {check && <CheckMark />}
      </Box>
    );
  }
}

class Workzone extends Component {
  state = {
    step: "zero",
    userIteraction: "null"
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      this.setState({
        step: "zero",
        userIteraction: "null"
      });
    } else if (nextProps.doctorSending) {
      this.sendFromDoctor();
    } else if (nextProps.patientSending) {
      this.sendFromPatient();
    } else {
    }

    console.log(nextProps, this.state);
  }

  sendFromPatient() {
    setTimeout(() => {
      this.setState({ ...this.state, step: "zero", userIteraction: "patient" });
    }, 0);
    setTimeout(() => {
      this.setState({ ...this.state, step: "one" });
    }, 1000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "two" });
    }, 2000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "three" });
    }, 3000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "four" });
    }, 4000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "five" });
    }, 5000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "six" });
    }, 6000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "seven" });
    }, 7000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "final" });
    }, 8000);
  }

  sendFromDoctor() {
    setTimeout(() => {
      this.setState({
        ...this.state,
        step: "r_zero",
        userIteraction: "doctor"
      });
    }, 0);
    setTimeout(() => {
      this.setState({ ...this.state, step: "r_one" });
    }, 1000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "r_two" });
    }, 2000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "r_three" });
    }, 3000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "r_four" });
    }, 4000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "r_five" });
    }, 5000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "r_six" });
    }, 6000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "r_seven" });
    }, 7000);
    setTimeout(() => {
      this.setState({ ...this.state, step: "final" });
    }, 8000);
  }

  render() {
    let { step, userIteraction } = this.state;

    return (
      <Wrapper>
        <SVG width="100%" height="100%">
          {/* <Line step={step} x1="50%" y1="160" x2="50%" y2="310" id="top_line" /> */}
          <Line
            step={step}
            x1="20%"
            y1="310"
            x2="50%"
            y2="310"
            id="top_left_conn_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="50%"
            y1="310"
            x2="80%"
            y2="310"
            id="top_right_conn_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="80%"
            y1="310"
            x2="80%"
            y2="550"
            id="middle_right_down_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="20%"
            y1="310"
            x2="20%"
            y2="550"
            id="middle_left_down_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="50%"
            y1="310"
            x2="50%"
            y2="550"
            id="middle_middle_down_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="50%"
            y1="550"
            x2="80%"
            y2="550"
            id="middle_right_conn_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="20%"
            y1="550"
            x2="50%"
            y2="550"
            id="middle_left_conn_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="80%"
            y1="550"
            x2="80%"
            y2="790"
            id="bottom_right_down_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="20%"
            y1="550"
            x2="20%"
            y2="790"
            id="bottom_left_down_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="50%"
            y1="550"
            x2="50%"
            y2="790"
            id="bottom_middle_down_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="50%"
            y1="790"
            x2="80%"
            y2="790"
            id="bottom_right_conn_line"
            type={userIteraction}
          />
          <Line
            step={step}
            x1="20%"
            y1="790"
            x2="50%"
            y2="790"
            id="bottom_left_conn_line"
            type={userIteraction}
          />
        </SVG>
        {userIteraction == "patient" && <Arrow first down />}
        {userIteraction == "patient" && <Arrow second down />}
        {userIteraction == "patient" &&
          step == "final" && <Arrow first r_down />}
        {userIteraction == "patient" &&
          step == "final" && <Arrow second r_down />}
        {userIteraction == "doctor" && <Arrow first up />}
        {userIteraction == "doctor" && <Arrow second up />}
        {userIteraction == "doctor" && step == "final" && <Arrow first r_up />}
        {userIteraction == "doctor" && step == "final" && <Arrow second r_up />}

        {NODE_MAP.map((pos, i) => (
          <Node
            key={i.toString()}
            id={i}
            step={step}
            pos={pos}
            type={
              i == 0
                ? "patient"
                : i == NODE_MAP.length - 1 ? "doctor" : userIteraction
            }
          />
        ))}
      </Wrapper>
    );
  }
}

export default Workzone;
