/**
 * @file Manages the functionalities of the Menus page
**/

import { getMenuItems } from "./MenusDataManager.js"
import { MenuItem } from "./MenuItem.js"

export const MenusPage = () => {
    getMenuItems()
        .then((menuData) => {
            render(menuData)
        })
}

/**
 * Responsible for iterating an array of menu items and
 * rendering HTML representation to DOM
 * @param {array} menuArray - an array of menu items
 * @returns - nothing
**/
const render = (menuArrary) => {
    const contentTarget = document.querySelector("main")
    // iterate items array and make HTML representation
    let menuHTML = menuArrary.map(item => MenuItem(item)).join("")
    // render to DOM
    contentTarget.innerHTML = `
    <section class="menu__container">
        <section class="menu__list">
            ${menuHTML}
        </section>
    </section>
    `
}