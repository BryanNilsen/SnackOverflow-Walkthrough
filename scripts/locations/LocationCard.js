/**
 * Represents a location
 * @param {Object} locationObj - a location object
 * @returns {String} - HTML Representation of location
*/

export const LocationCard = (locationObj) => {
    return `
    <div class="locationCard">
        <div>
            <h3>${locationObj.city}, ${locationObj.state}</h3>
            <p>Mon-Fri: ${locationObj.weekdayHours}</p>
            <p>Sat: ${locationObj.satHours}</p>
            <p>Sun: ${locationObj.sunHours}</p>
            <p>Phone: ${locationObj.phone}</p>
            <p>Address: ${locationObj.address}</p>
            <p>${locationObj.city}, ${locationObj.state} ${locationObj.zip}</p>
        </div>
    </div>
    `
}