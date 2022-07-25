btn = document.getElementById('btn-main');

var selectedDefender;
var selectedAttacker;

// btn.addEventListener('click', () => {

//     let fighterGroup = document.querySelectorAll('option');

//     let selectedFighterA = document.querySelector('option').innerHTML;
// console.log(selectedFighterA);

// let offenceGroup = document.getElementById('offence');
//  let selectedAttacker = offenceGroup.target;
// console.log(selectedAttacker);

// });

// let offenceGroup = document.getElementById('offence');
//  let selectedAttacker = offenceGroup.target;
// console.log(selectedAttacker);



document.addEventListener('DOMContentLoaded', () => {
    document
    .getElementById('offence')
    .addEventListener('input', handleSelectOffence);
})

document.addEventListener('DOMContentLoaded', () => {
    document
    .getElementById('defence')
    .addEventListener('input', handleSelectDefence);
})

function handleSelectDefence(ev) {
    selectedDefender = ev.target;
    console.log(selectedDefender.value);

}

function handleSelectOffence(ev) {
    selectedAttacker= ev.target;
    console.log(selectedAttacker.value);

}



btn.addEventListener('click', () => {

    console.log(`You have slected ${selectedDefender.value} for your defence`);
    console.log(`You have slected ${selectedAttacker.value} for your offence`);
        
    });
    