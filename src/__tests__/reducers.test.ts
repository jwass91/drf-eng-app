import { rootReducer } from "../store/reducers";
import * as types from "../store/types";

describe("reducer", () => {
  it("should handle UPDATE_ROOM", () => {
    expect(
      rootReducer(undefined, {
        type: types.UPDATE_ROOM,
        room: "test"
      })
    ).toEqual({
      room: "test",
      live: false,
      showCircle: false,
      socket: undefined
    });
  });
  it("should handle JOIN", () => {
    const mock = jest.fn();
    const mockSocket = { emit: mock };
    expect(
      rootReducer(
        rootReducer(undefined, {
          type: types.SET_SOCKET,
          socket: mockSocket as any
        }),
        {
          type: types.JOIN
        }
      )
    ).toEqual({
      room: "",
      live: true,
      showCircle: false,
      socket: mockSocket
    });
    expect(mock).toHaveBeenCalledWith("join", "");
  });
  it("should handle SET_SOCKET", () => {
    expect(
      rootReducer(undefined, {
        type: types.SET_SOCKET,
        socket: {} as SocketIOClient.Socket
      })
    ).toEqual({
      room: "",
      live: false,
      showCircle: false,
      socket: {} as SocketIOClient.Socket
    });
  });
  it("should handle UPDATE_CIRCLE_VISIBILITY", () => {
    expect(
      rootReducer(undefined, {
        type: types.UPDATE_CIRCLE_VISIBILITY,
        showCircle: true
      })
    ).toEqual({
      room: "",
      live: false,
      showCircle: true,
      socket: undefined
    });
  });
});
