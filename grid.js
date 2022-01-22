let pieces = [];
let diceRoll = 0;

class Piece {
    constructor(index, color, button) {
        this.index = index;
        this.color = color;
        this.location = -1;
        this.button = button;
        this.clickable = false;
        this.button.onclick = this.move(diceRoll);
        this.coords = this.find_coordinates(index, color, location);
    }

    find_coordinates(index, color, location) {
        let x = 0;
        let y = 0;
        if (location === -1) {
            let colors = ["red", "blue", "yellow", "green"];
            let colorDis = [[0, 0], [11, 0], [11, 11], [0, 11]];
            let indexDis = [[0.5, 0.5], [2.5, 0.5], [2.5, 2.5], [0.5, 2.5]];

            x = indexDis[index][0] + colorDis[colors.indexOf(color)][0];
            y = indexDis[index][1] + colorDis[colors.indexOf(color)][1];
        } else {

        }


        return [x, y]
    }

    updateButton() {
    }

    move(diceRoll) {
        if (this.location === -1) {
            if (diceRoll !== 6) {
                return false;
            }
            this.location = 0;
        } else {
            this.location += diceRoll;
            if (this.location === 4) {
                this.location = 16;
            } else if (this.location === 17) {
                this.location = 29;
            } else if (this.location === 30) {
                this.location = 42;
            } else if (this.location === 43) {
                this.location = 3;
            } else if (this.location > 56) {
                this.location = 112 - this.location;
            } else if (this.location === 56) {
                this.location = -2;
            }
        }
        return true;
    }
}


