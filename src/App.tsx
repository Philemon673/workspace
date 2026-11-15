import { LoginPage } from "./screens/login";
import { SignUpPage } from "./screens/signup";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/login" replace/>} />
    </Routes>
  );
}

export default App;
