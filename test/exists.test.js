const assert = require('assert')
const jsvalidators = require('../index')

describe('Exists elements', () => {
    it('in Array', () => {
        try {
            const _validNumbersArray = [10, 12, 15]
            const _validObjectsArray = [{age: 10}, {age: 12}, {age: 15}]
            const _validStringsArray = ['spencer', 'oliver', 'agatha', 'allan']
            const _validBooleanArray = [true, false, true, true]
            const _validArrayArray = [[12,23], ['barbara', 'allan'], [[12,23], {key: 'key'}]]
            
            jsvalidators.exists(_validNumbersArray, "Not exists value in array numbers")
            jsvalidators.exists(_validObjectsArray, "Not exists value in array objects")
            jsvalidators.exists(_validStringsArray, "Not exists value in array strings")
            jsvalidators.exists(_validBooleanArray, "Not exists value in array boolean")
            jsvalidators.exists(_validArrayArray, "Not exists value in array of arrays")

            assert.ok('ok')
        } catch (errMessage) {
            assert.fail(errMessage)
        }
    });

    it('in String', () => {
        try {
            const _value = 'Sample string'
            jsvalidators.exists(_value, 'Not exists value in string test')
            assert.ok('ok')
        } catch (errMessage) {
            assert.fail(errMessage)
        }
    })
});

describe('Not exists elements', () => {
    it('in Array', () => {
        try {
            const _invalidArray = []
            jsvalidators.exists(_invalidArray, "The array is empty")
            assert.fail('not captured error')
        } catch (errMessage) {
            if(errMessage === 'The array is empty'){
                assert.ok(`ok: ${errMessage}`)
            }else {
                assert.fail(errMessage)
            }
        }
    })

    it('in String', () => {
        try {
            const _value = ''
            jsvalidators.exists(_value, 'The string value is not defined')
            assert.fail('not captured error')
        } catch (errMessage) {
            if(errMessage === 'The string value is not defined') {
                assert.ok(`ok: ${errMessage}`)
            }else{
                assert.fail(errMessage)
            }
        }
    })
})