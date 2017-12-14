import styled, { css } from "styled-components";
import colors from "./colors";

export default styled.div`
  width: 100px;
  height: 100px;
  background: #777;
  outline: 4px solid ${props => colors[props.type]};
  position: absolute;
  ${props =>
    props.pos == "top" &&
    css`
      top: 40px;
      right: calc(50% - 50px);
    `};
  ${props =>
    props.pos == "middleTopRight" &&
    css`
      top: 260px;
      right: calc(20% - 50px);
    `};
  ${props =>
    props.pos == "middleTopLeft" &&
    css`
      top: 260px;
      right: calc(80% - 50px);
    `};
  ${props =>
    props.pos == "middleTop" &&
    css`
      top: 260px;
      right: calc(50% - 50px);
    `};
  ${props =>
    props.pos == "middleMiddleRight" &&
    css`
      top: 500px;
      right: calc(20% - 50px);
    `};
  ${props =>
    props.pos == "middleMiddleLeft" &&
    css`
      top: 500px;
      right: calc(80% - 50px);
    `};
  ${props =>
    props.pos == "middleMiddle" &&
    css`
      top: 500px;
      right: calc(50% - 50px);
    `};
  ${props =>
    props.pos == "middleBottomRight" &&
    css`
      top: 740px;
      right: calc(20% - 50px);
    `};
  ${props =>
    props.pos == "middleBottomLeft" &&
    css`
      top: 740px;
      right: calc(80% - 50px);
    `};
  ${props =>
    props.pos == "middleBottom" &&
    css`
      top: 740px;
      right: calc(50% - 50px);
    `};
  ${props =>
    props.pos == "bottom" &&
    css`
      top: 980px;
      right: calc(50% - 50px);
    `};
`;
