/**
 * @file Manages the functionalities of the Menus page
*/

import { getMenuItems } from "./MenusDataManager.js"
import { MenuItem } from "./MenuItem.js"

/**
 * Responsible for getting menu items and passing them
 * into the render function
 */
export const MenusPage = () => {
    getMenuItems()
        .then((menuData) => {
            render(menuData)
        })
}

/**
 * Responsible for iterating an array of menu items and
 * rendering HTML representation to DOM
 * @param {array} menuItemsArray - an array of menu items
*/
const render = (menuItemsArrary) => {
    // Iterate menu items array and make HTML string representation for each
    let menuItemsHTML = menuItemsArrary.map(item => MenuItem(item)).join("")

    // Get reference to DOM element in which to insert menuItemsHTML representation
    const contentTarget = document.querySelector("main")

    // render menuItemsHTML representation to DOM
    contentTarget.innerHTML = `
    <section class="menu__container">
        <section class="menu__list">
            ${menuItemsHTML}
        </section>
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
 * is the menus-nav link, then call the MenusPage component
 */
eventHub.addEventListener("click", event => {
    if (event.target.id === "menus-nav") {
        MenusPage()
    }
})