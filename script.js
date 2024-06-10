document.getElementById('characterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const characterName = document.getElementById('characterName').value;
    fetchCharacter(characterName);
});

async function fetchCharacter(name) {
    try {
        const response = await fetch(`https://dog.ceo/api/breed/${name}/image/random`)
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            displayCharacter(data.results[0]);
        } else {
            document.getElementById('result').innerText = 'DOG not found';
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error fetching character';
    }
}

function displayCharacter(character) {
    if (character) {
        document.getElementById('result').innerHTML = `
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}">
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Gender: ${character.gender}</p>
        `;
    } else {
        document.getElementById('result').innerText = 'Character not found';
    }
}
