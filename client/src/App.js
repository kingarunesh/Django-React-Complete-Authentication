import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import ResetPassword from "./components/pages/auth/ResetPassword";
import SendPasswordResetEmail from "./components/pages/auth/SendPasswordResetEmail";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="login" element={<Login />} />
                        <Route path="sendpasswordresetemail" element={<SendPasswordResetEmail />} />
                        <Route path="reset" element={<ResetPassword />} />
                    </Route>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
