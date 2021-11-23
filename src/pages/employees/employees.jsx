import React, { useState } from "react";

import EmployeesAccordion from "../../components/employee/employee.component";

import "../../styles/GlobalStyles.scss";
import "./employees.styles.scss";

import employees from "../../api/employees.json";

const Employees = () => {
  const [state, setState] = useState({
    employees,
    positions: ["Owner", "Manager", "Superviser", "Cashier"],
  });

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ monsters: users }));
  // }

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
