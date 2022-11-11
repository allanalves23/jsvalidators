const assert = require('assert')
const jsvalidators = require('../src/index')

describe('Exists elements', () => {
    it('in Array', () => {
        const _validNumbersArray = [10, 12, 15]
        const _validObjectsArray = [{age: 10}, {age: 12}, {age: 15}]
        const _validStringsArray = ['spencer', 'oliver', 'agatha', 'allan']
        const _validBooleanArray = [true, false, true, true]
        const _validArrayArray = [[12,23], ['barbara', 'allan'], [[12,23], {key: 'key'}]]
        
        if (!jsvalidators.exists(_validNumbersArray)) {
            assert.fail("Not exists value in array numbers")
        }

        if (!jsvalidators.exists(_validObjectsArray)) {
            assert.fail("Not exists value in array objects")
        }

        if (!jsvalidators.exists(_validStringsArray)) {
            assert.fail("Not exists value in array strings")
        }

        if (!jsvalidators.exists(_validBooleanArray)) {
            assert.fail("Not exists value in array boolean")
        }

        if (!jsvalidators.exists(_validArrayArray)) {
            assert.fail("Not exists value in array of arrays")
        }

        assert.ok('ok')
    });

    it('in String', () => {
        const _value = 'Sample string'
        if (!jsvalidators.exists(_value)) {
            assert.fail('Not exists value in string test')
        }
        
        assert.ok('ok')
    })
});

describe('Not exists elements', () => {
    it('in Array', () => {
        const _invalidArray = []
        if (!jsvalidators.exists(_invalidArray)) {
            assert.ok("The array is empty")
        } else {
            assert.fail('The array is not empty')
        }
    })

    it('in String', () => {
        const _value = ''
        if (!jsvalidators.exists(_value)) {
            assert.ok('The string value is not defined')
        } else {
            assert.fail('The string value is defined')
        }
    })
})