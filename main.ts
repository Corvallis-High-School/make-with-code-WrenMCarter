/**
 * This is the main file for your project.
 *
 * Create images, tilemaps, animations, and songs using the
 * asset explorer in VS Code. You can reference those assets
 * using the tagged templates on the assets namespace:
 *
 *     assets.image`myImageName`
 *     assets.tilemap`myTilemapName`
 *     assets.tile`myTileName`
 *     assets.animation`myAnimationName`
 *     assets.song`mySongName`
 *
 * New to MakeCode Arcade? Try creating a new project using one
 * of the templates to learn about Sprites, Tilemaps, Animations,
 * and more! Or check out the reference docs here:
 *
 * https://arcade.makecode.com/reference
 */

game.onUpdate(() => {
    // Code in this function will run once per frame. MakeCode
    // Arcade games run at 30 FPS
});


function finalHours(hours: number) {
    if ((hours % 12) == 0) {
        return 12
    } else {
        return hours % 12 
    }
}

function findAMPM(hours: number) {
      if (hours > 11) {
        return "p.m."
    } else {
        return "a.m."
    }
}


if (game.ask("Military to Regular?")) {
    let startHours = game.askForNumber("Hours?", 2)
    let minutes = game.askForString("Minutes", 2)
    let ampm = findAMPM(startHours)
    let finalTime = finalHours(startHours) + ":" + minutes + " " + ampm
    game.splash(finalTime)
    
} else {
    if (game.ask("Regular to Military?")) {
        let startHours = game.askForNumber("Hours?", 2)
        let minutes = game.askForString("Minutes", 2)
        let finalampm = game.ask("A for a.m., B for p.m.")

        
    }
}
