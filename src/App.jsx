import { useState } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layouts/Shared/Layout";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Prescriptions from "./Pages/Prescriptions/Prescriptions";
import Patients from "./Pages/Patients/Patients";
import Templates from "./Pages/Templates/Templates";
import Drugs from "./Pages/Drugs/Drugs";
import Settings from "./Pages/Settings/Settings";

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
