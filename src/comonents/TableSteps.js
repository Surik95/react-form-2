import TrainRecorderItem from "./TrainRecorderItem";
import PropTypes from "prop-types";

export default function TableSteps({ statistic, deleteStep, changeStep }) {
  debugger;
  return (
    <div className='TableSteps'>
      <div className='labelTableSteps'>
        <span className='labelTableSteps__item'>Дата(ДД.ММ.ГГГГ)</span>
        <span className='labelTableSteps__item'>Пройдено км</span>
        <span className='labelTableSteps__item'>Действие</span>
      </div>
      <ul className='TrainRecord__table'>
        {statistic.map((item) => (
          <TrainRecorderItem
            key={item.id}
            item={item}
            deleteStep={deleteStep}
            changeStep={changeStep}
          />
        ))}
      </ul>
    </div>
  );
}

TableSteps.defaultProps = {
  statistic: [],
};

TableSteps.propTypes = {
  statistic: PropTypes.array,
  changeStep: PropTypes.func.isRequired,
  deleteStep: PropTypes.func.isRequired,
};
