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

let startTime = ""
let startHours = ""
let minutes = ""
 
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

function characterLoop(characters: string, start: number, end: number) {
    let part = ""
    for (let i = start; i <= end; i++) {
        part = part + characters.charAt(i)
    }
    return part
}

function splitApart(baseText: string, first: number) {
    if (first == 1) {
        return characterLoop(baseText, 0, 1)
    } else if (first == 2) {
        return characterLoop(baseText, 2, 4)

    } else {
        return characterLoop(baseText, 6, 10)
    }

}
    
function setUp(startwithmil: boolean) {
    let message = ""
    let lettercount = 0
    if (startwithmil) {
        message = "Enter the time in millitary time:"
        game.splash("Enter time in this format: XX:XX")
        lettercount = 5
    } else {
        message = "What time is it?"
        game.splash("Enter time in this format: XX:XX x.m.")
        lettercount = 10
    }
    startTime = game.askForString(message, lettercount)
    startHours = splitApart(startTime, 1)
    minutes = splitApart(startTime, 2)

}



let choice = game.askForNumber("1 for Military to Regular, 2 for Regular to Military", 1)

if (choice == 1) {

    setUp(true)
    let ampm = findAMPM(parseInt(startHours))
    let finalHoursReg = finalHours(parseInt(startHours))
    let finalTime = finalHoursReg + minutes + " " + ampm
    game.splash(finalTime)
    
} else {
    setUp(false)
    let ampmboolean = true
    
    if (splitApart(startTime, 3) == "p.m.") {
        ampmboolean = false
    }
    
    let milHours = regToMil(parseInt(startHours), ampmboolean)
    let milTime = milHours + minutes
    game.splash(milTime)


}