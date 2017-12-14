import React, { Component } from "react";
import styled from "styled-components";

import Screen from "./screen";

const Wrapper = styled.div`
  background-color: grey;
  flex: 3.5;
`;

class Sidebar extends Component {
  render() {
    let { data, sendRequest } = this.props;
    let { currentView, patientNots, patAccept, docSent } = data;

    return (
      <Wrapper>
        <div id="phone">
          <div id="speaker" />
          <Screen
            view={currentView}
            patientNots={patientNots}
            sendRequest={sendRequest}
            patAccept={patAccept}
            docSent={docSent}
          />
        </div>
      </Wrapper>
    );
  }
}

export default Sidebar;
