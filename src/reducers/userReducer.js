const TypesReducers = {
    SET_EMAIL: "SET_EMAIL"
  };

const initialState = {
    email: ''
};

export default (state = initialState, action) => {

    if (action.type === TypesReducers.SET_EMAIL) {
        return {
            ...state,
            email: action.payload.email
        };
    }

    return state;
}