const textArea = document.querySelector("#text-area");
const char = document.querySelector("#char");
const words = document.querySelector("#words");
const sentences = document.querySelector("#sentences");
const para = document.querySelector("#para")




let charCount = 0,
    wordCount = 0,
    sentenceCount = 0,
    paraCount = 0;
let spaceCount = 0,
    letterCount = 0,
    digiCount = 0,
    specialCount = 0;

textArea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        charCount = 0;
        wordCount = 0;
        sentenceCount = 0;
        paraCount = 0;
        letterCount = 0;
        digiCount = 0;
        specialCount = 0;
        spaceCount = 0;

        e.preventDefault();
        let text = textArea.value;
        let length = text.length;

        let words = text.split(" ");
        wordCount = words.length;
        let paragraphs = text.split("\n\n");
        paraCount = paragraphs.length;
        for (i = 0; i < length; i++) {
            chartext = text[i].charCodeAt(0);
            if (
                (chartext >= 65 && chartext <= 90) ||
                (chartext >= 97 && chartext <= 122)
            ) {
                letterCount++;
            } else if (chartext === 32) {
                spaceCount++;
            } else if (chartext === 46 || chartext === 33) {
                sentenceCount++;
            } else if (
                (chartext >= 34 && chartext <= 47 && chartext != 46) ||
                (chartext >= 58 && chartext <= 64) ||
                (chartext >= 91 && chartext <= 96) ||
                (chartext >= 123 && chartext <= 126)
            ) {
                specialCount++;
            } else if (chartext >= 48 && chartext <= 57) {
                digiCount++;
            }
        }
        charCount = digiCount + specialCount + letterCount;


    }

});
