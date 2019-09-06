import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";
import { NavBar, Circle, Form } from "./components";
import io from "socket.io-client";
import { AppState } from "./store/types";
import { connect } from "react-redux";
import { setSocket, updateCircleVisibility } from "./store/actions";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

interface AppProps {
  socket?: SocketIOClient.Socket;
  setSocket: typeof setSocket;
  updateCircleVisibility: typeof updateCircleVisibility;
}

export class App extends React.Component<AppProps> {
  updateCircleVisibility = (showCircle: boolean) => {
    if (showCircle !== undefined) {
      this.props.updateCircleVisibility(showCircle);
    }
  };

  componentDidMount() {
    const socket = io("https://drf-eng-app-2019.herokuapp.com");
    const { updateCircleVisibility } = this.props;
    socket.on("message", function({ showCircle }: { showCircle: boolean }) {
      console.log(`Received ${showCircle} message`);
      updateCircleVisibility(showCircle);
    });
    this.props.setSocket(socket);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          <Form />
          <Circle radius={100} steps={1000} />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  socket: state.socket
});

export default connect(
  mapStateToProps,
  { setSocket, updateCircleVisibility }
)(App);
