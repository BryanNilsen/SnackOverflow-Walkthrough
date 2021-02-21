/**
 * @file Manages the functionalities of the Reviews page
*/
import { getReviews } from "./ReviewsDataManager.js"
import { ReviewCard } from "./ReviewCard.js"
import { ReviewsHeader } from "./ReviewsHeader.js"
import { ReviewForm } from "./ReviewForm.js"



/**
 * Responsible for getting reviews and passing them
 * into the render function
 */
export const ReviewsPage = () => {
    getReviews()
        .then((reviewsData) => {
            render(reviewsData)
        })
}

/**
 * Responsible for iterating an array of reviews and
 * rendering HTML representation to DOM
 * @param {array} reviewsArray - an array of reviews
*/
const render = (reviewsArray) => {
    // Iterate reviews array and make HTML string representation for each
    let reviewsHTML = reviewsArray.map(review => ReviewCard(review)).join("")

    // Get reference to DOM element in which to insert reviewsHTML representation
    const contentTarget = document.querySelector("main")

    // render reviewsHTML representation to DOM
    contentTarget.innerHTML = `
        <section class="reviews__wrapper">
            ${reviewsHTML}
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
 * is the locations-nav link, then call the LocationsPage component
 */
eventHub.addEventListener("click", event => {
    if (event.target.id === "reviews-nav") {
        ReviewsPage()
        ReviewsHeader()
        ReviewForm()
    }
})
