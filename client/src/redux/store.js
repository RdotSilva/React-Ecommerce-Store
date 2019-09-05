import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export default store;
