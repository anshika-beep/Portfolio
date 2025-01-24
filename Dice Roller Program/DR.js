function rolldice(){
    const numofdice = document.getElementById("inp").value;
    const diceresult = document.getElementById("diceresult");
    const diceimgs = document.getElementById("diceimgs");
    const values = [];
    const images = [];

    for(let i = 0; i < numofdice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src= images/${value}.png alt="Dice ${value}">`); 
    }

    diceresult.textContent = `dice: ${values.join(`,`)}`;
    diceimgs.innerHTML = images.join('');
}