import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutPageLink from "./components/AboutPageLink";
import { FeedbackProvider } from "./context/feedback-context";

import "./index.css";

function App() {
    return (
        <FeedbackProvider>
            <Router>
                <Header />
                <div className="container">
                    <Routes>
                        <Route
                            path="/"
                            exact
                            element={
                                <React.Fragment>
                                    <FeedbackForm />
                                    <FeedbackStats />
                                    <FeedbackList />
                                </React.Fragment>
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                    <AboutPageLink />
                </div>
            </Router>
        </FeedbackProvider>
    );
}

export default App;
