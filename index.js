// Quick n' Dirty

var characters = {
    warrior: {
      name: "Warrior",
      maxHealth: 10,
      attack: 2,
      defence: 2,
    
    },
    swordsman: {
      name: "Swordsman",
      maxHealth: 15,
      attack: 3,
      defence: 3,
    },
    knight: {
        name: "Knight",
        maxHealth: 15,
        attack: 3.5,
        defence: 3,
    }
  }


  // dom elements

  var defenceVeteran = document.getElementById('defence-veteran');
  var defencePoison = document.getElementById('defence-poison');
  var defenceBonusNormal = document.getElementById('defence-bonus-normal');
  var defenceBonusWall = document.getElementById('defence-bonus-city-wall');
  var defenceInputHP = document.getElementById('user-defence-hp');

  var offenceVeteran = document.getElementById('offence-veteran');
  var offenceInputHP = document.getElementById('offence-hp');
  var offenceBoosted = document.getElementById('offence-boosted');
  var offenceInputHP = document.getElementById('user-offence-hp');

  var offenceSelectInput = document
      .getElementById('offence');
  var defenceSelectInput = document
      .getElementById('defence');

  var resultsButton = document.getElementById('btn-main');
  
  var selectedAttacker = {
    name: "warrior",
    maxHealth: 0,
    inputHealth: 0,
    attack: 0,
    defence: 0,
    isVeteran: false,
    isBoosted: false,
  }
  var selectedDefender = {
    name: "warrior",
    maxHealth: 0,
    inputHealth: 0,
    attack: 0,
    defence: 0,
    isBoosted: false,
    isPoisoned: false,
    isVeteran: false,
  }

  var battleResult = {
    attacker: {
      originalHp: 0,
      damageDone: 0,
      healthRemaining: 0,
      survived: true,
    },
    defender: {
      originalHp: 0,
      damageDone: 0,
      healthRemaining: 0,
      survived: true,
    }
  }

  function initSelectOptions() {
    // character = current character in loop
    for (var characterName in characters) {
      // Dynamically create <option> element
      var character = characters[characterName];
      var newDefenceSelectOption = document.createElement('option');
      var newOffenceSelectOption = document.createElement('option');
      newOffenceSelectOption.setAttribute('value', character.name.toLowerCase());
      newOffenceSelectOption.innerHTML = character.name;
      // <option value="warrior">Warrior</option>
      newDefenceSelectOption.setAttribute('value', character.name.toLowerCase());
      newDefenceSelectOption.innerHTML = character.name;
      // Append to the parent <select> input
      offenceSelectInput.appendChild(newOffenceSelectOption);
      console.log(`Offence option generated for ${character.name}`);
      defenceSelectInput.appendChild(newDefenceSelectOption);
    }
  }





document.addEventListener('DOMContentLoaded', () => {
    initSelectOptions();
    document
    .getElementById('offence')
    .addEventListener('input', handleSelectOffence);
    document
    .getElementById('defence')
    .addEventListener('input', handleSelectDefence);
})


function handleSelectDefence(ev) {
    console.log(ev.target.value);

}

function handleSelectOffence(ev) {
    console.log(ev.target.value);
    // return selectedAttacker;

}


/** NEW */
function getCharData(attackerInputValue, defenderInputValue) {
  for (var getCharacterName in characters) {
    // assigning values to the selected attacker from user input
    if(getCharacterName === attackerInputValue){
      selectedAttacker.name = characters[attackerInputValue].name; 
      selectedAttacker.maxHealth = characters[attackerInputValue].maxHealth; 
      selectedAttacker.defence = characters[attackerInputValue].defence;
      selectedAttacker.attack = characters[attackerInputValue].attack;

      
      if(offenceVeteran.checked){
        selectedAttacker.maxHealth += 5;
      }
      if(offenceInputHP.value){
        selectedAttacker.inputHealth = parseInt(offenceInputHP.value);
      }
      if(offenceBoosted.checked){
        selectedAttacker.attack = selectedAttacker.attack * 1.5;
      }
    }


    if( getCharacterName === defenderInputValue){
        // assigning values to the selected defender from user input
     selectedDefender.name = characters[defenderInputValue].name; 
     selectedDefender.maxHealth = characters[defenderInputValue].maxHealth; 
     selectedDefender.defence = characters[defenderInputValue].defence;
     selectedDefender.attack = characters[defenderInputValue].attack;


     if(defenceVeteran.checked){
      selectedDefender.maxHealth += 5;
      }
      if(defenceInputHP.value){
        selectedDefender.inputHealth = parseInt(defenceInputHP.value);
      }
      if(defencePoison.checked){
        selectedDefender.defence = selectedDefender.defence * .8; 
      }
      if(defenceBonusNormal.checked && !defencePoison.checked){
        selectedDefender.defence = selectedDefender.defence * 1.5;
      }
      if(defenceBonusWall.checked && !defencePoison.checked){
        selectedDefender.defence = selectedDefender.defence * 4;
      }
    }
  }

  if(selectedAttacker.name.toLowerCase() != attackerInputValue){
   console.log('Selected attacker data was not assigned');
  }
  if(selectedDefender.name.toLowerCase() != defenderInputValue){
   console.log('Selected defender data was not assigned');
  }
}

function modifyResultsFromUserInput() {

}

resultsButton.addEventListener('click', () => {
 //  assign selected attacker
 // assign selected defender
 var selectedAttackerInputValue = offenceSelectInput.value;
 var selectedDefenderInputValue = defenceSelectInput.value;
 // function to get data
 getCharData(selectedAttackerInputValue, selectedDefenderInputValue);
 //  read check boxes for modifiers
 // populate and display results
  console.log(`You have chosen ${selectedAttacker.name} for the offence`, selectedAttacker);
  console.log(`You have chosen ${selectedDefender.name} for the defence`, selectedDefender);
  
});


   


  
// create new function called calculateBattle 

function calculateBattle() {

    // list all variables needed
    // calculate results
    // create results object
    // display results in the DOM
}

/*
selected character
*/


/* 


attackForce = attacker.attack * (attacker.health / attacker.maxHealth)

defenseForce = defender.defense * (defender.health / defender.maxHealth) * defenseBonus

totalDamage = attackForce + defenseForce

attackResult = round((attackForce / totalDamage) * attacker.attack * 4.5)

defenseResult = round((defenseForce / totalDamage) * defender.defense * 4.5)


*/






// var offenceSelectInput = document
//       .getElementById('offence');
// var defenceSelectInput = document
//       .getElementById('defence');


  