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
  flex: 12;
  text-align: right;
`;
const Dwrap = styled.li`
  flex: 1;
  margin-top: 25px;
  text-align: left;
`;
const Htree = styled.img`
  height: 40%;
  margin-top: 25px;
  width: 250px;
  margin-right: 20px;
`;

const Ds = styled.img`
  height: 60%;
  width: 80px;
  margin-left: 20px;
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
