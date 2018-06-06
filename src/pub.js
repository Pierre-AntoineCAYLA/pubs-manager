export class Pub {
    constructor(name, firstName, lastName, mail, openDays, start, end, type, nameBeer){
        this._name=name
        this.owner(firstName, lastName, mail)
        this._openDays=openDays
        this.openHours(start,end)
        this.beers(type, nameBeer)
    }

    owner(firstName, lastName, mail){
        this._firstName=firstName;
        this._lastName=lastName;
        this._maisl=mail;
    }

    openHours(start, end){
        this._start=start;
        this._end=end;
    }

    beers(type, nameBeer){
        this._type=type;
        this._nameBeer=nameBeer;
    }

    set name (name){this._name=name}
    get name (){return this._name}
    set firstName (firstName){this._firstName=firstName}
    get firstName (){return this._firstName}
    set lastName (name){this._lastName=lastName}
    get lastName (){return this._lastName}
    set mail (mail){this._mail=mail}
    get mail (){return this._mail}
    set openDays (openDays){this._openDays=openDays}
    get openDays (){return this._openDays}
    set start (start){this._start=start}
    get start (){return this._start}
    set end (end){this._end=end}
    get end (){return this._end}
    set type (type){this._type=type}
    get type (){return this._type}
    set nameBeer (nameBeer){this._nameBeer=nameBeer}
    get nameBeer (){return this._nameBeer}



}