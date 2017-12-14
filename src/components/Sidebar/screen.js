import React, { Component } from "react";
import styled, { css } from "styled-components";

import cursor from "../../assets/cursor.png";

import hamburger from "../../assets/hamburger.png";
import p_icon from "../../assets/profile_icon.png";
import cal_icon from "../../assets/calander.png";
import rx_icon from "../../assets/rx.png";
import inf_icon from "../../assets/pad.png";
import prof_icon from "../../assets/profile_item.png";

import Profile from "./Profile";
import Notifications from "./Notifications";

const Wrapper = styled.div`
  display: block;
  background: lightgrey;
  width: 460px;
  height: 820px;
  margin: 70px 20px;
  border-radius: 3px;
  color: #aaa;
  position: absolute;
  display: flex;
  flex-direction: column;
  font-family: "Ubuntu", sans-serif;
  cursor: url(${cursor}), auto;
`;

const Header = styled.div`
  flex: 2;
  background: #434040;
  display: flex;
  flex-direction: column;
`;

const InnerHeaderTop = styled.div`
  font-family: "Exo 2", sans-serif;
  display: flex;
  flex: 9;
`;

const Burger = styled.img`
  flex: 0.5;
  padding: 30px;
  width: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 0px;
  margin-left: -45px;
  padding-top: 18px;
  color: white;
  flex: 8;
  text-align: center;
`;

const InnerHeaderBtm = styled.div`
  flex: 3;

  ul {
    display: flex;
    align-items: stretch; /* Default */
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  ul > li {
    display: block;
    flex: 0 1 auto; /* Default */
    list-style-type: none;
    font-size: 18px;
    color: white;
    padding: 5px;
  }
`;

const Intro = styled.div`
  flex: 3;
  background: white;
  display: flex;
  border-bottom: 1px solid black;
`;

const InnerIntroOne = styled.div`
  flex: 3;
`;

const PIcon = styled.img`
  width: 86%;
  margin-left: 7%;
  margin-top: 25px;
`;

const InnerIntroTwo = styled.div`
  flex: 3.5;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: black;
    margin-bottom: 0;
  }
  h2 {
    margin-top: 0;
    color: grey;
    font-size: 28px;
    font-weight: 400;
  }
`;

const InnerIntroThree = styled.div`
  flex: 5;
`;

const CalIcon = styled.img`
  margin-top: 110px;
  margin-right: 20px;
`;
const RxIcon = styled.img`
  margin-top: 110px;
  margin-right: 20px;
`;
const InfoIcon = styled.img`
  margin-top: 110px;
`;

const Body = styled.div`
  flex: 9;
  background: white;
`;

const ProfileContainer = styled.div`
  background: white;
  border: 1px solid black;
  width: 86%;
  height: 80%;
  margin: 7%;
  ul {
    padding: 0px;
  }
  li {
    list-style-type: none;
    margin: 5px;
    padding: 0px;
  }
  img {
    display: inline-block;
    vertical-align: middle;
  }
`;

const Body_P = styled.p`
  color: black;
  font-size: 16px;
  margin: 10px;
  margin-top: 20px;
`;

const P = styled.p`
  display: inline-block;
  font-size: 18px;
  margin-left: 15px;
  color: black;
  vertical-align: middle;
  font-weight: bold;
  color: mediumblue;
  ${props =>
    props.green &&
    css`
      font-size: 20px;
      color: green;
    `};
`;

let NotNumber = styled.div`
  color: dodgerblue;
  float: right;
  margin-left: 10px;
`;

const ProfileIcon = styled.img``;

class Screen extends Component {
  state = {
    openTab: "profile"
  };

  open(to) {
    this.setState({ ...this.state, openTab: to });
  }

  render() {
    let { view, patientNots, sendRequest, patAccept, docSent } = this.props;
    let { openTab } = this.state;

    return view !== "wait" ? (
      <Wrapper>
        <Header>
          <InnerHeaderTop>
            <Burger src={hamburger} role="presentation" />
            <Title>HealthTree</Title>
          </InnerHeaderTop>
          <InnerHeaderBtm>
            <ul>
              <li>Overview</li>
              <li onClick={() => this.open("profile")}>Profiles</li>
              <li onClick={() => this.open("notifications")}>
                Notifications{" "}
                <NotNumber>
                  {view == "patient" && patientNots !== 0 ? patientNots : null}
                </NotNumber>
              </li>
              <li>Blockchain</li>
            </ul>
          </InnerHeaderBtm>
        </Header>
        {openTab == "profile" ? (
          <Profile
            type={view}
            patAccept={patAccept}
            sendRequest={sendRequest}
          />
        ) : (
          <Notifications
            type={view}
            patAccept={patAccept}
            docSent={docSent}
            sendRequest={sendRequest}
          />
        )}
      </Wrapper>
    ) : (
      <Wrapper />
    );
  }
}

export default Screen;
