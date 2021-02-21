/**
 * Represents a menu item
 * @param {Object} menuObj - a menu item object
 * @returns {String} - HTML Representation of menu item
*/

export const MenuItem = (menuObj) => {
    return `
    <div class="menuItem">
        <div>
            <h3>${menuObj.name} - ${menuObj.price}</h3>
            <p>${menuObj.description}</p>
        </div>
    </div>
    `
}