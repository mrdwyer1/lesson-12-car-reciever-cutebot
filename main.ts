radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
})
let yValue = 0
let xValue = 0
radio.setGroup(1)
basic.forever(function () {
    cuteBot.motors(yValue + xValue, yValue - xValue)
})
