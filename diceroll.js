function randomizeDice() {
    let x = [];
    let numsUsed = {};

    for (let i = 1; i < 7; i++) {
        numsUsed[i] = 0;
    }

    for (let i = 0; i < 6; i++) {
        let temp = (Math.random() * 6 + 1) | 0;

        if (numsUsed[temp] > 2) {
            i--;
        } else {
            x.push(temp);
            numsUsed[temp]++;
        }
    }

    return x;
}

function roll(dice) {
    return dice[(Math.random() * 6) | 0];
}