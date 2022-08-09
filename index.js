// Quick n' Dirty
// Defender 15 1 3
// Mind_Bender 0 1
// Archer 10 2 1
// Catapult 10 4 0
// Giant 40 5 4
// Hexapod 5 3 1
// Doomux 20 4 2
// Kiton 20 1 3
// Raychi 15 3 2
// Phychi 5 1 1
// Exida 10 3 1
// Centipede 20 4 3
// Shaman 10 1 1
// Ice_Fortress 20 4 3
// Gaami 30 4 4
// Mooni 10 0 2
// Ice_Archer 10 0.1 1
// Amphibian 10 2 1
// Tridention 15 3 1
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
    },
    defender: {
      name: "Defender",
      maxHealth: 15,
      attack: 1,
      defence: 3,
    }
  }

// picture variables

  // var warrior = document.createElement('img');
  // warrior.src = "IMG/Attackers/Warrior.png";
  // var imageDiv = document.getElementById('icon');

  // function uploadImage(warrior) {
  //   document.appendChild(warrior);
  // }


  // var attackerImages = ["IMG/Attackers/Warrior.png","IMG/Attackers/Rider.png","IMG/Attackers/Swordsman.png"];

  // function printImages(images){
  //   for(var i =0; i< images.length; i++){
  //    images[i].appendChild(results_list)
  //   }
  // }
  
  // printImages(attackerImages);
 

  // const selectedAttackerImage = attackerImages.find(generateImage);

  // function generateImage(item) {
  //   return item === selectedAttacker.name;
  // }


  // global variables
  var selectedAttackerInputValue,selectedDefenderInputValue;
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

  var results_list = document.getElementById('results-grid');

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
    defence_Bonus: 1,
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
// new function to load images from selected input
// getCharImages(attackerInputValue, defenderInputValue){
//   for(var getCharacterImage in characters){
//     if(getCharacterImage === attackerInputValue){
//         var generated_Image = 
//     }
//   }
// }

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
        selectedAttacker.isBoosted = true;
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
        selectedDefender.defence_Bonus = .8; 
      }
      if(defenceBonusNormal.checked && !defencePoison.checked){
        selectedDefender.defence_Bonus = 1.5;
      }
      if(defenceBonusWall.checked && !defencePoison.checked){
        selectedDefender.defence_Bonus = 4;
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

// function modifyResultsFromUserInput() {

// }





resultsButton.addEventListener('click', () => {
 //  assign selected attacker
 // assign selected defender
 selectedAttackerInputValue = offenceSelectInput.value;
 selectedDefenderInputValue = defenceSelectInput.value;
 // function to get data
 getCharData(selectedAttackerInputValue, selectedDefenderInputValue);
 //  read check boxes for modifiers
 // populate and display results
  console.log(`You have chosen ${selectedAttacker.name} for the offence`, selectedAttacker);
  console.log(`You have chosen ${selectedDefender.name} for the defence`, selectedDefender);

  // adds html and css display for offence and defence

  results_list.className ="grid";
  results_list.innerHTML = "";
  results_list.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="inline-block"> unit </div>
    <div class="inline-block"> Original HP </div>
    <div class="inline-block"> New HP</div>
    <div class="inline-block"> Status </div> 

    <div class="inline-block"> ${selectedAttacker.name}(Offense) </div>
    <div class="inline-block">${offenceInputHP.value}</div>
    <div class="inline-block" id="offence-remaining-hp">Insert remaining HP here</div>
    <div class="inline-block" id="offence-status">Insert status here</div>
    <div class="inline-block"> ${selectedDefender.name}(Defense) </div> 
    <div class="inline-block">${defenceInputHP.value}</div>
    <div class="inline-block" id="defence-remaining-hp" >Insert remaining HP here</div>
    <div class="inline-block" id="defence-status">Insert status here</div>
    `
  );
  
calculateBattle(offenceInputHP.value);

});


   


  
// create new function called calculateBattle 

function calculateBattle(selectedAttackerInputValue,selectedDefenderInputValue) {

    // list all variables needed
    // calculate results
    // create results object
    // display results in the DOM

    /**	totaldam = attforce + defforce;
		res = Math.round(attforce / totaldam * att * 4.5); 
    attforce = att * (atthp / attmaxhp);
		defforce = def * (defhp / defmaxhp);

    */
    if(selectedAttacker.isBoosted){
      selectedAttacker.attack = selectedAttacker.attack + .5;
    }
    var attackForce = selectedAttacker.attack * (selectedAttacker.inputHealth / selectedAttacker.maxHealth);
    var defenceForce = (selectedDefender.defence * (selectedDefender.inputHealth / selectedDefender.maxHealth)) * selectedDefender.defence_Bonus;
    var totalDamage = attackForce + defenceForce;

    var attackResult = Math.round(attackForce / totalDamage * selectedAttacker.attack * 4.5);
    var defenceResult = Math.round(defenceForce / totalDamage * selectedDefender.defence * 4.5);

    // var result = Math.round(attackForce / totalDamage * selectedAttacker.attack * 4.5);

    var attacker_result_HP = document.getElementById('offence-remaining-hp');
    var defender_result_HP = document.getElementById('defence-remaining-hp');

     // status variables
     var offense_status_HP = selectedAttacker.inputHealth - defenceResult;
     var defense_status_HP = selectedDefender.inputHealth - attackResult;
     var attackerStatus = document.getElementById('offence-status');
     var defenderStatus = document.getElementById('defence-status');

    defender_result_HP.innerHTML = selectedDefender.inputHealth - attackResult;

    if(defense_status_HP <= 0){
      attacker_result_HP.innerHTML = offenceInputHP.value;
    }
    else{
      attacker_result_HP.innerHTML = selectedAttacker.inputHealth - defenceResult;
    }

   


   
 
    if(offense_status_HP > 0){
      attackerStatus.innerHTML = 'Survived';
    }
    else{
      attackerStatus.innerHTML = 'Defeated';
    }
    if(defense_status_HP > 0){
      defenderStatus.innerHTML = 'Survived';
    }
    else{
      defenderStatus.innerHTML = 'Defeated';
    }
   
}


/*
Math
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


  