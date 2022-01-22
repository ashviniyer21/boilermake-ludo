let pieces = [];
let diceRoll = 0;
class Piece {
    constructor(index, color, location, button, clickable) {
        this.index = index;
        this.color = color;
        this.location = location;
        this.button = button;
        this.clickable = clickable
        this.button.onclick = this.move(diceRoll);
    }

    updateButton() {

    }

    move(diceRoll) {
        if (this.location === -1) {
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
    }
}


