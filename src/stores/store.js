import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./reducers/rootReducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./usersaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;