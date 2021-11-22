import React, { useState } from "react";

import EmployeesAccordion from "../../components/employee/employee.component";

import "../../styles/GlobalStyles.scss";
import "./employees.styles.scss";

const Employees = () => {
  const [state, setState] = useState({
    employees: [
      {
        employeeID: 1,
        employeePosition: "Cashier",
        employeeUsername: "jankowalski",
        employeeFirstName: "Jan",
        employeeLastName: "Kowalski",
      },

      {
        employeeID: 2,
        employeePosition: "Cashier",
        employeeUsername: "magdakowalska",
        employeeFirstName: "Magda",
        employeeLastName: "Kowalska",
      },

      {
        employeeID: 3,
        employeePosition: "Manager",
        employeeUsername: "miroslawdudek",
        employeeFirstName: "Mirosław",
        employeeLastName: "Dudek",
      },

      {
        employeeID: 4,
        employeePosition: "Manager",
        employeeUsername: "mikolajkraszewski",
        employeeFirstName: "Mikołaj",
        employeeLastName: "Kraszewski",
      },
      {
        employeeID: 5,
        employeePosition: "Superviser",
        employeeUsername: "justynachybel",
        employeeFirstName: "Justyna",
        employeeLastName: "Chybel",
      },

      {
        employeeID: 6,
        employeePosition: "Superviser",
        employeeUsername: "janjazgar",
        employeeFirstName: "Jan",
        employeeLastName: "Jazgar",
      },

      {
        employeeID: 7,
        employeePosition: "Superviser",
        employeeUsername: "patrykcieslak",
        employeeFirstName: "Patryk",
        employeeLastName: "Cieślak",
      },

      {
        employeeID: 8,
        employeePosition: "Cashier",
        employeeUsername: "boleslawkraszewski",
        employeeFirstName: "Bolesław",
        employeeLastName: "Kraszewski",
      },

      {
        employeeID: 9,
        employeePosition: "Owner",
        employeeUsername: "gosiaduda",
        employeeFirstName: "Gosia",
        employeeLastName: "Duda",
      },
    ],

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
