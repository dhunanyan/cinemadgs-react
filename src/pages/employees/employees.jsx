import React, { useEffect, useState } from "react";

import EmployeesAccordion from "../../components/employee/employee.component";

import "../../styles/GlobalStyles.scss";
import "./employees.styles.scss";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const positions = ["owner", "manager", "superviser", "cashier"];

  const showEmployees = () => {
    const url = "/employees";

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: { "Access-Control-Allow_Origin": "*" },
        });
        const json = await response.json();
        console.log(json);
        setEmployees(json);
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
        {positions.map((position) => (
          <div
            key={position}
            className={`employees__subcontainer employees__subcontainer--${position}`}
          >
            <EmployeesAccordion
              accordionPosition={position}
              employees={employees}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
