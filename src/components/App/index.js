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
  width: 140px;
  height: 140px;
  left: 18%;
  top: 85%;
  cursor: pointer;
`;
const PatientSelect = styled.img`
  position: absolute;
  width: 140px;
  height: 140px;
  left: 8%;
  top: 85%;
  cursor: pointer;
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
    reset: false
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
        reset: false
      });
    } else {
      this.setState({
        ...this.state,
        patientNots: 1,
        doctorSending: true,
        docSent: true,
        reset: false
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
        </WrapperBody>
      </div>
    );
  }
}

export default App;
