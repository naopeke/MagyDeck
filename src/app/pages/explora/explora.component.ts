
import { Component} from '@angular/core';
import { Card } from 'src/app/models/card';
import { Deck } from 'src/app/models/deck';


@Component({
  selector: 'app-explora',
  templateUrl: './explora.component.html',
  styleUrls: ['./explora.component.css'],

})
export class ExploraComponent {
  
  public datos: Deck[]
  public mazo: Deck

  public explorar: boolean = false

  constructor(){
    this.datos = [
      new Deck(1, 'Dragonfly', 'Kaoser', [], 0,[ new Card('1', 0,"../../../assets/images/carta1landing.png"),
        new Card('2', 0,"../../../assets/images/carta1landing.png"),
        new Card('3', 0,"../../../assets/images/carta1landing.png"),
        new Card('4', 0,"../../../assets/images/carta1landing.png")], 
     ), 
      new Deck(2, 'onFire', 'Kaoser', [], 0, [ 
        new Card('1', 0,"../../../assets/images/carta1landing.png"),
        new Card('2', 0,"../../../assets/images/carta1landing.png"),
        new Card('3', 0,"../../../assets/images/carta1landing.png"),
        new Card('4', 0,"../../../assets/images/carta1landing.png"),
        new Card('5', 0,"../../../assets/images/carta1landing.png"),
        new Card('6', 0,"../../../assets/images/carta1landing.png"),
        new Card('7', 0,"../../../assets/images/carta1landing.png"),
        new Card('8', 0,"../../../assets/images/carta1landing.png"),
        new Card('9', 0,"../../../assets/images/carta1landing.png"),
        new Card('10', 0,"../../../assets/images/carta1landing.png"),
        new Card('11', 0,"../../../assets/images/carta1landing.png"),
        new Card('12', 0,"../../../assets/images/carta1landing.png")], 
    ),
      new Deck(3, 'Dragonfly', 'Deimos', [], 0, [ 
        new Card('1', 0,"../../../assets/images/carta1landing.png"),
        new Card('2', 0,"../../../assets/images/carta1landing.png"),
        new Card('3', 0,"../../../assets/images/carta1landing.png"),
        new Card('4', 0,"../../../assets/images/carta1landing.png"),
        new Card('5', 0,"../../../assets/images/carta1landing.png"),
        new Card('6', 0,"../../../assets/images/carta1landing.png"),
        new Card('7', 0,"../../../assets/images/carta1landing.png"),
        new Card('8', 0,"../../../assets/images/carta1landing.png"),], 
   )
    ]

  }
  
  public search(input:string, filter:string){
  // instalar TOASTR PARA ERRORES
    console.log(this.datos[0].nameUser);
    
    if (filter === 'nombreUsuario'){
      let datosFilter = this.datos.filter((dato) => {
        return dato.nameUser == input
      })
        if(datosFilter.length != 0){
          this.datos = datosFilter
        } else {
          console.log('Usuario no encontrado');
        }
    }

    else if(filter === 'nombreMazo'){
      let datosFilter = this.datos.filter((dato) => {
        return dato.nameDeck == input
      })
      if(datosFilter.length != 0){
        this.datos = datosFilter
      } else {
        console.log('Mazo no encontrado');
      }
    }
  
  }
  
  public seleccionMazo(id_deck:number){
    this.explorar = true
    let cartas = this.datos.find ((deck) => {
      return deck.id_deck == id_deck
    })

   this.mazo = cartas
   console.log(this.mazo);
  }

  public score(event:{id_deck:number, score:number}){
      this.datos.find ((deck) => {
      if(deck.id_deck == event.id_deck){
        
        deck.scores.push(event.score)
        console.log(this.mediaScore(deck.scores));
        deck.mediaScore = this.mediaScore(deck.scores)
         
       
      }
    
    })
  }

  public mediaScore(array: number[]){
    let suma = array.reduce( (accumulator, currentValue) => accumulator + currentValue)
    let media = (suma/array.length).toFixed(1)
  
    return parseFloat(media)
  }

  



}
