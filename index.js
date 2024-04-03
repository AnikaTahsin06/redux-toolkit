const { createStore } = require("redux");

// define constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const ADD_USER = "ADD_USER";

// state
const initialState = {
    count: 0
};

// dispatch(Action)
const incrementAction = () => {
    return {
        type: INCREMENT,
    };
}

const decrementAction = () => {
    return {
        type: DECREMENT,
    };
}

const resetAction = () => {
    return {
        type: RESET,
    };
}

const addUser = () => {
    return {
        type: ADD_USER,
        payload: {
            name: "Anika Tahsin",
        }
    }
}

// crate reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };

        default:
            return state;
    }
};

// 4. store - getState(), dispatch(), subscribe()

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
});

// dispatch action
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
