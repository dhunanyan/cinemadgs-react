import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <div
      className={`employees__accordion--${accordionPosition} employees__accordion`}
    >
      <div className="employees__position">
        <h2 className="employees__title">{accordionPosition}s</h2>
      </div>
      {employees.map((employee, i) =>
        employee.employeePosition === accordionPosition ? (
          <div
            key={i}
            className={`employees__${employee.employeeUsername} employees__employee`}
          >
            <div className="employees__content" onClick={() => toggle(i)}>
              <h2 className="employees__subtitle">
                {employee.employeeUsername}
              </h2>

              <span className={`employees__icon`}>
                {selectedAccordion === i ? "-" : "+"}
              </span>
            </div>
            <div
              className={
                selectedAccordion === i
                  ? " employees__details employees__details--show"
                  : "employees__details"
              }
            >
              <div className="employees__line employees__line--yellow" />
              <div className="employees__line" />
              <div className="employees__descrs">
                <p className="employees__descr">
                  <span>First Name: </span>
                  {employee.employeeFirstName}
                </p>
                <p className="employees__descr">
                  <span>Last Name: </span>
                  {employee.employeeLastName}
                </p>
                <p className="employees__descr">
                  <span>E-mail: </span>
                  {`${employee.employeeFirstName.toLowerCase()}.${employee.employeeLastName.toLowerCase()}@gmail.com`}
                </p>
              </div>
              <div className="employees__line employees__line--yellow" />
              <div className="employees__line" />
              <div className="employees__buttons">
                <Link
                  to={`${employee.employeeID}`}
                  className="employees__button"
                >
                  View Profile
                </Link>
                <button className="employees__button">Promote</button>
                <button className="employees__button">Fire</button>
              </div>
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
