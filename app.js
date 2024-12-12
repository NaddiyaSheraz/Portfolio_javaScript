const textElement = document.getElementById("typing-text2");
const text = "  I will create a web design that can give value to your company.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index); // Add one character at a time
    index++;
    setTimeout(typeWriter, 100); // Delay between characters
  }
}

typeWriter(); // Start the typewriter effect
