/**
 * Represents an employee
 * @param {Object} employeeObj - an employee object
 * @returns {String} - HTML Representation of employee object
*/

export const EmployeeCard = (employeeObj) => {
    return `
    <div class="employeeCard">
        <div>
            <h3>${employeeObj.firstName} ${employeeObj.lastName}</h3>
        </div>
    </div>
    `
}