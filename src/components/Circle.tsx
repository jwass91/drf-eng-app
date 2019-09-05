import React from "react";
import CirclePoint from "./CirclePoint";
import { AppState } from "../store/types";
import { connect } from "react-redux";

interface CircleProps {
  radius: number;
  steps: number;
  showCircle: boolean;
}

export class Circle extends React.PureComponent<CircleProps> {
  render() {
    return (
      <div
        style={{
          position: "relative",
          margin: "0 auto",
          marginTop: 10,
          width: 2 * this.props.radius,
          height: 2 * this.props.radius
        }}
      >
        {this.props.showCircle
          ? [...pointGenerator(this.props.steps, this.props.radius)]
          : []}
      </div>
    );
  }
}

function* pointGenerator(steps: number, radius: number) {
  for (let i = 0; i < steps; i++) {
    yield (
      <CirclePoint
        key={i}
        angle={(i * (2 * Math.PI)) / steps}
        radius={radius}
        thickness={10}
      ></CirclePoint>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  showCircle: state.showCircle
});

export default connect(
  mapStateToProps,
  {}
)(Circle);
