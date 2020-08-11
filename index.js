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
     * 
     * @returns {Boolean} True if exists any element.
     */
    exists(value) {
      if (!value && typeof value !== 'number' && typeof value !== 'boolean') return false
      if (Array.isArray(value) && value.length === 0) return false
      if (typeof value === 'string' && !value.trim()) return false
      
      return true;
    }
  
    /**
     * @function
     * @description Verify if value doesn't exists.
     * @param {String | Array | Boolean | Number} value String, Arrays, Boolean, etc.
     * 
     * @returns {Boolean} True if **not** exist any element.
     */
    notExists(value) {
      return !this.exists(value)
    }
  
    /**
     * @function
     * @description Validates a password.
     * @param {String} password A string password not ciphered.
     * @param {Number} length Maximum size for the password.
     * 
     * @returns {Boolean} True if password is valid.
     */
    passwordIsValid (password, length) {
      const _pass = password.trim() 
      if(this.notExists(_pass)) return false

      if (_pass.length < length) return false
      if (_pass.includes(' ')) return false

      return true
    }
  
    /**
     * @function
     * @description Validates an email.
     * @param {String} email The email.
     * 
     * @returns {Boolean} True if email is valid.
     */
    emailIsValid(email) {
      this.exists(email, msg)
      return !(email.includes('@') && email.includes('.'))
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
      this.exists(date, msg)
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