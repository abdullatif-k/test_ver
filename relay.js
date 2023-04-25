export const mobileYcenter = 6

export const textInSUIMoon = ""

// export const relaysizes = {
//     relaywidth: window.innerWidth,
//     relayheight: window.innerHeight
// }

export const fieldColors = {
    insideColor: '#36037c',
    outsideColor: '#110118',
    warpColor: '#9c1686',
    warpMultiplier: 0.6
}

export function switchOff(isMobile) {
    if (isMobile) {
    var x = document.querySelector(".relay-switch");
    console.log("switchOff Mobile found " + x);
    if (x == null) return
    x.classList.add("relay-fade");
    }
}

export function switchOn(isMobile) {
    if (isMobile) {
    var x = document.querySelector(".relay-switch");
    console.log("switchOn Mobile found " + x);
    if (x == null) return
    x.classList.remove("relay-fade");
    }
}

export function blackholeXposition(isMobile) {
    if (isMobile) {
    var x = document.querySelector(".touchtointeract");
    console.log("TouchToInteract on Mobile found" + x);
    if (x == null) return
    x.classList.add("center-absolute");
    }
}