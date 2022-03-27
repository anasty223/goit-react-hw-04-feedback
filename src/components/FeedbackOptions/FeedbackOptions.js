import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul>
      {options.map((option) => (
        <li key={option} className={s.item}>
          <button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            className={`${s.button} ${s[option]}`}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
export default FeedbackOptions;
