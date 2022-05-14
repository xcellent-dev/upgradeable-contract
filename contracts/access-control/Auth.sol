//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Auth {
    address private _admin;

    constructor(address deployer) {
        _admin = deployer;
    }

    function isAdmin(address user) public view returns (bool) {
        return user == _admin;
    }

}