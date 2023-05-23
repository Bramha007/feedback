import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/feedback-context";
import LoadSpinner from "./shared/LoadSpinner";

function FeedbackList() {
    const feedbackContext = useContext(FeedbackContext);
    const feedbacks = feedbackContext.feedbacks;
    const isLoading = feedbackContext.isLoading;

    if (!isLoading && (!feedbacks || feedbacks.length === 0))
        return <p>No Feedback Yet</p>;

    return isLoading ? (
        <LoadSpinner />
    ) : (
        <div className="feedback-list">
            <AnimatePresence>
                {feedbacks.map((feedback) => (
                    <motion.div
                        key={feedback.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={feedback.id} feedback={feedback} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}

// FeedbackList.protoTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     ),
// };

export default FeedbackList;

// return (
//     <div className="feedback-list">
//         {feedbacks.map((feedback) => (
//             <FeedbackItem
//                 key={feedback.id}
//                 feedback={feedback}
//                 handleDelete={handleDelete}
//             />
//         ))}
//     </div>
// );
