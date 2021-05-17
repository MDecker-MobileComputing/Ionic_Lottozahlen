import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** Member-Variable ist an UI-Element gebunden (Two-Way-Binding). */
  public lottozahlenText = "";

  constructor() {}


  /**
   * Event-Handler-Methode für Button, der Erzeugung der Zufallszahlen auslöst.
   */
  public onLottozahlenErzeugen() {

    const min = 1;
    const max = 49;
    const zufallszahl = Math.floor(Math.random() * (max - min + 1)) + min;

    this.lottozahlenText = zufallszahl + "";
  }


  /**
   * Methode erzeugt die anzuzeigenden Zufallszahlen (6 Zahlen von 1 bis 49).
   */
  private lottoZahlenErzeugen(): void {


    for (let i = 1; i <= 49; i++) {

    }
    
    /*
    meinArray.sort(function(a,b){ // nach Attribut "zufallszahl" sortieren
        if (a.zufallszahl === b.zufallszahl) { return  0; }
        if (a.zufallszahl <   b.zufallszahl) { return -1; }
        if (a.zufallszahl >   b.zufallszahl) { return  1; }
    });    
    */
  }

}
