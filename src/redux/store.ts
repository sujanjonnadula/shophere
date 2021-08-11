import { createStore, applyMiddleware,compose, combineReducers } from "redux";
import thunk from'redux-thunk';
import { rootReducer } from "./rootReducer";

 

interface WindowWithReduxExtension extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(a: R) => R
  }

const configureStore = () => {
    const composeEnhancers =
        process.env.NODE_ENV !== 'production'
        ? (window as WindowWithReduxExtension)
            .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        : compose

    const enhancers = composeEnhancers(applyMiddleware(thunk));
    const store = createStore(rootReducer, {}, enhancers);

    return store
}
export const store = configureStore();

export type rootStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;