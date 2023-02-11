import { ActionType } from "../action-types";

interface fetchUsersAction {
  type: ActionType.fetchUsers;
}

interface fetchUsersSuccessAction {
  type: ActionType.fetchUsersSuccess;
  data: object[];
  message: {
    label: "success";
    message: string;
  };
}

interface fetchUsersErrorAction {
  type: ActionType.fetchUsersError;
  data: [];
  message: {
    label: "error";
    message: string;
  };
}

export type Action =
  | fetchUsersAction
  | fetchUsersErrorAction
  | fetchUsersSuccessAction;
