import React, { useState } from "react";

import "../../styles/GlobalStyles.scss";
import "./employee.styles.scss";

const EmployeesAccordion = ({ employees, accordionPosition }) => {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const toggle = (i) => {
    if (selectedAccordion === i) {
      return setSelectedAccordion(null);
    }

    setSelectedAccordion(i);
  };

  return (
    <div className="employees__accordion">
      <div className="employees__position">
        <h2 className="employees__title">{accordionPosition}s</h2>
      </div>
      {employees.map((employee, i) =>
        employee.employeePosition === accordionPosition ? (
          <div
            className={`employees__${employee.employeeUsername} employees__employee`}
          >
            <div className="employees__content" onClick={() => toggle(i)}>
              <h2 className="epmloyees__subtitle">
                {employee.employeeUsername}
              </h2>

              <span className={`employees__icon`}>
                {selectedAccordion === i ? "-" : "+"}
              </span>
            </div>
            <div
              className={
                selectedAccordion === i
                  ? " employees__buttons employees__buttons--show"
                  : "employees__buttons"
              }
            >
              <p className="employees__descr">
                loremlorem loremlo remloremlo remloremlo remloremlor
                emloremlorem l oremloremloreml emlorem loremloreml
                oremloremloremloremloremloremlor
              </p>
            </div>
          </div>
        ) : (
          false
        )
      )}
    </div>
  );
};

export default EmployeesAccordion;
