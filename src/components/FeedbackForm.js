import React, { useContext, useEffect, useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/feedback-context";

function FeedbackForm() {
    const [text, setText] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState(10);

    const { addFeedback, feedbackEdit, updateFeedback } =
        useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit) {
            setBtnDisabled(false);
            setRating(feedbackEdit.feedback.rating);
            setText(feedbackEdit.feedback.text);
        }
    }, [feedbackEdit]);

    const handleTextChange = (event) => {
        if (text === "" && rating === null) {
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== "" && text.trim().length <= 10) {
            setMessage("Feedback must be atleast 10 characters");
            setBtnDisabled(true);
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            };
            setText("");
            if (feedbackEdit.edit) {
                updateFeedback(feedbackEdit.feedback.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }
        }
    };

    const handleRating = (rating) => {
        setRating(rating);
    };

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us</h2>
                <RatingSelect handleRating={handleRating} />
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="write a review"
                        value={text}
                        onChange={handleTextChange}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;
