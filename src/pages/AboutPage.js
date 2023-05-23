import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>Simple app to leave your feedback. Peace </p>
                <p>
                    <Link to="/">BLinkck to home</Link>
                </p>
            </div>
        </Card>
    );
}

export default AboutPage;
