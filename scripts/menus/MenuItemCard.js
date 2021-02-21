/**
 * Represents a menu item
 * @param {Object} menuObj - a menu item object
 * @returns {String} - HTML Representation of menu item object
*/

export const MenuItemCard = (menuObj) => {
    return `
    <div class="menuItemCard">
        <div>
            <h3>${menuObj.name} - ${menuObj.price}</h3>
            <p>${menuObj.description}</p>
        </div>
    </div>
    `
}