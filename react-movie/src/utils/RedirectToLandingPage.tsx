import { Navigate } from "react-router-dom";

export default function RedirectToLandingPage() {
    return (
        <div>
            <Navigate to='/'/>
        </div>
    );
}