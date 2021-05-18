import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public backgroundColorArray:string[] = [];

  /** Array enthält Zahlen 0 bis einschl. 6 für die Anzahl der Zeilen bzw. Spalten. */
  private nullBisSechs = [...new Array(7)].map( (_,i) => i );


  /** Member-Variable ist an UI-Element gebunden (Two-Way-Binding). */
  public lottozahlenText = "";

  constructor() {

    this.backgroundColorArray.push("dummy"); // skip first element to get 1-based array

    for (let i = 1; i <= 49; i++) {

        if (i % 2 === 0) {

            this.backgroundColorArray.push("white");

        } else {

            this.backgroundColorArray.push("orange");
        }
    }
  }


  /**
   * Event-Handler-Methode für Button, der Erzeugung der Zufallszahlen auslöst.
   */
  public onLottozahlenErzeugen() {

    let ergebnisStr = "";
    const lottoZahlenArray = this.lottoZahlenErzeugen();
    for (let i = 0; i < lottoZahlenArray.length; i++)     {

        ergebnisStr += lottoZahlenArray[i] + "  ";
    }

    this.lottozahlenText = ergebnisStr;
  }


  /**
   * Methode erzeugt die anzuzeigenden Zufallszahlen (6 Zahlen von 1 bis 49).
   *
   * @return  Array mit sechs zufällig ausgewählten Lottozahlen, aufsteigend sortiert.
   */
  private lottoZahlenErzeugen(): number[] {

    const meinArray = [];

    for (let i = 1; i <= 49; i++) {

        const lottozahlUndZufallszahl = { lottozahl: i, zufallszahl: Math.random() };
        meinArray.push(lottozahlUndZufallszahl);
    }

    meinArray.sort(function(a,b){ // nach Attribut "zufallszahl" sortieren
        if (a.zufallszahl === b.zufallszahl) { return  0; }
        if (a.zufallszahl <   b.zufallszahl) { return -1; }
        if (a.zufallszahl >   b.zufallszahl) { return  1; }
    });

    const ergebnisArray:number[] = [];

    for (let i = 0; i < 6; i++) {

        ergebnisArray.push( meinArray[i].lottozahl );
    }

    ergebnisArray.sort(function(a,b){
        if (a < b) { return -1; }
        if (a > b) { return  1; }
    });

    return ergebnisArray;
  }

}
