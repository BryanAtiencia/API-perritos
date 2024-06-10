async function fetchDog(breed) {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/Chow/images/random`);
        const data = await response.json();
        if (data.status === "success") {
            displayDog(data.message, breed);
        } else {
            document.getBreed('result').innerText = 'Breed not found';
        }
    } catch (error) {
        document.getBreed('result').innerText = 'Error fetching dog';
    }
}

function displayDog(imageUrl, breed) {
    document.getBreed('result').innerHTML = `
        <h2>${breed}</h2>
        <img src="${imageUrl}" alt="${breed}">
    `;
}
