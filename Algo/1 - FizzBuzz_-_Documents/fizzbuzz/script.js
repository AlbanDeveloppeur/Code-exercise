const body = document.body;

let nbr_default = 100;

for (let i = 1; i <= nbr_default; i++) {
    const new_p = document.createElement('p');
    let nbr = i;

    if (!(nbr % 3) && !(nbr % 5)) {
        nbr = "FizzBuzz"; 
    } else if (!(nbr % 3)) {
        nbr = "Fizz"
    } else if (!(nbr % 5)) {
        nbr = "Buzz";
    }
    
    new_p.textContent = nbr;
    body.append(new_p);
}
