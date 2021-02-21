/**
 * @file Responsible for rendering all of the Menu header components
*/

import { MenuCategorySelect } from "./MenuCategorySelect.js"

export const MenusHeader = () => {
    // Set page title
    const titleTarget = document.getElementById("page-title")
    titleTarget.innerHTML = "Menus"

    // Set Page Filter
    MenuCategorySelect()
}