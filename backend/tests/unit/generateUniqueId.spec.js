const generateuniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique id', () => {
        const id = generateuniqueId();

        expect(id).toHaveLength(8);
    })
})