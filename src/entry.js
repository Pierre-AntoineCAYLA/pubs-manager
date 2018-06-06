import {listerPubsOuverts} from './services/pub.services.js';
import {Pub} from './pub.js';

function listePubsOuverts(){
    listerPubsOuverts().forEach(pub => {
        let li = document.createElement("li");
        let texte =document.createTextNode("le pub "+ pub.name+" est ouvert");
        li.appendChild(texte);
        document.getElementById("ul").appendChild(li);
    });
}
 listePubsOuverts();

 function enregistrerPubs(nom, nomProprietaire, prenomPropietaire){
    var pub= new Pub();
    pub.name=nom;
    pub.firstName=prenomPropietaire;
    pub.lastName=nomProprietaire;
     localStorage.setItem(pub);
 }
