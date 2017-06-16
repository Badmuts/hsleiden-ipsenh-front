
# QA Feedback

Over het algemeen zit de code aardig netjes in elkaar. Duidelijk georganiseerd en op enkele uitzonderingen na consistent geformatteerd. 
Het ontbreken van betekenisvolle automatische testen is echter erg jammer. 

Gezien de betrekkelijk lage complexiteit van deze app voelt dat nog niet als een groot probleem, maar een groter, complexer project zou snel onbeheersbaar worden.


### HIGH
- Betekenisvolle testen ontbreken. Alleen testen dat een component rendert zonder exceptions is erg mager. Test echt het gedrag van de componenten zodat je weet dat ze echt werken zoals bedoeld.

- Goed dat je een scheiding maakt tussen Components en Containers. Echter lijkt de toepassing niet helemaal te kloppen.
  Containers zijn slim en gaan over gedrag/logica (how things work). Presentational components doen niet veel meer dan het renderen van de aangeleverde data (how things look).
  Zie dit artikel van [Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

- Gebruik ternary operator liever niet. Het bespaart een paar toetsaanslagen maar je code is een stuk minder prettig leesbaar.
  Bijvoorbeeld:
  - [Hubs.js:74](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/containers/Hubs.js#L74)
  - [Hubs.js:87](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/containers/Hubs.js#L87)
  - [config.js:2](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/config.js#L2)
  - [Buildings.js:48](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/containers/Buildings.js#L48)
- Splits grote methods op. Splits verantwoordelijkheden op in kleine methoden of componenten om de herbruikbaarheid, testbaarheid en leesbaarheid van de code te vergroten.
  Bijvoorbeeld:
  - [Hubs.js:37](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/containers/Hubs.js#L37)
  - [HubsDetails.js:59](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/containers/HubsDetails.js#L59)

  Vervang bijvoorbeeld:

      <h2>Room</h2>
      {hub.room.name ? (
          <div className="pt-card pt-elevation-0 pt-interactive box" style={{marginBottom: '15px'}}>
              <h5>
                  <span className="pt-icon-large pt-icon-home" style={{paddingRight: '5px'}}></span>
                  {hub.room.name}
              </h5>
                 ...
              </div>
          </div>
      ) : ... )

  Door:

      <h2>Room</h2>
      {this.renderRoom(hub.room)}

      ...

      function renderRoom(room) {
        if (!room) {
          return <AssignRoomToHub hub={this.props.hub} />
        } else {
          return <Room room={room} />
        }
      }

### MEDIUM
- Nette (gegenereerde) documentatie voor de tooling. Echter weinig documentatie over project (functioneel, structuur).
- Inconsistente toepassing van CSS.
  Vaak middels externe stylesheet ([App.css](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/App.css)),
  soms met inline CSS in JavaScript ([HeaderWidget.js:3](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/components/HeaderWidget.js#L3)).
  Soms zelfs inline in JSX ([Header.js:53](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/components/Header/Header.js#L53)).
  Kies voor een manier en pas die overal toe (tenzij je een goede reden hebt om het anders te doen).
- Gebruik een linter (bijv. [ESLint](http://eslint.org/)) om stijl af te dwingen en veel voorkomende bugs te voorkomen. Dit zou bijv voorkomen:
  - Inconsistent gebruik van `;`
  - Uitlijning (bijv. [Buildings.test.js:8](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/containers/Buildings.test.js#L8)).
  - Verwijder code ipv als comment. ([Nav.test.js](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/components/Nav.test.js#L5)).
- Een naam als `savedHub` is eenvoudiger te begrijpen dan `_hub` ([HubsDetails.js:50](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/containers/HubsDetails.js#L50)).
- Op het moment dat de API call faalt, blijft je klant eeuwig wachten :) ([Buildings.js:56](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/containers/Buildings.js#L56)).

### LOW
- Ruim dode code op. [Nav.js:5](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/components/Nav.js#L12)
- Package files ([index.js](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/components/Header/index.js)) worden alleen hier gebruikt. Probeer ook hierin consistent te zijn.
- Waarom maakt [containers/Buildings.js16](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/containers/Buildings.js#L16) geen gebruik van [endpoints/Buildings.js:4](https://github.com/Badmuts/hsleiden-ipsenh-front/blob/master/src/endpoints/buildings.js#L4)?
