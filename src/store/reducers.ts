import {
  UPDATE_ROOM,
  AppState,
  ActionTypes,
  SET_SOCKET,
  JOIN,
  UPDATE_CIRCLE_VISIBILITY
} from "./types";
import produce from "immer";

const initialState: AppState = {
  room: "",
  live: false,
  showCircle: false,
  socket: undefined
};

export const rootReducer = (state = initialState, action: ActionTypes) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_ROOM:
        draft.room = action.room;
        break;
      case JOIN:
        console.log("Joining Room", draft.room);
        if (draft.socket) {
          draft.socket.emit("join", draft.room);
        } else {
          console.error("socket not defined");
        }
        draft.live = true;
        break;
      case SET_SOCKET:
        draft.socket = action.socket;
        break;
      case UPDATE_CIRCLE_VISIBILITY:
        console.log("here");
        if (action.showCircle !== undefined) {
          draft.showCircle = action.showCircle;
        }
    }
  });
