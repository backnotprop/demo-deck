import React, { Component } from "react";
import styled from "styled-components";

import Screen from "./screen";

const Wrapper = styled.div`
  background-color: grey;
  flex: 3.5;
`;
const PhoneCase = styled.div`
  display: block;
  border-radius: 22px;
  width: 67%;
  margin-left: 16%;
  margin-top: 5%;
  height: 80%;
  background: #0c0c0c;
  box-shadow: inset 0px 1px 0px rgba(255, 255, 255 0.5);
  -webkit-transform: rotate3d(0, 0, 0, 0);

  &:after {
    content: "";
    display: block;
    width: 0px;
    height: 0px;
    left: 0px;
    position: absolute;
  }
`;

const Speaker = styled.div`
  display: block;
  margin-top: 30px;
  position: absolute;
  left: 50%;
  margin-left: -35px;
  width: 70px;
  height: 10px;
  border-radius: 50px;
  background: #151515;
  box-shadow: inset 0px 1px 2px #000, 0px 1px 0px rgba(255, 255, 255, 0.1);
`;

class Sidebar extends Component {
  render() {
    let { data, sendRequest } = this.props;
    let { currentView, patientNots, patAccept, docSent } = data;

    return (
      <Wrapper>
        <PhoneCase>
          <Speaker />
          <Screen
            view={currentView}
            patientNots={patientNots}
            sendRequest={sendRequest}
            patAccept={patAccept}
            docSent={docSent}
          />
        </PhoneCase>
      </Wrapper>
    );
  }
}

export default Sidebar;
