import React, { useEffect, useState } from "react";

import EmployeesAccordion from "../../components/employee/employee.component";

import "../../styles/GlobalStyles.scss";
import "./employees.styles.scss";

// import employees from "../../api/employees.json";

const Employees = () => {
  const [state, setState] = useState({
    employees: [],
    positions: ["owner", "manager", "superviser", "cashier"],
  });

  const showEmployees = () => {
    const url = "http://127.0.0.1:8000/employees";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setState({
          employees: json,
          positions: ["owner", "manager", "superviser", "cashier"],
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  };

  useEffect(showEmployees, []);

  return (
    <div className="eployees">
      <div className="container employees__container">
        {state.positions.map((position, i) => (
          <div
            className={`employees__subcontainer employees__subcontainer--${position}`}
          >
            <EmployeesAccordion
              accordionPosition={position}
              employees={state.employees}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
