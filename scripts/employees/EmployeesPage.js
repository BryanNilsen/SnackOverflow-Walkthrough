/**
 * @file Manages the functionalities of the Employees page
*/
import { getEmployees } from "./EmployeesDataManager.js"
import { EmployeeCard } from "./EmployeeCard.js"

/**
 * Responsible for getting employees and passing them
 * into the render function
 */
export const EmployeesPage = () => {
    getEmployees()
        .then((employeeData) => {
            render(employeeData)
        })
}

/**
 * Responsible for iterating an array of employees and
 * rendering HTML representation to DOM
 * @param {array} employeesArray - an array of employees
*/
const render = (employeesArray) => {
    // Iterate employees array and make HTML string representation for each
    let employeesHTML = employeesArray.map(item => EmployeeCard(item)).join("")
    // Get reference to DOM element in which to insert employeesHTML representation
    const contentTarget = document.querySelector("main")

    // render employeesHTML representation to DOM
    contentTarget.innerHTML = `
        <section class="employees__wrapper">
            ${employeesHTML}
        </section>
    `
}



/**
 * eventHub gets reference to the body element in index.html
 * will be used for responding to user-generated events
 */
const eventHub = document.querySelector("body")

/**
 * Listen for "click" event and IF the element clicked
 * is the employees-nav link, then call the EmployeesPage component
 */
eventHub.addEventListener("click", event => {
    if (event.target.id === "employees-nav") {
        EmployeesPage()
    }
})