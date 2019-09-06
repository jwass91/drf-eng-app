import React from "react";
import { Paper, Grid, TextField, Button, withStyles } from "@material-ui/core";
import { AppState } from "../store/types";
import { connect } from "react-redux";
import { updateRoom, join } from "../store/actions";
import { green } from "@material-ui/core/colors";

interface FormProps {
  room: string;
  live: boolean;
  updateRoom: typeof updateRoom;
  join: typeof join;
  socket?: SocketIOClient.Socket;
}

function handleEnterKeyPress(
  e: React.KeyboardEvent<HTMLDivElement>,
  cb: (e: any) => {}
) {
  if (e.key === "Enter") {
    cb(e);
    return true;
  }
  return false;
}

export class Form extends React.PureComponent<FormProps> {
  onInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.updateRoom(e.target.value);
  };
  onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    this.props.join();
  };
  onShow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (this.props.socket !== undefined) {
      this.props.socket.emit("message", { showCircle: true });
    }
  };
  onHide = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (this.props.socket !== undefined) {
      this.props.socket.emit("message", { showCircle: false });
    }
  };

  render() {
    return (
      <Paper style={{ margin: 14, padding: 14 }}>
        <Grid container>
          <Grid xs={10} item style={{ paddingRight: 14 }}>
            <TextField
              placeholder="Room name"
              value={this.props.room}
              onChange={this.onInputChange}
              onKeyPress={e =>
                handleEnterKeyPress(e, this.onSubmit as () => {})
              }
              fullWidth
              disabled={this.props.live}
              color="primary"
            />
          </Grid>
          <Grid xs={2} item>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              disabled={this.props.live}
              onClick={this.onSubmit}
            >
              Join Room
            </Button>
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid xs={6} item style={{ paddingRight: 14 }}>
            <GreenButton
              fullWidth
              variant="outlined"
              disabled={!this.props.live}
              onClick={this.onShow}
            >
              Show Other User's Circle
            </GreenButton>
          </Grid>
          <Grid xs={6} item>
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              disabled={!this.props.live}
              onClick={this.onHide}
            >
              Hide Other User's Circle
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  room: state.room,
  live: state.live,
  socket: state.socket
});

export default connect(
  mapStateToProps,
  { updateRoom, join }
)(Form);

const GreenButton = withStyles(() => ({
  root: {
    color: green[700],
    borderColor: green[500],
    "&:hover": {
      backgroundColor: green[100],
      borderColor: green[700]
    }
  }
}))(Button);
