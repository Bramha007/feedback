import { createContext, useState } from "react";
import feedbackList from "../data/feedbackData";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState(feedbackList);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        boolean: false,
    });

    //Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedbacks((prev) =>
                prev.filter((feedback) => feedback.id !== id)
            );
        }
    };

    const addFeedback = (newFeedback) => {
        const id = uuidv4();
        setFeedbacks((prev) => [{ id, ...newFeedback }, ...prev]);
    };

    //Set feedback that is to be edited
    const editFeedback = (feedback) => {
        setFeedbackEdit({ feedback, edit: true });
    };

    const updateFeedback = (id, updItem) => {
        setFeedbacks((prev) =>
            prev.map((feedback) =>
                feedback.id === id ? { ...feedback, ...updItem } : feedback
            )
        );
        setFeedbackEdit({ feedback: {}, edit: false });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
