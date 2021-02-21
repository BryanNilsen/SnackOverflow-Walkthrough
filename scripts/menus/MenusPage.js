/**
 * @file Manages the functionalities of the Menus page
*/

import { getMenuItems } from "./MenusDataManager.js"
import { MenuItemCard } from "./MenuItemCard.js"
import { MenusHeader } from "./MenusHeader.js"

// create "state" variables to hold all menu items
let allMenuItems = []


/**
 * Responsible for getting menu items and passing them
 * into the render function
 */
export const MenusPage = () => {
    getMenuItems()
        .then((menuData) => {
            allMenuItems = menuData
            render(allMenuItems)
        })
}

/**
 * Responsible for iterating an array of menu items and
 * rendering HTML representation to DOM
 * @param {array} menuItemsArray - an array of menu items
*/
const render = (menuItemsArray) => {
    // Iterate menu items array and make HTML string representation for each
    let menuItemsHTML = menuItemsArray.map(item => MenuItemCard(item)).join("")

    // Get reference to DOM element in which to insert menuItemsHTML representation
    const contentTarget = document.querySelector("main")

    // render menuItemsHTML representation to DOM
    contentTarget.innerHTML = `
        <section class="menu__wrapper">
            ${menuItemsHTML}
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
        MenusHeader()
    }
})

/**
 * Listen for custom "MenuCategorySelected" event and render
 * filtered menu items
 */
eventHub.addEventListener("MenuCategorySelected", event => {
    const menuId = event.detail.menuId
    if (menuId !== 0) {
        const filteredMenuItems = allMenuItems.filter(item => item.menuId === menuId)
        render(filteredMenuItems)
    } else {
        render(allMenuItems)
    }
})
