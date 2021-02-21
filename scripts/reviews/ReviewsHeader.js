/**
 * @file Responsible for rendering all of the Reviews header components
*/

export const ReviewsHeader = () => {
    // Set page title
    const titleTarget = document.getElementById("page-title")
    titleTarget.innerHTML = "Reviews"

    // Set Page Filter - (currently empty)
    const filterTarget = document.getElementById("page-filter")
    filterTarget.innerHTML = ""
}