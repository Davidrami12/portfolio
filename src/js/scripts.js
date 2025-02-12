const displayText = () => {
    let text = document.getElementById("hidden-text");
    text.classList.remove("display-text");
    text.innerHTML = "Oops! Sorry, but I disabled these buttons until I update my CV with new info. Please check again at some point :)";

    setTimeout(hideText, 5000);
}

const hideText = () => {
    let text = document.getElementById("hidden-text");
    text.classList.add("display-text");
}
