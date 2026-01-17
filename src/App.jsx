import { Route, Routes } from "react-router-dom";
import { Pages } from "./imports/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Landing />} />
      <Route path="/dashboard" element={<Pages.Dashboard />} />
      <Route path="/setting" element={<Pages.Setting />} />
      <Route path="/timestamp" element={<Pages.TimeStamp />} />

      <Route path="/login" element={<Pages.Login />} />
      <Route path="/register" element={<Pages.Register />} />

      <Route path="/privacy-policy" element={<Pages.PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<Pages.TermsConditions />} />
    </Routes>
  );
}

export default App;
