import React, { Component } from "react";
import styled from "styled-components";

import doctor from "../../assets/doctor.png";
import patient from "../../assets/patient.png";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Workzone from "../Workzone";

const WrapperHead = styled.div`
  display: flex;
  height: 6vh;
`;
const WrapperBody = styled.div`
  display: flex;
  height: 94vh;
`;

const DoctorSelect = styled.img`
  position: absolute;
  width: 6%;
  height: 9%;
  left: 19%;
  top: 87%;
  cursor: pointer;
`;

const PatientSelect = styled.img`
  position: absolute;
  width: 6%;
  height: 9%;
  left: 9%;
  top: 87%;
  cursor: pointer;
`;

const P_Note = styled.p`
  font-size: 1.35em;
  font-weight: bold;
  position: absolute;
  left: 36%;
  top: 90%;
  color: white;
`;
const P_Note2 = styled.p`
  font-size: 1.35em;
  font-weight: bold;
  position: absolute;
  left: 36%;
  top: 94%;
  color: white;
`;

class App extends Component {
  state = {
    currentView: "patient",
    patientNots: 0,
    doctorNots: 0,
    docSent: false,
    patAccept: false,
    doctorSending: false,
    patientSending: false,
    reset: false,
    note: "Go to doctor profile, and click 'send new request'",
    note2: ""
  };

  sendRequest(type) {
    if (type == "patient") {
      this.setState({
        ...this.state,
        doctorNots: 1,
        patAccept: true,
        patientSending: true,
        patientNots: 0,
        doctorNots: 1,
        reset: false,
        note: "Wait for the new processing",
        note2: "Afterwards go and see that the doctor has her profile"
      });
    } else {
      this.setState({
        ...this.state,
        patientNots: 1,
        doctorSending: true,
        docSent: true,
        reset: false,
        note: `Wait for the processing to finish (all green)`,
        note2: `then go to the user profile, click notifications, and accept`
      });
    }
  }

  // patientAccept() {
  //   this.setState({ ...this.state, doctorNots: 1, patAccept: true });
  // }

  setView(to) {
    this.setState(
      {
        ...this.state,
        reset: true,
        doctorSending: false,
        patientSending: false,
        currentView: "wait"
      },
      () => {
        setTimeout(
          () => {
            this.setState({
              ...this.state,
              currentView: to
            });
          },
          600,
          this
        );
      }
    );
  }

  render() {
    return (
      <div>
        <WrapperHead>
          <Header />
        </WrapperHead>
        <WrapperBody>
          <Sidebar
            data={this.state}
            sendRequest={this.sendRequest.bind(this)}
          />
          <PatientSelect
            onClick={() => this.setView("patient")}
            src={patient}
            role="presentation"
          />
          <DoctorSelect
            onClick={() => this.setView("doctor")}
            src={doctor}
            role="presentation"
          />
          <Workzone
            doctorSending={this.state.doctorSending}
            patientSending={this.state.patientSending}
            reset={this.state.reset}
          />
          <P_Note>{this.state.note}</P_Note>
          <P_Note2>{this.state.note2}</P_Note2>
        </WrapperBody>
      </div>
    );
  }
}

export default App;
