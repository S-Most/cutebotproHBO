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
    if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_14) || CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_12)) {
        // Hard right
        CutebotPro.pwmCruiseControl(50, 20)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_11) || CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_8)) {
        // hard left
        CutebotPro.pwmCruiseControl(20, 50)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_2) || false) {
        // slow right
        CutebotPro.pwmCruiseControl(50, 40)
    } else if (CutebotPro.getGrayscaleSensorState(TrackbitStateType.Tracking_State_3) || false) {
        // slow left
        CutebotPro.pwmCruiseControl(40, 50)
    }
})
