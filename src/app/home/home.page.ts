import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** Array enhält die Zahlen 1 bis 6, wird für die beiden verschachtelten ngFor-Schleifen benötigt. */
  public nullBisSechs = [...new Array(7)].map( (_,i) => i );

  /**
   * Array enthält bei Index=0 ein Dummy-Element, und danach 49 Elemente mit der Hintergrundfarbe für die jeweilige Lottozahl,
   * entweder `white` oder `orange`.
   */
  public hintergrundFarbeArray:string[] = [];

  /**
   * Initialisiert den Array mit den Hintergrundfarben.
   */
  constructor() {

    this.hintergrundFarbeArray.push("dummy"); // Element mit Index=0 wird nicht verwendet um 1-basierten index zu erhalten

    for (let i = 1; i <= 49; i++) { this.hintergrundFarbeArray.push("white"); };
  }

  /**
   * Setzt Hintergrund für alle 49 Zahlen auf `white`, d.h. nach Aufruf dieser Methode sind alle Zahlen "abgewählt".
   */
  private alleZahlenWeiss() {

    for (let i = 1; i <= 49; i++) {

      this.hintergrundFarbeArray[i] = "white";
    }
  }


  /**
   * Event-Handler-Methode für Button, der Erzeugung der Zufallszahlen auslöst.
   */
  public onLottozahlenErzeugen() {

    this.alleZahlenWeiss();

    // eigentliches auswürfeln der Zusatzzahlen
    const lottoZahlenArray = this.lottoZahlenErzeugen();

    for (let i = 0; i < lottoZahlenArray.length; i++)     {

        const zahl = lottoZahlenArray[i];
        this.hintergrundFarbeArray[zahl] = "orange";
    }
  }


  /**
   * Methode erzeugt die anzuzeigenden Zufallszahlen (6 Zahlen von 1 bis 49).
   *
   * @return  Array mit sechs zufällig ausgewählten Lottozahlen, nicht sortiert!
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

    return ergebnisArray;
  }

}
