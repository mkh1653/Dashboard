import { ActionType } from "../action-types";
import { Action } from "../actions";

interface UsersState {
  users: object[];
  loading: boolean;
  snack: {
    label: string;
    message: string;
  };
}

const reducer = (state: UsersState, action: Action) => {
  switch (action.type) {
    case ActionType.fetchUsers:
      return { users: [], loading: true, snack: {} };
    case ActionType.fetchUsersSuccess:
      return { users: action.data, loading: false, snack: action.message };
    case ActionType.fetchUsersError:
      return { users: action.data, loading: false, snack: action.message };
    default:
      return state;
  }
};

export default reducer;
