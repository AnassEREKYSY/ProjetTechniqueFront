"use client";

import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = require("@/redux/store");
const { Provider } = require("react-redux");


export default function ReduxProvider({ children }) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}
