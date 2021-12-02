import * as CONSTANTS from "./constants";
import apiActions from "../api/api-actions";

export default {
    DisplayReviews
}

export function DisplayReviews(data) {
    return `
    <ul>
    ${data.map(review => {
        return `
        <div class="reviewsList">
        <li>${review.reviewContent} ___${review.name}</li>
        </div>
        `;
    }).join('')}
    </ul>
    `
}