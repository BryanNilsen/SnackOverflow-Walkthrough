/**
 * Represents a review
 * @param {Object} reviewObj - a review object
 * @returns {String} - HTML Representation of menu item object
*/

import { deleteReview } from "./ReviewsDataManager.js";


export const ReviewCard = (reviewObj) => {
    // return HTML representation of single review object
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const starSymbol = "☆"
    return `
    <div class="review__card">
        <h3>
        <span class="star">${starSymbol.repeat(reviewObj.rating)}</span><span class="star--fade">${starSymbol.repeat(5 - reviewObj.rating)}</span>
        - ${new Date(reviewObj.date).toLocaleDateString('en-US', options)}
        </h3 >
        <p>${reviewObj.text}</p>
        <div class="review__footer">
            <em>- ${reviewObj.name}</em>
            <button class="btn" id="deleteReview--${reviewObj.id}">delete</button>
        </div>
        <hr>
    </div>
    `
}

const eventHub = document.querySelector("body")
eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteReview--")) {
        // get Id from button id
        const [prefix, reviewId] = event.target.id.split("--")
        deleteReview(reviewId)
    }
})