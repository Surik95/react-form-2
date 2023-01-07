import React, { useState } from "react";
import shortid from "shortid";
import TableSteps from "./TableSteps";
import FormStep from "./FormStep";
import moment from "moment/moment";

export default function Steps() {
  const clearForm = { date: "", distance: "" };
  const [stepsStatic, stepForm] = useState(clearForm);
  const [stepArr, stepAdd] = useState([]);

  const handleChange = (event) => {
    let { name, value } = event.target;
    stepForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const btnChange = (event) => {
    event.preventDefault();
    const index = stepArr.findIndex((item) => item.date === stepsStatic.date);
    if ("" === stepsStatic.date) {
      alert("Введите дату!");
      return;
    } else if (
      stepsStatic.distance <= 0 ||
      !/^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/.test(
        String(stepsStatic.distance)
      )
    ) {
      alert("Неккоректная дистанция!");
      return;
    } else if (index !== -1) {
      stepArr[index].distance =
        Number(stepArr[index].distance) + Number(stepsStatic.distance);
      stepAdd((prevArr) => [...prevArr]);
      stepForm(clearForm);
      return;
    }
    stepsStatic.id = shortid();

    stepAdd((prevArr) => [...prevArr, stepsStatic]);
    stepAdd((prevArr) =>
      prevArr.sort((a, b) => {
        return (
          moment()
            .date(Number(b.date.slice(8, 10)))
            .month(Number(b.date.slice(5, 7)) + 1)
            .year(Number(b.date.slice(0, 4)))
            .unix() -
          moment()
            .date(Number(a.date.slice(8, 10)))
            .month(Number(a.date.slice(5, 7)) + 1)
            .year(Number(a.date.slice(0, 4)))
            .unix()
        );
      })
    );
    stepForm(clearForm);
  };

  const deleteStep = (id) => {
    stepAdd((prevArr) => prevArr.filter((item) => item.id !== id));
  };

  const changeStep = (id) => {
    const index = stepArr.findIndex((item) => item.id === id);
    stepForm({
      date: stepArr[index].date,
      distance: stepArr[index].distance,
    });
    stepAdd((prevArr) => prevArr.filter((item) => item.id !== id));
  };

  return (
    <div className='Steps'>
      <div className='containier'>
        <FormStep
          btnChange={btnChange}
          handleChange={handleChange}
          stepsStatic={stepsStatic}
        />
        <TableSteps
          statistic={stepArr}
          deleteStep={deleteStep}
          changeStep={changeStep}
        />
      </div>
    </div>
  );
}
