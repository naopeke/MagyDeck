import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Card } from 'src/app/models/card';
import { CardsService } from 'src/app/shared/cards.service';
import { MazoSelectorModalComponent } from '../mazo-selector-modal/mazo-selector-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-loggedin-card',
  templateUrl: './loggedin-card.component.html',
  styleUrls: ['./loggedin-card.component.css']
})
export class LoggedinCardComponent implements OnInit {
  public cards: Card[]
  public card: Card;
  public parametro: string;
  public searchInput: string = '';
  public resultsCards: Card[] =[]; //para meter datos de resultados
  public searchType: string = 'nombre' //default searchtype es nombre
  public builderCards: Card[] = []; // para meter datos en builder(constcucción)
  public searchPerformed: boolean = false; // si ha hecho la busqueda o no  default false
  public selectedCards = new Set<string>(); // id de selected cards

  constructor(
    public cardsService: CardsService,
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ){

    //app.routing.module.ts  {path: "cartas/:cardId", component:CartasComponent},
  this.parametro = this.rutaActiva.snapshot.params.cardId;
  }

  searchCards(searchParam: string): void {
    this.searchPerformed = true;
    let cards = [];
    if (this.searchType == 'nombre'){
      cards = this.cardsService.getByName(searchParam);
    } else if (this.searchType === 'colleccion'){
      cards = this.cardsService.getByCollection(searchParam);
    }

    // si hay 1 o más cartas en array, meter datos en resultsCards
    if (cards && cards.length > 0) {
      this.resultsCards = cards;
      console.log('Results:', cards);
      console.log('resultsCards: ', this.resultsCards);
    } else {
      this.resultsCards = [];
      console.log('No hay datos en resultsCards');
    }
  }

  onAddCardToBuilder(card:Card){
    this.builderCards.push(card);
    console.log('Added to Builder: ', this.builderCards);
  }

  onDeleteFromChild(cardId: string){
    this.builderCards = this.builderCards.filter(card => card.id_card !== cardId);
    console.log('After deleting from Builder: ', this.builderCards);
  }

  //modal
  openDeckDialog(): void {
    const dialogRef = this.dialog.open(MazoSelectorModalComponent, {
      width: '700px',
      height: '500px'
    });
  
    dialogRef.afterClosed().subscribe(deckIndex => {
      console.log('The dialog was closed');
      if (typeof deckIndex !== 'undefined') {
        this.cardsService.addCardsToDeck(deckIndex, Array.from(this.selectedCards));
        this.snackBar.open(`Añadido tu carta al mazo #${deckIndex + 1}`, 'Cerrar', {
          duration: 4000,
          verticalPosition: 'top',
        });
        this.selectedCards.clear();
      }
    });
  }
  

  ngOnInit(): void {
      
  }
  }




