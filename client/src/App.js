import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";

function App() {
    const { access_token } = useSelector((state) => state.auth);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />

                        <Route path="contact" element={<Contact />} />

                        <Route path="login" element={!access_token ? <Login /> : <Navigate to="/dashboard" />} />

                        <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />

                        <Route path="reset" element={<ResetPassword />} />
                    </Route>

                    <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />

                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
