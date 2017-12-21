import styled, { css } from "styled-components";
import colors from "./colors";

export default styled.div`
  width: 10%;
  height: 10%;
  background: #777;
  outline: 4px solid ${props => colors[props.type]};
  position: absolute;
  ${props =>
    props.pos == "top" &&
    css`
      top: 0%;
      right: calc(50% - 5%);
    `};
  ${props =>
    props.pos == "middleTopRight" &&
    css`
      top: 20%;
      right: calc(20% - 5%);
    `};
  ${props =>
    props.pos == "middleTopLeft" &&
    css`
      top: 20%;
      right: calc(80% - 5%);
    `};
  ${props =>
    props.pos == "middleTop" &&
    css`
      top: 20%;
      right: calc(50% - 5%);
    `};
  ${props =>
    props.pos == "middleMiddleRight" &&
    css`
      top: 40%;
      right: calc(20% - 5%);
    `};
  ${props =>
    props.pos == "middleMiddleLeft" &&
    css`
      top: 40%;
      right: calc(80% - 5%);
    `};
  ${props =>
    props.pos == "middleMiddle" &&
    css`
      top: 40%;
      right: calc(50% - 5%);
    `};
  ${props =>
    props.pos == "middleBottomRight" &&
    css`
      top: 60%;
      right: calc(20% - 5%);
    `};
  ${props =>
    props.pos == "middleBottomLeft" &&
    css`
      top: 60%;
      right: calc(80% - 5%);
    `};
  ${props =>
    props.pos == "middleBottom" &&
    css`
      top: 60%;
      right: calc(50% - 5%);
    `};
  ${props =>
    props.pos == "bottom" &&
    css`
      top: 80%;
      right: calc(50% - 5%);
    `};
`;
