async function generateFact() {
    const button = document.getElementById('generateButton');
    const factDiv = document.getElementById('fact');

    const catPhotos = [
        "\cat-fact asset\kitten-1.webp",
        "\cat-fact asset\kitten-2.jpg",
        "\cat-fact asset\kitten-3.jpg",
        "\cat-fact asset\kitten-4.jpg",
        "\cat-fact asset\kitten-5.webp",
        "\cat-fact asset\kitten-6.webp",
        "\cat-fact asset\kitten-7.jpg"
    ]

    // Disable the button and change the text
    factDiv.style.display = "block"
    button.disabled = true;
    button.textContent = 'Loading...';

    try {
        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * catPhotos.length)
        const randomPhoto = catPhotos[randomIndex] 

        // Create an image element
        const image = document.createElement("img");
        image.src = randomPhoto
        image.alt = "Cat Image";
        image.classList.add("img")

        // Clear previous content and append the image and fact
        factDiv.innerHTML = ""; 
        factDiv.appendChild(image); 

        const textNode = document.createElement("p");
        textNode.textContent = data.fact;
        textNode.classList.add("facts");

        factDiv.appendChild(textNode);
        factDiv.classList.add("factspace");

    } catch (error) {
        factDiv.textContent = 'Error fetching cat fact!';

    } finally {
        // Re-enable the button and reset the text
        button.disabled = false;
        button.textContent = 'Generate Fact';
    }
}