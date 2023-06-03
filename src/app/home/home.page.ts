import { Component } from '@angular/core';

import { LottozahlMitZufallszahl } from '../lottozahl-mit-zufallszahl';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /** Array enhält die Zahlen 1 bis 6, wird für die beiden verschachtelten ngFor-Schleifen benötigt. */
  public nullBisSechsArray = [...new Array(7)].map( (_,i) => i );

  /**
   * Array enthält bei Index=0 ein Dummy-Element, und danach 49 Elemente mit der Hintergrundfarbe
   * für die jeweilige Lottozahl, entweder `white` oder `orange`.
   */
  public hintergrundFarbeArray:string[] = [];

  /**
   * Initialisiert den Array mit den Hintergrundfarben.
   */
  constructor() {

    // Element mit Index=0 wird nicht verwendet um 1-basierten index zu erhalten
    this.hintergrundFarbeArray.push("dummy");

    for (let i = 1; i <= 49; i++) {

      this.hintergrundFarbeArray.push("white");
    };
  }

  /**
   * Setzt Hintergrund für alle 49 Zahlen auf `white`, d.h. nach Aufruf dieser Methode sind
   * alle Zahlen "abgewählt".
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

    // eigentliches Auswürfeln der Zusatzzahlen
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

    let meinArray : Array<LottozahlMitZufallszahl> = [];

    for (let i = 1; i <= 49; i++) {

        const lottozahlUndZufallszahl = new LottozahlMitZufallszahl(i, Math.random());
        meinArray.push(lottozahlUndZufallszahl);
    }

    meinArray.sort( (a,b) => {

      if (a.zufallszahl === b.zufallszahl) { return  0; }
      if (a.zufallszahl <   b.zufallszahl) { return -1; }
      return 1;
    } );

    const ergebnisArray:number[] = [];

    for (let i = 0; i < 6; i++) {

        ergebnisArray.push( meinArray[i].lottozahl );
    }

    return ergebnisArray;
  }

}
