/**
 * @file Responsible for rendering all of the Employee header components
*/

import { EmployeesFilter } from "./EmployeesFilter.js"



export const EmployeesHeader = () => {
    // Set page title
    const titleTarget = document.getElementById("page-title")
    titleTarget.innerHTML = "Employees"

    // Set page filter
    EmployeesFilter()
}