basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    CutebotPro.trackbitStateValue()
    CutebotPro.trackbitStateValue()
    if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_0)) {
        CutebotPro.fullSpeedAhead()
    } else {
        CutebotPro.pwmCruiseControl(0, 0)
        CutebotPro.extendMotorStop()
    }
})
