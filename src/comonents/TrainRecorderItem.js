import PropTypes from "prop-types";
export default function TrainRecorderItem({ item, deleteStep, changeStep }) {
  debugger;
  return (
    <li className='TrainRecord__item'>
      <div>{item.date}</div>
      <div>{Number(item.distance).toFixed(2)}</div>
      <div>
        <i className='material-icons' onClick={() => changeStep(item.id)}>
          edit
        </i>
        <i className='material-icons' onClick={() => deleteStep(item.id)}>
          delete
        </i>
      </div>
    </li>
  );
}

TrainRecorderItem.propTypes = {
  stepsStatic: PropTypes.exact({
    id: PropTypes.string,
    date: PropTypes.string,
    distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  btnChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
