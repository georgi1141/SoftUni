function dungeonestDark(input) {
    let str = input[0];
    let [health, coins, i] = [100, 0, 0];
    let counter = 0;
    for (i; i < str.length; i++) {
        let [buff, item, num, healthStep] = ['', '', 0, 0];
        let current = str[i];
        // string to | 
        while (current !== '|') {
            if (current === ' ') {
                item = buff;
                buff = '';
            }
            buff += current;
            // increase i
            current = str[++i];
            // avoiding infinity loop
            if (i >= str.length) {
                break;
            }
        }
        // counting rooms
        counter++;
        num = Number(buff);
        // item checks    
        if (item === 'potion') {
            health += num;
            if (health > 100) {
                healthStep = num - (health - 100);
                health = 100;
            } else if (health <= 100) {
                healthStep = num;
            }
            console.log(`You healed for ${healthStep} hp.\nCurrent health: ${health} hp.`);
        }
        else if (item === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.\nBest room: ${counter}`);
                return;
            }
        }
    }
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])