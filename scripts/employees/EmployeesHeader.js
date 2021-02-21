/**
 * @file Responsible for rendering all of the Employee header components
*/



export const EmployeesHeader = () => {
    // Set page title
    const titleTarget = document.getElementById("page-title")
    titleTarget.innerHTML = "Employees"

    // Set page filter - (currently empty)
    const filterTarget = document.getElementById("page-filter")
    filterTarget.innerHTML = ""
}