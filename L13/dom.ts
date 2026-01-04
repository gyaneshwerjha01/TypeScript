// Assume HTML: <input id="user-input" /> <button id="btn">Click</button>

const userInput = document.getElementById("user-input")! as HTMLInputElement; // ! = non-null assertion
userInput.value = "Hi Patel";

const btn = document.getElementById("btn") as HTMLElement;
btn.onclick = () => console.log("Clicked!"); // Output on click

// Alternative syntax (older)
const img = <HTMLImageElement>document.querySelector("img")!;
img.src = "image.jpg";

const form = document.getElementById("myform") as HTMLFormElement;
const myinput = document.querySelector("form > input") as HTMLInputElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const body = document.querySelector("body")!;
  const value = Number(myinput.value);
  const h2 = document.createElement("h2");
  h2.textContent = String(value + 20);
  body.append(h2);
};
