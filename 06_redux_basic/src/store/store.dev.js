import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/reducers";
import rootSaga from "./modules/sagas";

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
);

const store = createStore(rootReducer, {}, enhancer);

// https://webpack.js.org/concepts/hot-module-replacement/
if (module.hot) {
    module.hot.accept(() => {
        store.replaceReducer(require('./modules/reducers').default);
    });
}

sagaMiddleware.run(rootSaga);

export default store;
