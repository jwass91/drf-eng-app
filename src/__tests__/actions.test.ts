import * as actions from "../store/actions";
import * as types from "../store/types";

describe("actions", () => {
  it("should create an action to update room", () => {
    const room = "test";
    const expectedAction = {
      type: types.UPDATE_ROOM,
      room
    };
    expect(actions.updateRoom(room)).toEqual(expectedAction);
  });
  it("should create an action to join", () => {
    const expectedAction = {
      type: types.JOIN
    };
    expect(actions.join()).toEqual(expectedAction);
  });
  it("should create an action to set socket", () => {
    const socket = {} as SocketIOClient.Socket;
    const expectedAction = {
      type: types.SET_SOCKET,
      socket
    };
    expect(actions.setSocket(socket)).toEqual(expectedAction);
  });
  it("should create an action to update circle visibility", () => {
    const showCircle = true;
    const expectedAction = {
      type: types.UPDATE_CIRCLE_VISIBILITY,
      showCircle
    };
    expect(actions.updateCircleVisibility(showCircle)).toEqual(expectedAction);
  });
});
