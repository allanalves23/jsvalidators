/**
 * @function
 * @author Allan Wanderley Alves
 * @module jsvalidator
 * @description Some functions for validate some data types.
 */
class JsValidator {
    /**
     * @function
     * @description Verify if value exists.
     * @param {String | Array | Boolean | Number} value String, Arrays, Boolean, etc.
     * @param {String} msg A Throwable message.
     */
    exists(value, msg = "This value doesn't exists") {
      if (!value && typeof value !== 'number' && typeof value !== 'boolean') throw msg
      if (Array.isArray(value) && value.length === 0) throw msg
      if (typeof value === 'string' && !value.trim()) throw msg
    }
  
    /**
     * @function
     * @description Verify if value doesn't exists.
     * @param {String | Array | Boolean | Number} value String, Arrays, Boolean, etc.
     * @param {String} msg A Throwable message.
     */
    notExists(value, msg = 'This value exists') {
      try {
        exists(value, msg)
      } catch (msg) {
        return
      }
  
      throw msg
    }
  
    /**
     * @function
     * @description Validates a password.
     * @param {String} password A string password not ciphered.
     * @param {Number} length Maximum size for the password.
     * @param {String} msg A Throwable message.
     */
    validatePassword (password, length, msg = 'This password is weak') {
      const _pass = password.trim() 
      exists(_pass, msg)
      if (_pass.length < length) throw msg || `The password should have ${length} characters`
      if (_pass.includes(' ')) throw msg || "The password can't had white spaces"
    }
  
    /**
     * @function
     * @description Validates an email.
     * @param {String} email The email.
     * @param {String} msg A Throwable message.
     */
    validateEmail(email, msg = 'This email is not correct') {
      exists(email, msg)
      if (!(email.includes('@') && email.includes('.'))) throw msg
    }
  
    /**
     * @function
     * @description Validates a date with a minimum and maximum acceptable year.
     * @param {String | Date} date The Date.
     * @param {Number} minYear Minimum year.
     * @param {Number} minYear Maximum year.
     * @param {String} msg A Throwable message.
     */
    validateDate (date, msg = 'Invalid date', minYear = new Date().getFullYear() - 100, maxYear = new Date().getFullYear()) {
      exists(date, msg)
      const _date = new Date(date);
      const _year = _date.getFullYear()
      if (_year < minYear) throw msg || `Dates below ${minYear} is not accepted`
      if (_year > maxYear) throw msg || `Dates above ${maxYear} is not accepted`
    }
  
    /**
     * @function
     * @description Validates a String size.
     * @param {String} value Some value to be tested.
     * @param {Number} length String size.
     * @param {Array<['smaller', 'biggerOrEqual', 'bigger']>} method Method comparator.
     * @param {String} msg A Throwable message.
     */
    validateLength (value, length, method, msg) {
      let type = method
      if (!method || (method !== 'bigger' && method !== 'smaller' && method !== 'biggerOrEqual')) {
        type = 'bigger'
      }
  
      switch (type) {
        case 'bigger': {
          if (value.trim().length > length) throw msg || `Máximo permitido ${length} caracteres`
          break
        }
        case 'smaller': {
          if (value.trim().length < length) throw msg || `Mínimo permitido ${length} caracteres`
          break
        }
        case 'biggerOrEqual': {
          if (value.trim().length >= length) throw msg || `Máximo permitido ${length - 1} caracteres`
          break
        }
      }
    }
  }
  
module.exports = new JsValidator();