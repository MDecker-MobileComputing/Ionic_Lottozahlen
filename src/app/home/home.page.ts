import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /**
   * Array enthält unter Index mit Lottozahl die aktuelle Hintergrundfarbe (String für CSS-Farbnamen)
   * für diese Zahl, also ob die jeweilige Zahl ausgewählt wurde oder nicht; 1-basierter Index!
   */
  public hintergrundFarbeArray:string[] = [];

  /** Array enthält Zahlen 0 bis einschl. 6 für die Anzahl der Zeilen bzw. Spalten. */
  public nullBisSechs = [...new Array(7)].map( (_,i) => i );


  /** Member-Variable ist an UI-Element gebunden (Two-Way-Binding); enthält Komma-separierte Liste der sechs Lottozahlen. */
  public lottozahlenText = "";

  /**
   * Initialisiert den Array mit den Hintergrundfarben.
   */
  constructor() {

    this.hintergrundFarbeArray.push("dummy"); // Element mit Index=0 wird nicht verwendet um 1-basierten index zu erhalten

    for (let i = 1; i <= 49; i++) { this.hintergrundFarbeArray.push("white"); };
  }

  /**
   * Setzt Hintergrund für alle 49 Zahlen auf weiß, d.h. alle Zahlen sind "abgewählt".
   */
  private alleZahlenWeiss() {

    for (let i = 1; i <= 49; i++) { this.hintergrundFarbeArray[i] = "white"; }
  }


  /**
   * Event-Handler-Methode für Button, der Erzeugung der Zufallszahlen auslöst.
   */
  public onLottozahlenErzeugen() {

    this.alleZahlenWeiss();

    let ergebnisStr = "";
    const lottoZahlenArray = this.lottoZahlenErzeugen();
    for (let i = 0; i < lottoZahlenArray.length; i++)     {

        const zahl = lottoZahlenArray[i];
        ergebnisStr +=  zahl + "  ";

        this.hintergrundFarbeArray[zahl] = "orange";
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
