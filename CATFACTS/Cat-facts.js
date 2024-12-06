const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector(".container");
const button = document.querySelector(".btn");

button.addEventListener("click", getRandomCats);

randomCatPhoto = (json) => {
  let photo = json[0].url;
  section.classList.add("cats");

  let image = document.createElement("img");
  image.src = photo;
  image.classList.add("random_cats");
  image.alt = photo;
  section.appendChild(image);
};

async function getRandomCats() {
  section.innerHTML = "";
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log("JSON:", json);
    return randomCatPhoto(json);
  } catch (e) {
    console.log("This is an error");
    console.log(e);
  }
}
















// async function generateFact() {
//     const button = document.getElementById('generateButton');
//     const factDiv = document.getElementById('fact');

//     const catPhotos = [
//         "\cat-fact asset\kitten-1.webp",
//         "\cat-fact asset\kitten-2.jpg",
//         "\cat-fact asset\kitten-3.jpg",
//         "\cat-fact asset\kitten-4.jpg",
//         "\cat-fact asset\kitten-5.webp",
//         "\cat-fact asset\kitten-6.webp",
//         "\cat-fact asset\kitten-7.jpg"
//     ]

//     // Disable the button and change the text
//     factDiv.style.display = "block"
//     button.disabled = true;
//     button.textContent = 'Loading...';

//     try {
//         const response = await fetch('https://catfact.ninja/fact');
//         const data = await response.json();

//         const randomIndex = Math.floor(Math.random() * catPhotos.length)
//         const randomPhoto = catPhotos[randomIndex] 

//         // Create an image element
//         const image = document.createElement("img");
//         image.src = randomPhoto
//         image.alt = "Cat Image";
//         image.classList.add("img")

//         // Clear previous content and append the image and fact
//         factDiv.innerHTML = ""; 
//         factDiv.appendChild(image); 

//         const textNode = document.createElement("p");
//         textNode.textContent = data.fact;
//         textNode.classList.add("facts");

//         factDiv.appendChild(textNode);
//         factDiv.classList.add("factspace");

//     } catch (error) {
//         factDiv.textContent = 'Error fetching cat fact!';

//     } finally {
//         // Re-enable the button and reset the text
//         button.disabled = false;
//         button.textContent = 'Generate Fact';
//     }
// }