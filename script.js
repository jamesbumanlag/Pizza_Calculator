// 1 Large Pizza = $6.45
// 2 Large Pizza = $12
// 3 Large Pizza = $14


// Get input from user

const calculate = document.getElementById('calculate');
let priceDisplay = document.getElementById('price-display');


// get pizza order quantity and divide by 3
function totalLargePizza(numPizzas){
    console.log(`Total Pizza Order: ${numPizzas}`);
    let threeLargePizzas = parseInt(numPizzas/3);
    console.log(`Total Large Pizza: ${threeLargePizzas}`);
    return threeLargePizzas;

}

// get pizza order quantity with mod of 3
function remainingQuantityPizza(numpizzas){
    let remainingPizza = numpizzas % 3;
    console.log(`Remaining pizza: ${remainingPizza}`);
    return remainingPizza;
    
}

document.addEventListener('DOMContentLoaded', ()=>{
    calculate.addEventListener('click', ()=>{

        
        let numPizzas = document.getElementById('numpizzas').value;

        let remainingPizza = remainingQuantityPizza(numPizzas);
        let price;
        let totalPrice;
        if (remainingPizza == 0){
            price = parseFloat(totalLargePizza(numPizzas) * 14);
            priceDisplay.textContent = '$ ' + price;
            console.log('mod = 0 Price: ' + price)

        } else if (remainingPizza == 1){
            price = totalLargePizza(numPizzas) * 14;
            totalPrice = parseFloat(price + 6.45);
            priceDisplay.textContent = '$ ' + totalPrice;
            console.log('mod = 1 Price: ' + totalPrice)

        } else if (remainingPizza == 2){
            price = totalLargePizza(numPizzas) * 14;
            totalPrice = parseFloat(price + 12).toFixed(2);
            priceDisplay.textContent = '$ ' + totalPrice;
            console.log('mod = 2 Price: ' + totalPrice);
        }
        

       
    })
    
})

