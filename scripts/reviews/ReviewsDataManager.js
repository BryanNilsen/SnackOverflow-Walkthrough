/**
 * This module is responsible for all requests to the
 * Reviews API and dispatching a custom event indicating
 * when data has been updated
*/

const eventHub = document.querySelector("body")
const dispatchStateChangeEvent = () => {
    const reviewsStateChangedEvent = new CustomEvent("reviewsStateChanged")
    eventHub.dispatchEvent(reviewsStateChangedEvent)
}

export const getReviews = () => {
    return fetch("http://localhost:5000/reviews")
        .then(response => response.json())
        .then(parsedReviews => {
            return parsedReviews
        })
}

export const postReview = (reviewObj) => {
    return fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewObj)
    })
        .then(dispatchStateChangeEvent)
}

export const deleteReview = (reviewId) => {
    return fetch(`http://localhost:5000/reviews/${reviewId}`, {
        method: "DELETE"
    })
        .then(dispatchStateChangeEvent)
}