import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Shared/Layout";
import Dashboard from "./Components/Dashboard";
import Prescriptions from "./Components/Prescriptions";
import Patients from "./Components/Patients";
import Templates from "./Components/Templates";
import Drugs from "./Components/Drugs";
import Settings from "./Components/Settings";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="prescriptions" element={<Prescriptions />} />
            <Route path="patients" element={<Patients />} />
            <Route path="templates" element={<Templates />} />
            <Route path="drugs" element={<Drugs />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="login" element={<div>Login</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
