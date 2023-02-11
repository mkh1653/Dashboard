interface UsersState {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  email: string;
  avatar: string;
  role: string;
  registered: string;
  state: {
    label: string;
    color: string;
  };
}

enum ActionType {
    getUser
}

const r