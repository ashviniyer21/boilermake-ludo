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
        let colors = ["red", "blue", "yellow", "green"];
        if (location === -1) {
            let colorDis = [[0, 0], [11, 0], [11, 11], [0, 11]];
            let indexDis = [[0, 0], [3, 0], [3, 3], [0, 3]];

            x = indexDis[index][0] + colorDis[colors.indexOf(color)][0];
            y = indexDis[index][1] + colorDis[colors.indexOf(color)][1];
        } else {
            if (color === "red") {
                if (-1 < location < 4) {
                    x = location;
                    y = 4;
                } else if (3 < location < 8) {
                    x = 4;
                    y = 7 - location;
                } else if (7 < location < 13) {
                    x = location - 3;
                    y = 0;
                } else if (12 < location < 17) {
                    x = 10;
                    y = location - 13;
                } else if (16 < location < 21) {
                    x = location - 6;
                    y = 4;
                } else if (20 < location < 26) {
                    x = 14;
                    y = location - 16;
                } else if (25 < location < 30) {
                    x = 40 - location;
                    y = 10;
                } else if (29 < location < 34) {
                    x = 10;
                    y = location - 19;
                } else if (33 < location < 39) {
                    x = 42 - location;
                    y = 14;
                } else if (38 < location < 43) {
                    x = 4;
                    y = 53 - location;
                } else if (42 < location < 47) {
                    x = 46 - location;
                    y = 10;
                } else if (46 < location < 50) {
                    x = 0;
                    y = 56 - location;
                } else if (49 < location < 56) {
                    x = location - 49;
                    y = 7;
                } else if (location === 56) {
                    let colorDis = [[0, 0], [3, 0], [3, 3], [0, 3]];
                    let indexDis = [[5, 5], [6, 5], [6, 6], [5, 6]];

                    x = indexDis[index][0] + colorDis[colors.indexOf(color)][0];
                    y = indexDis[index][1] + colorDis[colors.indexOf(color)][1];
                }
            }
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


