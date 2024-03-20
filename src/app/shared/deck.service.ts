import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deck } from '../models/deck';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private urlExplora :string = 'http://localhost:3000/explora'
  constructor(private http: HttpClient) { }

  // belen explora
  public getSharedDecks(){
    return this.http.get(this.urlExplora)
  }

  public getVotedDeck(){
    return this.http.get(this.urlExplora + '/votados')
  }

  public getDeckByUser(nameUser:string){
    return this.http.get(this.urlExplora + '/user/' + nameUser)
  }

  public getDeckByDeck(nameDeck:string){
    return this.http.get(this.urlExplora + '/deck/' + nameDeck)
  }

  public putMediaScore(score:number, id_deck:number){
    const body = {
      score: score,
      id_deck: id_deck
    }
    return this.http.put(this.urlExplora + '/mediaScore', body)
  }

  public getDeckById(id_deck:number){
    return this.http.get(this.urlExplora +'/' + id_deck) 
  }
  // belen explora
}