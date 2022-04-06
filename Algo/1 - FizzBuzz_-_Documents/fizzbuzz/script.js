const body = document.body;

let nbr_default = 15;
let nbr = 0;

for (let i = 1; i <= nbr_default; i++) {
    let new_p = document.createElement('p');
    
    nbr = i;

    if ((nbr % 3) == 0) {
        nbr = "Fizz"
    }
    if ((nbr % 5) == 0) {
        nbr = "Buzz";
    }
    if ((nbr % 3) == 0 && (nbr % 5) == 0) {
        nbr = "FizzBuzz"; 
    }
    
    new_p.textContent = nbr;
    body.append(new_p);
}
