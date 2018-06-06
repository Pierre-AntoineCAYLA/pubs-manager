var pubsJson=require('../mocks/pubs.json');
import {Pub} from '../pub.js'
var moment = require('moment');

export function listerPubs() {
  var listePubs=[];
  pubsJson.forEach(pub =>{
  var pub= new Pub(pub.name, pub.owner.fisrtName, pub.owner.lastname, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers);
  listePubs.push(pub);
  })
  return listePubs;  
}

export function listerPubsOuverts(){
  var pubsOuverts=[];
  pubsJson.forEach(pub=>{
    if(pub['openDays'].includes(moment().format('dddd'))){
      pubsOuverts.push(new Pub(pub.name, pub.owner.fisrtName, pub.owner.lastname, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end));
    }
  });
    return pubsOuverts;
}

