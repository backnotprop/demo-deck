import React, { Component } from "react";
import styled from "styled-components";

import htree from "../../assets/htree.png";
import ds from "../../assets/ds_logo.png";

const Wrapper = styled.div`
  flex: 1;
  /* background: #272727; */
  background: black;
  display: flex;
`;

const Hwrap = styled.li`
  flex: 14;
  text-align: right;
`;
const Dwrap = styled.li`
  flex: 1;
  text-align: left;
`;
const Htree = styled.img`
  height: 50%;
  width: 14%;
  margin-right: 20px;
  margin-top: 15px;
`;

const Ds = styled.img`
  height: 60%;
  width: 50%;
  margin-left: 20px;
  margin-top: 15px;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Dwrap>
          <Ds src={ds} role="presentation" />
        </Dwrap>
        <Hwrap>
          <Htree src={htree} role="presentation" />
        </Hwrap>
      </Wrapper>
    );
  }
}

export default Header;
