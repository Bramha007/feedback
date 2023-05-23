import React, { useContext } from "react";
// import PropTypes from "prop-types";
import FeedbackContext from "../context/feedback-context";

function FeedbackStats() {
    const feedbackContext = useContext(FeedbackContext);
    const feedbacks = feedbackContext.feedbacks;

    const averageRating = () => {
        let average = 0;
        average = feedbacks.reduce((acc, cur) => {
            return acc + cur.rating;
        }, 0);
        return (average / feedbacks.length).toFixed(1).replace(/[.,]0$/, "");
    };
    return (
        <div className="feedback-stats">
            <h4>{feedbacks.length} Reviews</h4>
            <h4>
                Average Ratings: {isNaN(averageRating()) ? 0 : averageRating()}
            </h4>
        </div>
    );
}
// FeedbackStats.protoTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     ),
// };
export default FeedbackStats;
