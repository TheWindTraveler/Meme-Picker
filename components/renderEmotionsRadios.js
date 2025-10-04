import { getEmotionsArray } from "./getEmotionsArray.js";
import { catsData } from "../data/catsData.js";

const emotionRadios = document.getElementById("emotion-radios");

export function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
            >
        </div>`
    }
    emotionRadios.innerHTML = radioItems
}

renderEmotionsRadios(catsData)