/**
 * @function
 * @author Allan Wanderley Alves
 * @module validatorz
 * @description Some functions for validate some data types.
 */
class Validatorz {
    /**
     * @function
     * @description Verify if value exists.
     * @param {String | Array | Boolean | Number} value String, Arrays, Boolean, etc.
     * @param {String} msg A Throwable message.
     */
    exists(value, msg = "This value doesn't exists") {
      if (!value && typeof value !== 'number') throw msg
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
     * @description Validates a birth date with a minimum and maximum acceptable year.
     * @param {String} date A Date in String format.
     * @param {Number} minYear Minimum year.
     * @param {String} msg A Throwable message.
     */
    validateBirthDate (date, minYear, msg) {
      exists(date, msg)
      const aux = date.split('-')
      if (aux[0] < minYear) throw `Anos menores de ${minYear} não são aceitos`
      if (aux[0] >= app.moment().get('year')) {
        throw msg || 'Datas maiores que hoje não são permitidas'
      }
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
  
module.exports = new Validatorz();