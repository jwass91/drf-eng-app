import React from "react";
import { grey } from "@material-ui/core/colors";

interface CirclePointProps {
  angle: number;
  radius: number;
  thickness: number;
}

export default class CirclePoint extends React.PureComponent<CirclePointProps> {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          backgroundColor: grey[900],
          width: this.props.thickness,
          height: this.props.thickness,
          top:
            this.props.radius - this.props.radius * Math.sin(this.props.angle),
          left:
            this.props.radius + this.props.radius * Math.cos(this.props.angle),
          borderRadius: "50%"
        }}
      ></div>
    );
  }
}
