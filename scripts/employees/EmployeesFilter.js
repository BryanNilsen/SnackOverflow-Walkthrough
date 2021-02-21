/**
 * @file Manages the functionalities of the EmployeesFilter select component
 * responsible for getting all employees and rendering a select menu to the DOM
 * with a unique list of positions
*/

import { getPositions } from "./EmployeesDataManager.js"


export const EmployeesFilter = () => {
    getPositions()
        .then((positionsArray) => {
            return render(positionsArray)
        })
}

const render = (positionsArray) => {
    const contentTarget = document.getElementById("page-filter")
    const categoryOptions = positionsArray.map(position => {
        return `
        <option value="${position.id}">${position.name}</option>
        `
    }).join("")

    contentTarget.innerHTML = `
    <strong>Filter by: </strong>
    <select id="employee-select">
        <option value="0">All Positions</option>
        ${categoryOptions}
    </select>
    `
}


/**
 * eventHub gets reference to the body element in index.html
 * will be used for responding to user-generated events
 */
const eventHub = document.querySelector("body")

/**
 * Listen for "change" event and IF the element changed
 * is the employee-select link, then get the selected option value
 * and dispatch that in a custom event
 */
eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "employee-select") {
        const selectedOptionValue = changeEvent.target.value
        const customEvent = new CustomEvent("EmployeePositionSelected", {
            detail: {
                selectedPosition: parseInt(selectedOptionValue)
            }
        })
        console.log('customEvent: ', customEvent);
        eventHub.dispatchEvent(customEvent)
    }
})