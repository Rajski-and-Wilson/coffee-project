"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2 class="float-left">' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
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
