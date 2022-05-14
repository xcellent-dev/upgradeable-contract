const { expect } = require('chai');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

// Load compiled artifacts
const Box = artifacts.require('Box');

contract ('Box', function([owner, other]) {
    // Use large integers ('big numbers')
    const value = new BN('42');
    
    beforeEach(async function() {
        this.box = await Box.new({ from: owner });
    });

    // Test case
    it('retrieve returns a value previoiusly stored', async function() {
        await this.box.store(value, {from: owner});

        // check
        expect((await this.box.retrieve()).toString()).to.equal('42');
    })

    it('store emit an event', async function () {
        const receipt = await this.box.store(value, {from: owner});
        expectEvent(receipt, 'ValueChanged', {value: value});
    })

    it('non owner cannot store a value', async function() {
        await expectRevert(
            this.box.store(value, {from: other}),
            'Unauthorized'
        );
    })
})