const emotionRadios = document.getElementById("emotion-radios");

emotionRadios.addEventListener("change", highlightCheckedOption);

export function highlightCheckedOption(e) {
    const radios = document.getElementsByClassName("radio")
    for (let radio of radios) {
        radio.classList.remove("highlight");
    }
    document.getElementById(e.target.id).parentElement.classList.add("highlight");
}