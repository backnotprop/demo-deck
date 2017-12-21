import styled, { css } from "styled-components";
import colors from "./colors";

const first = css`
  -webkit-animation: arrow-movement 2s ease-in-out infinite;
  animation: arrow-movement 2s ease-in-out infinite;
`;

const second = css`
  -webkit-animation: arrow-movement 2s 1s ease-in-out infinite;
  animation: arrow-movement 2s 1s ease-in-out infinite;
`;

const first_r = css`
  -webkit-animation: arrow-movement-r 2s ease-in-out infinite;
  animation: arrow-movement-r 2s ease-in-out infinite;
`;

const second_r = css`
  -webkit-animation: arrow-movement-r 2s 1s ease-in-out infinite;
  animation: arrow-movement-r 2s 1s ease-in-out infinite;
`;

const first_up = css`
  -webkit-animation: arrow-movement-up 2s ease-in-out infinite;
  animation: arrow-movement-up 2s ease-in-out infinite;
`;

const second_up = css`
  -webkit-animation: arrow-movement-up 2s 1s ease-in-out infinite;
  animation: arrow-movement-up 2s 1s ease-in-out infinite;
`;

const r_up = css`
  -webkit-animation: arrow-movement-up-r 2s ease-in-out infinite;
  animation: arrow-movement-up-r 2s ease-in-out infinite;
`;

const r_t_up = css`
  -webkit-animation: arrow-movement-up-r 2s 1s ease-in-out infinite;
  animation: arrow-movement-up-r 2s 1s ease-in-out infinite;
`;

export default styled.div`
  opacity: 0;
  position: absolute;
  left: calc(50% - 1.125em);
  top: ${props =>
    props.down ? `15%` : props.r_up ? `15%` : props.r_down ? `74%` : `74%`};

  ${props => props.first && props.down && `${first}`};
  ${props => props.second && props.down && `${second}`};
  ${props => props.first && props.r_down && `${first_r}`};
  ${props => props.second && props.r_down && `${second_r}`};
  ${props => props.first && props.up && `${first_up}`};
  ${props => props.second && props.up && `${second_up}`};
  ${props => props.first && props.r_up && `${r_up}`};
  ${props => props.second && props.r_up && `${r_t_up}`};

  &:before,
  &:after {
    background: ${props =>
      props.down || props.r_down
        ? `${colors["patient"]}`
        : `${colors["doctor"]}`};
    content: "";
    display: block;
    height: 3px;
    position: absolute;
    top: 0;
    left: 0;
    width: 2.25em;
  }
  ${props =>
    (props.up || props.r_up) &&
    `
  &:before {
    -webkit-transform: rotate(-45deg) translateX(-30%);
    transform: rotate(-45deg) translateX(-30%);
    -webkit-transform-origin: top left;
    transform-origin: top left;
  }

  &:after {
    -webkit-transform: rotate(45deg) translateX(30%);
    transform: rotate(45deg) translateX(30%);
    -webkit-transform-origin: top right;
    transform-origin: top right;
  }`};
  ${props =>
    (props.down || props.r_down) &&
    `
  &:before {
    -webkit-transform: rotate(45deg) translateX(-23%);
    transform: rotate(45deg) translateX(-23%);
    -webkit-transform-origin: top left;
    transform-origin: top left;
  }

  &:after {
    -webkit-transform: rotate(-45deg) translateX(23%);
    transform: rotate(-45deg) translateX(23%);
    -webkit-transform-origin: top right;
    transform-origin: top right;
  }`};
`;
