import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import ResetPassword from "./pages/auth/ResetPassword";
import SendPasswordResetEmail from "./pages/auth/SendPasswordResetEmail";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";

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
