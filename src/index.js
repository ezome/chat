import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material";
import { PersistGate } from "redux-persist/integration/react";
import { Header } from "./components";
import { ChatPage, ProfilePage, GistsPage } from "./pages";
import { store, persistor } from "./store";
import "./index.css";
import "./global.css";
// import styler from "./index.module.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/" element={<h1>Home page</h1>} />
            <Route path="/gists" element={<GistsPage />} />
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
