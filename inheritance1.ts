class player{
    constructor(protected _name:string){
    }
    public printName():void{
        console.log(`Player Name ${this._name}`);
    }
}

class CricketPlayer extends player{
    constructor(private _n:string,private _playerType:string,private _runTaken:number,private _wicketTaken:number){
        super(_n);
    }
    public printData():void{
        console.log("The Cricket Player Name is : "+this._name+ ",Playertype : " +this._playerType+ ",Runtaken : " +this._runTaken+ ",Wickettaken : " +this._wicketTaken)
    }
}

var cp=new CricketPlayer('Dhoni','WicketKeeper',200,80);
cp.printName();
cp.printData();