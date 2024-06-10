const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/breeds', async (req, res) => {
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
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});