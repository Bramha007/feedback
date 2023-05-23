import React, { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/feedback-context";

function FeedbackItem({ feedback }) {
    const feedbackContext = useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display"> {feedback.rating} </div>
            <button className="close">
                <FaTimes
                    color="purple"
                    onClick={() => feedbackContext.deleteFeedback(feedback.id)}
                />
            </button>
            <button
                className="edit"
                onClick={() => feedbackContext.editFeedback(feedback)}
            >
                <FaEdit color="purple" />
            </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    feedback: PropTypes.object.isRequired,
};

export default FeedbackItem;
