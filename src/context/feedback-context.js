import { createContext, useEffect, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        boolean: false,
    });
    const [isLoading, setIsLoading] = useState(true);

    const fetchFeedback = async () => {
        setIsLoading(true);
        const response = await fetch(
            "https://mauve-donkey-belt.cyclic.app/feedbacks"
        );
        const responseData = await response.json();
        setFeedbacks(responseData);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchFeedback();
    }, []);

    //Delete feedback
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            await fetch(
                `https://mauve-donkey-belt.cyclic.app/feedbacks/${id}`,
                {
                    method: "DELETE",
                }
            );
            // const responseData = await response.json();
            setFeedbacks((prev) =>
                prev.filter((feedback) => feedback.id !== id)
            );
        }
    };

    const addFeedback = async (newFeedback) => {
        const response = await fetch(
            "https://mauve-donkey-belt.cyclic.app/feedbacks",
            {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(newFeedback),
            }
        );
        const responseData = await response.json();
        setFeedbacks((prev) => [{ ...responseData }, ...prev]);
    };

    //Set feedback that is to be edited
    const editFeedback = (feedback) => {
        setFeedbackEdit({ feedback, edit: true });
    };

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(
            `https://mauve-donkey-belt.cyclic.app/feedbacks/${id}`,
            {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(updItem),
            }
        );
        const resData = await response.json();
        setFeedbacks((prev) =>
            prev.map((feedback) =>
                feedback.id === id ? { ...feedback, ...resData } : feedback
            )
        );
        setFeedbackEdit({ feedback: {}, edit: false });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks,
                feedbackEdit,
                isLoading,
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
