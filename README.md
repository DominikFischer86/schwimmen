# Schwimmen Kartenspiel
Schwimmen ist ein klassisches Kartenspiel mit regulären Spielekarten. Dieses Projekt soll das Spielen lokal und online ermöglichen.

## Spielsetup
- gespielt wird mit einem regulären 32 Karten Deck (7 bis Ass in jeweils 4 Farben)
- jeder Spieler erhält 3 Handkarten vor sich ausgeteilt
- der Dealer erhält 2x 3 Handkarten vor sich ausgeteilt

## Spielablauf
- der Dealer darf sich den ersten Stapel mit 3 Karten anschauen und entscheiden, ob er diese spielen möchte, ohne den zweiten Stapel zu sichten
- entscheidet er sich dafür, legt er die restlichen 3 verdeckten Karten offen in die Mitte aller Spieler
- entscheidet er sich gegen den ersten Stapel, legt er diese stattdessen in die Mitte und muss die anderen 3 verdeckten Karten als Handkarten aufnehmen
- die Spieler dürfen nun der Reihe nach entscheiden ob sie
    1. eine Handkarte mit einer der Gemeinschaftskarten tauschen
    2. alle 3 Handkarten durch die offenen Gemeinschaftskarten austauschen oder
    3. ihren Zug ohne Aktion beenden (auch "Schieben" genannt)
- ab Runde 2 dürfen Spieler die Runde auch "zumachen", wodurch jeder restliche Spieler noch einen Zug durchführen darf
- Schieben alle Spieler ihren Zug werden die Gemeinschaftskarten durch 3 neue Gemeinschaftskarten aus dem Deck ausgetauscht
- die Runde endet, wenn
    1. ein Spieler "zugemacht" hat und alle anderen Spieler ihren letzten Zug getätigt haben
    2. ein Spieler 3 Asse auf der Hand hat
    3. ein Spieler den Zahlwert 31 erreicht
- ist die Runde beendet, werden von allen Spielern die Zahlenwerte verglichen

## Berechnung der Zahlenwerte
- jede Nummernkarte entspricht ihrem Zahlenwert, (7) bis (10) Punkte
- alle Bildkarten (J, Q, K) entsprechen jeweils (10) Punkte
- Asse sind (11) Punkte wert
- 3 Asse in der Hand gewinnen das Spiel auf der Stelle
- 3 sonstige Karten vom gleichen Zahlen-Nennwert zählen (30,5) - z.B. 7-7-7 oder Q-Q-Q
- nur Zahlenwerte der **gleichen Farbe** fließen in die Berechnung ein
- die maximale Punktzahl in einer Farbe beträgt damit (31) - z.B. 10♦ - K♦ - A♦
- die niedrigste Punktzahl ist somit (8), z.B. 7♦ - 7♣ - 8♠

## Ergebnis
- jeder Spieler hat zu Beginn 3 Leben, verliert er alle 3, dann "schwimmt" er und ist ab der nächsten Niederlage aus dem Spiel
- verloren hat pro Runde der/die Spieler mit der niedrigsten Punktzahl (bei Punktgleichstand verlieren alle betroffenen Spieler jeweils ein Leben)
- hat ein Spieler 3 Asse, so ist die Runde direkt vorbei und alle anderen Spieler verlieren jeweils ein Leben
- der letzte verbleibende Spieler gewinnt das Spiel


## Roadmap
- **Gamelogic erstellen** (in progress)
    1. ~~Spieler registrieren~~
    2. ~~Karten mischen und an Spieler verteilen~~
    3. ~~Dealer Stapel wählen lassen und Gemeinschaftskarten sowie Dealerhand festlegen~~
    4. Spieleraktionen und Rundenablauf definieren (z.B. Gemeinschaftskarten austauschen bei voller Runde Schieben)
    5. Karten tauschen
    6. Rundenende definieren und Punktzahl auswerten (bei Erreichen von 31 Punkten oder 3 Assen auf der Hand)
    7. Lebensanzeige anpassen
    8. Verlierer entfernen
    9. Game Over Screen und Rematch oder Neustart

- GUI und Animationen erstellen/anpassen (für spielen auf mobile)
- lokales Spielen ermöglichen
    1. Intermission Screen bei nächstem Spieler am Zug
    2. Timebank pro Spielzug
- online Spielen ermöglichen
    1. SplashScreen mit GameMode Auswahl
    2. mit socket.io online Verbindung zwischen Geräten herstellen
    3. Spiel-Leiter authentifizieren (Startet Session und akzeptiert Anmeldungen von Spielern)
    4. GUI auf Onlinespiel anpassen
- Testing
