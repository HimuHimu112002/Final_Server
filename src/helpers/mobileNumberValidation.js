function mobileVelidation(mobile) {
    const mobilePattern = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/
    return mobilePattern.test(mobile)
}
module.exports = mobileVelidation