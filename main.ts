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

function regToMil(hours: number, am: boolean) {

    if (am) {

        if (hours == 12) {
            return "00"
        } else {
            return hours + 12
        }

    } else {

        if (hours == 12) {
            return "12"
        } else {
            return hours + 12
        }
    }
}

function splitApart(baseText: string, first: boolean) {
    let part = ""
    if (first) {
        part = baseText.charAt(0) + baseText.charAt(1)
        return part
    } else {
        part = baseText.charAt(2) + baseText.charAt(3) + baseText.charAt(4)
        return part

    }

}
    


if (game.ask("Military to Regular?")) {

    let startTime = game.askForString("Enter the time in millitary time:", 5)
    let startHours = splitApart(startTime, true)
    let minutes = splitApart(startTime, false)
    let ampm = findAMPM(parseInt(startHours))
    let finalHoursReg = finalHours(parseInt(startHours))
    let finalTime = finalHoursReg + minutes + " " + ampm
    game.splash(finalTime)
    
} else {

    if (game.ask("Regular to Military?")) {
        let regHours = game.askForNumber("Hours?", 2)
        let regminutes = game.askForString("Minutes", 2)
        let finalampm = game.ask("A for a.m., B for p.m.")
        let milHours = regToMil(regHours, finalampm)
        let milTime = milHours + ":" + regminutes
        game.splash(milTime)
    }

}
