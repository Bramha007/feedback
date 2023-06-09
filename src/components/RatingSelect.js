import React, { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/feedback-context";

function RatingSelect({ handleRating }) {
    const [selected, setSelected] = useState(10);

    const { feedbackEdit } = useContext(FeedbackContext);

    useEffect(() => {
        if (feedbackEdit.edit) {
            setSelected(feedbackEdit.feedback.rating);
        }
    }, [feedbackEdit]);
    const handleChange = (event) => {
        setSelected(+event.target.value);
        handleRating(+event.target.value);
    };

    return (
        <ul className="rating">
            <li>
                <input
                    type="radio"
                    id="num1"
                    name="rating"
                    value="1"
                    onChange={handleChange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num2"
                    value="2"
                    name="rating"
                    onChange={handleChange}
                    checked={selected === 2}
                />
                <label htmlFor="num2">2</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num3"
                    value="3"
                    onChange={handleChange}
                    name="rating"
                    checked={selected === 3}
                />
                <label htmlFor="num3">3</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num4"
                    value="4"
                    onChange={handleChange}
                    name="rating"
                    checked={selected === 4}
                />
                <label htmlFor="num4">4</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num5"
                    value="5"
                    onChange={handleChange}
                    checked={selected === 5}
                    name="rating"
                />
                <label htmlFor="num5">5</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num6"
                    value="6"
                    name="rating"
                    onChange={handleChange}
                    checked={selected === 6}
                />
                <label htmlFor="num6">6</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num7"
                    value="7"
                    onChange={handleChange}
                    checked={selected === 7}
                />
                <label htmlFor="num7">7</label>
            </li>
            <li>
                <input
                    type="radio"
                    name="rating"
                    id="num8"
                    value="8"
                    onChange={handleChange}
                    checked={selected === 8}
                />
                <label htmlFor="num8">8</label>
            </li>
            <li>
                <input
                    name="rating"
                    type="radio"
                    id="num9"
                    value="9"
                    onChange={handleChange}
                    checked={selected === 9}
                />
                <label htmlFor="num9">9</label>
            </li>
            <li>
                <input
                    type="radio"
                    id="num10"
                    name="rating"
                    value="10"
                    onChange={handleChange}
                    checked={selected === 10}
                />
                <label htmlFor="num10">10</label>
            </li>
        </ul>
    );
}

export default RatingSelect;
