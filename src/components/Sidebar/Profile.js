import React, { Component } from "react";
import styled, { css } from "styled-components";

import cursor from "../../assets/cursor.png";

import p_icon from "../../assets/profile_icon.png";
import d_icon from "../../assets/doctor_icon.png";
import cal_icon from "../../assets/calander.png";
import rx_icon from "../../assets/rx.png";
import inf_icon from "../../assets/pad.png";
import prof_icon from "../../assets/profile_item.png";

const Wrapper = styled.div`
  flex: 12;
  background: red;
  display: flex;
  flex-direction: column;
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
  margin-right: 10px;
  float: right;
`;
const RxIcon = styled.img`
  margin-top: 110px;
  margin-left: 10px;
  margin-right: 10px;
  float: right;
`;
const InfoIcon = styled.img`
  margin-top: 110px;
  margin-left: 10px;
  margin-right: 10px;
  float: right;
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
  font-size: 18px;
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 0px;
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

const ProfileIcon = styled.img``;

class Profile extends Component {
  render() {
    let { sendRequest, patAccept } = this.props;
    let p = this.props.type == "patient";
    let d = this.props.type == "doctor";
    return (
      <Wrapper>
        <Intro>
          <InnerIntroOne>
            {p && <PIcon src={p_icon} role="presentation" />}
            {d && <PIcon src={d_icon} role="presentation" />}
          </InnerIntroOne>
          <InnerIntroTwo>
            <h1>{p ? `Crista lee` : `Dr. B Vo`}</h1>
            <h2>{p ? `Patient` : `Physician`}</h2>
          </InnerIntroTwo>
          <InnerIntroThree>
            <InfoIcon src={inf_icon} role="presentation" />
            {p && <RxIcon src={rx_icon} role="presentation" />}
            <CalIcon src={cal_icon} role="presentation" />
          </InnerIntroThree>
        </Intro>
        <Body>
          <Body_P>{`Most recent ${p ? "profile" : "patient"} activity`}</Body_P>
          <ProfileContainer>
            {p ? (
              <ProfileRows />
            ) : (
              <DoctorRows patAccept={patAccept} sendRequest={sendRequest} />
            )}
          </ProfileContainer>
        </Body>
      </Wrapper>
    );
  }
}

class ProfileRows extends Component {
  render() {
    return (
      <ul>
        <li>
          <ProfileIcon src={prof_icon} role="presentation" />
          <P green>crista-lee/entire-history</P>
        </li>
        <li>
          <ProfileIcon src={prof_icon} role="presentation" />
          <P>crista-lee/oncologist-dr-brown</P>
        </li>
        <li>
          <ProfileIcon src={prof_icon} role="presentation" />
          <P>crista-lee/medications</P>
        </li>
        <li>
          <ProfileIcon src={prof_icon} role="presentation" />
          <P>crista-lee/mother-access</P>
        </li>
        <li>
          <ProfileIcon src={prof_icon} role="presentation" />
          <P>crista-lee/husband</P>
        </li>
      </ul>
    );
  }
}

const Doc_P = styled.p`
  width: 100%;
  text-align: center;
  color: dodgerblue;
  font-weight: bold;
  font-size: 22px;
`;
class DoctorRows extends Component {
  render() {
    return (
      <ul>
        {this.props.patAccept ? (
          <li>
            <ProfileIcon src={prof_icon} role="presentation" />
            <P green>crista-lee/entire-history</P>
          </li>
        ) : (
          <Doc_P onClick={() => this.props.sendRequest("doctor")}>
            Send new request
          </Doc_P>
        )}
      </ul>
    );
  }
}

export default Profile;
