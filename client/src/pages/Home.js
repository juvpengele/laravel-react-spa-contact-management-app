import React from "react";
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <Link to="/login">
                Login
            </Link>
            <div>
                Home page
            </div>

        </div>
    )
}

export default Home;