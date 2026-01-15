package com.p2pcar.util

import com.p2pcar.exception.BusinessException
import com.p2pcar.exception.ErrorCode

object ValidationUtil {

    fun validatePhoneNumber(phone: String): Boolean {
        val phoneRegex = Regex("^1[3-9]\\d{9}$")
        return phone.matches(phoneRegex)
    }

    fun validatePassword(password: String): Boolean {
        return password.length >= 6 && password.length <= 50
    }

    fun validateIdCard(idCard: String): Boolean {
        val idCardRegex = Regex("^[1-9]\\d{5}(18|19|20)\\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\\d|3[01])\\d{3}[\\dXx]$")
        return idCard.matches(idCardRegex)
    }

    fun validateLicensePlate(plate: String): Boolean {
        val plateRegex = Regex("^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-Z0-9]{5,6}$")
        return plate.matches(plateRegex)
    }

    fun checkPhoneNumber(phone: String) {
        if (!validatePhoneNumber(phone)) {
            throw BusinessException(ErrorCode.BAD_REQUEST, "Invalid phone number format")
        }
    }

    fun checkPassword(password: String) {
        if (!validatePassword(password)) {
            throw BusinessException(ErrorCode.BAD_REQUEST, "Password must be between 6 and 50 characters")
        }
    }
}
