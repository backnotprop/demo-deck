import React, { Component } from "react";
import styled, { css } from "styled-components";

import cursor from "../../assets/cursor.png";

const Wrapper = styled.div`
  flex: 12;
  display: flex;
  flex-direction: column;
  background: white;

  h1 {
    padding: 10px;
    color: dodgerblue;
  }
`;

const AcceptButt = styled.div`
  /* float: right; */

  width: 65px;
  height: 40px;
  margin-right: 40px;
  border-radius: 10px;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  ${props =>
    props.red &&
    css`
      background: red;
      float: right;
    `};
  ${props =>
    props.green &&
    css`
      background: green;
      float: right;
    `};
`;

class Notifications extends Component {
  render() {
    let { patAccept, docSent, sendRequest } = this.props;
    console.log(patAccept, docSent);
    let showQuestion = !patAccept && docSent;
    docSent = { docSent };
    return (
      <Wrapper>
        {showQuestion && (
          <span>
            <h1>
              Dr. B Vo (address:$*GDMB241HK766443HGFJ...) has requested a
              profile review
            </h1>
            <AcceptButt green onClick={() => sendRequest("patient")}>
              Yes
            </AcceptButt>
            <AcceptButt red> No </AcceptButt>
          </span>
        )}
      </Wrapper>
    );
  }
}

export default Notifications;
