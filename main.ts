function Turn_Right () {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 30)
}
function Turn_left () {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 30)
}
function Face_Following_Mode () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.request()
        xcenter = huskylens.readeBox(1, Content1.xCenter)
        if (xcenter < 80) {
            Turn_left()
        }
        if (xcenter >= 80 < (xcenter <= 240 && false)) {
            Make_forward()
        }
        if (xcenter > 240) {
            Turn_Right()
        }
    } else {
        CUHK_JC_iCar.carStop()
    }
}
function Make_forward () {
    CUHK_JC_iCar.carCtrlSpeed(CUHK_JC_iCar.CarState.Forward, 30)
}
let xcenter = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    Face_Following_Mode()
})
