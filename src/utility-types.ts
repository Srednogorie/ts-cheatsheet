interface Starship {
    name: string;
    enableHyperJump: boolean
}

// Pick
type StarshipNameOnly = Pick<Starship, 'name'>

// Omit
type StarshipWithoutName = Omit<Starship, 'name'>

// Partial
const updateStarship = (id: number, starship: Partial<Starship>) => {}
updateStarship(1, {name: "Explorer"})

// Record
const starship: Record<string, Starship> = {
    Explorer1: {
        name: "Explorer1",
        enableHyperJump: true
    },
    Explorer2: {
        name: "Explorer2",
        enableHyperJump: false
    }
}

// Exclude
type AvailableDrinks = 'Coffee' | 'Tea' | 'Orange Juice' | 'Lemonade';
let JohnsDrink: AvailableDrinks;
JohnsDrink = 'Coffee';
type DrinksJaneDoesntLike = 'Coffee' | 'Orange Juice';
let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike>;
JanesDrink = 'Tea';

// Extract
// type DrinksJaneLikes = "Tea" | "Lemonade" | "Mojito";
// let JanesDrinks2 = Extract<AvailableDrinks, DrinksJaneDoesntLike>;

// NonNullable
interface StarshipProperties {
    color?: 'blue' | 'red' | 'green'
}
function paintStarship(id: number, color: NonNullable<StarshipProperties['color']>) {
    return {id, color}
}
paintStarship(1, 'blue');
// paintStarship(1, undefined);

// Return Type
type PaintStarshipReturn = ReturnType<typeof paintStarship>;


