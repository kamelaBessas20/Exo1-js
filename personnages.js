class Personnages {
    constructor(name, healthPoints, weapon, type) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.weapon = weapon;
        this.type = type;
    }
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


function buildPersonnages() {
    return personnage = new Personnages(prompt('entrer le nom de votre personnage'),
        parseInt(prompt('entrer le nombre de points de vie pour votre personnage')),
        prompt('entrer larme de votre personnage : Epee/Gourdin'), prompt('votre personnage appartient a quelle equipe hero/monstre'));
}

function buildTeam () {
    let teams =[];
    for ( let i = 1; i<= 2; i++) {
        teams.push(buildPersonnages());
    }
    return teams;
}

function receive(defender) {
    let dammage = 0;
    for (let i=0; i< defender.length; i++) {
        console.log(defender[i]+' défend');
        dammage = defender[i].healthPoints - 5;
        console.log(defender[i].name + ' a perdu 5 points son nombre de Pvs est : ' + dammage);
    }
    return dammage;
}

function getRandom(array) {
    return  array[Math.floor(Math.random() * array.length)];
}

function attack(attacker) {
    if(attacker.healthPoints > 0) {
        console.log(attacker.name + ' attaque');
    } else {
        console.log(attacker.name + ' na plus de Pvs il rejoint la cimetiere')
    }
}

function main() {
    let team = buildTeam();
    console.log(team);
    let hero = team.filter(team => team.type === 'hero');
    console.log(hero);
    let monster = team.filter(team => team.type === 'monstre');
    console.log(monster);
    random = getRandom(team);
    let response = prompt('voulez vous jouer un tour oui/non');
        if (response === 'oui') {
            attack(random);
            switch (random.type) {
                case 'monstre':
                    pvsHeros = receive(hero);
                    console.log('hello hero');
                    break;
                case 'hero':
                    pvsHeros = receive(monster);
                    console.log('hello monstre');
                    break;
                default:
                    console.log('desole cette equipe nexiste pas');
            }
        } else {
            console.log('pas grave la prochaine fois')
        }

}
main();

























