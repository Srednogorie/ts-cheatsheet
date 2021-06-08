"use strict";
// Partial
const updateStarship = (id, starship) => { };
updateStarship(1, { name: "Explorer" });
// Record
const starship = {
    Explorer1: {
        name: "Explorer1",
        enableHyperJump: true
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperJump: false
    }
};
let JohnsDrink;
JohnsDrink = 'Coffee';
let JanesDrink;
JanesDrink = 'Tea';
function paintStarship(id, color) {
    return { id, color };
}
paintStarship(1, 'blue');
