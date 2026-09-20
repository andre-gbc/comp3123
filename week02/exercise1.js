const greeterArrow = (myArray, counter) => {
    const greetText = 'Hello ';

    for (const name of myArray) {
        console.log(`${greetText}${name}`);
    }
}

greeterArrow(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
