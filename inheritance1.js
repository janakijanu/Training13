var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var player = /** @class */ (function () {
    function player(_name) {
        this._name = _name;
    }
    player.prototype.printName = function () {
        console.log("Player Name " + this._name);
    };
    return player;
}());
var CricketPlayer = /** @class */ (function (_super) {
    __extends(CricketPlayer, _super);
    function CricketPlayer(_n, _playerType, _runTaken, _wicketTaken) {
        var _this = _super.call(this, _n) || this;
        _this._n = _n;
        _this._playerType = _playerType;
        _this._runTaken = _runTaken;
        _this._wicketTaken = _wicketTaken;
        return _this;
    }
    CricketPlayer.prototype.printData = function () {
        console.log("The Cricket Player Name is : " + this._name + ",Playertype : " + this._playerType + ",Runtaken : " + this._runTaken + ",Wickettaken : " + this._wicketTaken);
    };
    return CricketPlayer;
}(player));
var cp = new CricketPlayer('Dhoni', 'WicketKeeper', 200, 80);
cp.printName();
cp.printData();
