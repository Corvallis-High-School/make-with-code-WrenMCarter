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
    
}


if (game.ask("Military to Regular?")) {
    let startHours = game.askForNumber("Hours?")
    let minutes = game.askForString("Minutes")
    let finalHours = startHours % 12
    let finalTime = finalHours + ":" + minutes
    game.splash(finalTime)
    
} else {
    if (game.ask("Regular to Military?")) {

    }
}
