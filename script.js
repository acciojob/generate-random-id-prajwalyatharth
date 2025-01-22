function makeid(l) {
    // Define possible characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < l; i++) { // Use the parameter l
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

// Do not change the code below.
const l = parseInt(prompt("Enter a number."), 10); // Parse the input to an integer
alert(makeid(l));
