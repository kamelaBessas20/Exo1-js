class Personnages {
    constructor(name, healthPoints, weapon, type) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.weapon = weapon;
        this.type = type;
    }

}
    function receive(damage) {
        console.log(this.damage + 'has received.');
    }


class Weapon {
    constructor(weaponName, damagePoints, length, weight) {
        this.weaponName = weaponName;
        this.damagePoints = damagePoints;
        this.length = length;
        this.weight = weight;
    }


}

let sword = new  Weapon('Excalibur', 0, 50, 1000);
let club =  new Weapon('L\'abattoir', 0, 60, 1500);


let hero = new Personnages('Arthur', 30, sword, 'hero');
let monster = new Personnages('Grum', 25, club, 'monster');


function buildPersonnages(){
    return personnage = new Personnages(prompt('entrer le nom de votre personnage'),
        prompt('entrez le nombre de point de vie pour votre personnage'),
        prompt('entrez larme de votre personnage : Epée/Gourdin'), prompt('votre personnage appartient à quelle équipe'));


}

function main () {
    let nbPersonnage = prompt('entrez le nombre de personnage que vous voulez créer');
    let teams =[];
    for( let i = 1; i<= nbPersonnage; i++){
        teams.push(buildPersonnages());
    }
    return teams;
}



function getRandom(array){
    return  array[Math.floor(Math.random() * array.length)];

}

function teams(){
    let team = main();
    let heros = team.filter(team => team.type ==='heros');
    let monsters = team.filter(team => team.type ==='monstre');
    console.log(heros);
    console.log(monsters);
    let attacker = [heros, monsters];
    let response = prompt('voulez vous jouer un tour oui/non');
    let random = getRandom(attacker);
    console.log(random);
        while(response && random.healthPoints > 0 ){
        if(random = attacker[0]){
            monsters.healthPoints = monsters.healthPoints  - 5;
        }else{
            heros.healthPoints = heros.healthPoints - 5;
        }

        }

        if( monsters.healthPoints <= 0){
           console.log(monsters.name + 'rejoint la cimetière' + heros.name+ 'a gagné avec'+ heros.healthPoints);
        }else{
            console.log(heros.name + 'rejoint la cimetière' + monsters.name+ 'a gagné avec'+ monsters.healthPoints);
        }







}

let team = teams();








