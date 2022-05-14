//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import './access-control/Auth.sol';

contract BoxV2 {

    uint256 private _value;
    // Auth private _auth;

    event ValueChanged(uint256 value);

    // constructor() {
    //     _auth = new Auth(msg.sender);
    // }

    function increament() public {
        _value = _value + 1;
        emit ValueChanged(_value);
    }

    function store(uint256 value) public {
        // require(_auth.isAdmin(msg.sender), "Unauthorized");
        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }
}
