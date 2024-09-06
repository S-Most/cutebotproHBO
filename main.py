basic.show_leds("""
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    """)
basic.pause(2000)
basic.clear_screen()

def on_forever():
    CutebotPro.trackbit_state_value()
    if CutebotPro.get_grayscale_sensor_state(TrackbitStateType.TRACKING_STATE_0):
        CutebotPro.full_speed_ahead()
    else:
        CutebotPro.extend_motor_stop()
basic.forever(on_forever)
