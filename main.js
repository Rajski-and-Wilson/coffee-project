"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h4 class="float-left m-2 p-2">' + coffee.name + '</h4>';
    html += '<p class="p-3">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;

    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}





// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'French', roast: 'dark'},
    {id: 2, name: 'Italian', roast: 'dark'},
    {id: 3, name: 'Viennese', roast: 'dark'},
    {id: 4, name: 'Espresso', roast: 'dark'},
    {id: 5, name: 'European', roast: 'dark'},
    {id: 6, name: 'New Orleans', roast: 'dark'},
    {id: 7, name: 'Continental', roast: 'dark'},
    {id: 8, name: 'High', roast: 'dark'},
    {id: 9, name: 'Breakfast', roast: 'medium'},
    {id: 10, name: 'American', roast: 'medium'},
    {id: 11, name: 'City', roast: 'medium'},
    {id: 12, name: 'Cinnamon', roast: 'light'},
    {id: 13, name: 'Half City', roast: 'light'},
    {id: 14, name: 'Light City', roast: 'light'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);

roastSelection.addEventListener("change", updateCoffees);




const input1 = document.querySelector('input');
const log = document.getElementById('values');


input1.addEventListener('input', updateValue);
function updateValue(e) {
    log.textContent = e.target.value;
}
// var submit1 = document.getElementById('submit1')
//     submit1.addEventListener('click',updateValue(e)({
//         log.textContent = e.target.value;
// });


var addSubmit = document.getElementById('input2')
    addSubmit.addEventListener('click', function (e){
      e.preventDefault()
        var newCoffee = document.forms.form2.addCoffee;
        var newRoast = document.forms.form2.roastSelection2;
        console.log(newCoffee.value);
        console.log(newRoast.value);
        var coffeeObject = new Object();
        // var coffeeObject = {
        //     id : coffees.length + 1,
        //     name: newCoffee,
        //     roast: newRoast,
        // };
        coffeeObject.id = coffees.length +1;
        coffeeObject.name = newCoffee.value;
        coffeeObject.roast = newRoast.value;
        console.log(coffeeObject);
        coffees.push(coffeeObject);



    });
//
// This is code for delaying a style
// function myFunction() {  document.getElementById("myDIV").style.transitionDelay = "2s";}
