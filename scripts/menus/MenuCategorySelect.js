/**
 * @file Manages the functionalities of the MenuCategorySelect component
*/

import { getMenuCategories } from "./MenusDataManager.js";

export const MenuCategorySelect = () => {
    getMenuCategories()
        .then((menuCategoryArray) => {
            return render(menuCategoryArray)
        })
}

const render = (categoryArray) => {
    const contentTarget = document.getElementById("page-filter")
    const categoryOptions = categoryArray.map(item => {
        return `
        <option value="${item.id}">${item.name}</option>
        `
    }).join("")

    contentTarget.innerHTML = `
    <strong>Filter by: </strong>
    <select id="menu-select">
        <option value="0">All Items</option>
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
 * Listen for "click" event and IF the element clicked
 * is the menus-nav link, then call the MenuCategorySelect component
 */
eventHub.addEventListener("click", event => {
    if (event.target.id === "menus-nav") {
        MenuCategorySelect()
    }
})

/**
 * Listen for "change" event and IF the element changed
 * is the menu-select link, then get the selected option value
 * and dispatch that in a custom event
 */
eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "menu-select") {
        const selectedOptionValue = changeEvent.target.value
        const customEvent = new CustomEvent("MenuCategorySelected", {
            detail: {
                menuId: parseInt(selectedOptionValue),
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})