import PropTypes from "prop-types";

export default function FormStep({ btnChange, handleChange, stepsStatic }) {
  return (
    <form onSubmit={btnChange} className='FormStep'>
      <div className='form-row'>
        <label htmlFor='date'>Дата(ДД.ММ.ГГГГ)</label>
        <input
          type='date'
          name='date'
          onChange={handleChange}
          value={stepsStatic.date}
          id='date'
        />
      </div>
      <div className='form-row'>
        <label htmlFor='distance'>Пройдено км</label>
        <input
          type='text'
          name='distance'
          onChange={handleChange}
          value={stepsStatic.distance}
          id='distance'
        />
      </div>
      <button>OK</button>
    </form>
  );
}
FormStep.defaultProps = {
  form: { date: "", dist: "" },
};

FormStep.propTypes = {
  stepsStatic: PropTypes.exact({
    date: PropTypes.string,
    distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  btnChange: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
