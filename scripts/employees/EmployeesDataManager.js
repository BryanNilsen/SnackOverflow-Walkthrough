/**
 * This module is responsible for all fetch calls to the
 * Snack Overflow API to get the employees data
*/

export const getEmployees = () => {
    return fetch("https://snackoverflow-api.herokuapp.com/employees?_expand=location&_expand=position")
        .then(response => response.json())
        .then(employeesFromAPI => {
            console.log(employeesFromAPI)
            return employeesFromAPI
        })
}


