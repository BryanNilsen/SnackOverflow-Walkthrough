/**
 * Represents a review
 * @param {Object} reviewObj - a review object
 * @returns {String} - HTML Representation of menu item object
*/

export const ReviewCard = (reviewObj) => {
    // return HTML representation of single review object
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const starSymbol = "☆"
    return `
    <div class="review__card">
        <h3>
        <span class="star">${starSymbol.repeat(reviewObj.rating)}</span><span class="star--fade">${starSymbol.repeat(5 - reviewObj.rating)}</span>
        - ${new Date(reviewObj.date).toLocaleDateString('en-US', options)}</h3 >
        <p>${reviewObj.text}</p>
        <p>
            <em>- ${reviewObj.name}</em>
        </p>
        <hr>
    </div>
    `
}
