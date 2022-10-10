import { catsData } from "./data.js";

//DOM Elements
const selection = document.getElementById("selection");
const getMemesBtn = document.getElementById("get-memes-btn");

const emotionArr = [];

for (let cat of catsData) {
	for (let emotion of cat.emotionTags) {
		emotionArr.push(emotion);
	}
}
const uniqueEmotionsArr = [...new Set(emotionArr)];

for (let emotion of uniqueEmotionsArr) {
	selection.innerHTML += `
        <div class="inputDiv">
            <label class="labelItems" for="emotion">${emotion}</label>
            <input class="radioItems" name="emotion" id=${emotion} type="radio" value=${emotion} />
        </div>
    `;
}
