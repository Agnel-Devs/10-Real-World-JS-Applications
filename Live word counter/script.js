const inputTextArea = document.getElementById("input");
const characount = document.getElementById("charcount");
const wordcount = document.getElementById("wordcount");

inputTextArea.addEventListener("input", () => {
    characount.textContent = inputTextArea.value.length;

    const text = inputTextArea.value.trim();
    const words = text.split(/\s+/).filter(Boolean);

    wordcount.textContent = words.length;
});