/**
 * @file Manages the functionalities of the Review Form
 * Renders form to DOM and handles posting data to API
*/
import { postReview } from "./ReviewsDataManager.js"

export const ReviewForm = () => {
    const contentTarget = document.querySelector("aside")
    contentTarget.innerHTML = `
    <section class="review-form__wrapper">
    <h2>Add Review</h2>
    <hr/>
    <form>
        <fieldset>
            <label>Name:
                <input type="text" id="review--name" name="name"/>
            </label>
        </fieldset>
        <fieldset>
            <label>Rating:
                <select id="review--rating" name="review">
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
                </select>
            </label>
        </fieldset>
        <fieldset>
            <label>Comments:
                <textarea id="review--text" name="text" rows="3"></textarea>
            </label>
        </fieldset>
        <button id="review--submit">Submit</button>
    </form>
    </section>
    `
}


/**
 * eventHub gets reference to the body element in index.html
 * will be used for responding to user-generated events
 */
const eventHub = document.querySelector("body")



// Removes form from aside when any other navlink is selected
eventHub.addEventListener("click", event => {
    if (event.target.className === "navlink" && event.target.id !== "reviews-nav") {
        const contentTarget = document.querySelector("aside")
        contentTarget.innerHTML = ""
    }
})

// Submits review form
eventHub.addEventListener("click", event => {
    if (event.target.id === "review--submit") {
        // prevent form from refreshing the page
        event.preventDefault()

        // get values from form and store in newReview object
        const nameInput = document.getElementById("review--name").value
        const ratingInput = document.getElementById("review--rating").value
        const textInput = document.getElementById("review--text").value
        const reviewDate = new Date()

        const newReview = {
            date: reviewDate,
            rating: parseInt(ratingInput),
            text: textInput,
            name: nameInput
        }

        // post newReview object to API
        postReview(newReview)
    }
})