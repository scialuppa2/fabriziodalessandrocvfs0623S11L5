Questa è un'applicazione web sviluppata con React che simula la piattaforma di streaming musicale, di Spotify.

Utilizza RapidApi https://striveschool-api.herokuapp.com/api/deezer e la RapidAPI-Key è la stessa messa a disposizione nella documentazione ufficiale: 
'X-RapidAPI-Key': 'a8a46e9563msh4b22334911e0cfcp1da315jsn1a8ea6d4de9b',

Le dipendenze installate sulla macchina sono:

"react-bootstrap",
"react-bootstrap-icons",
"react-icons",
"react-router-dom",
"react-redux",
"@reduxjs/toolkit",
        
        
COMPONENTI PRINCIPALI DI REACT:

Home: Componente principale che mostra le sezioni principali dell'applicazione, come i generi musicali principali e i risultati di ricerca.

MyNavbar: Barra di navigazione superiore con link per le diverse sezioni.

SideBar: Barra laterale sinistra con link alle sezioni principali e al form di ricerca.

YourLibrary: Mostra le canzoni preferite salvate dall'utente.

SearchBar: Barra di ricerca che consente di cercare canzoni.

AlbumCard: Rappresenta una card per visualizzare informazioni sull'album, l'artista e fornisce funzionalità come aggiungere ai preferiti e riprodurre la canzone.

AlbumGallery: Rappresenta una riga di card degli album, utilizzata per mostrare canzoni in diverse sezioni (rock, pop, hip-hop, ricerca).

AlbumPage: Visualizza informazioni dettagliate su un album, inclusi i dettagli delle tracce.
ArtistPage: Mostra informazioni su un artista, inclusi i dettagli delle canzoni dell'artista.

Player: Componente che visualizza il player audio con i controlli di riproduzione.

PlayerArtist: Card per visualizzare le informazioni di una canzone in una pagina di un artista.



FILE DI CONFIGURAZIONE:

App.js: Configura le rotte dell'applicazione utilizzando React Router. Include il layout principale con la barra laterale e il contenuto principale.

index.js: Punto di ingresso dell'applicazione, collega il componente principale App al DOM e fornisce lo store Redux.


COMPONENTI PRINCIPALI DI REDUX:

ReducerArtist: Gestisce lo stato relativo agli artisti, incluse le canzoni di un determinato artista.

ReducerFavourites: Gestisce le canzoni preferite e quelle salvate tra i preferiti.

ReducerMain: Gestisce lo stato principale con canzoni divise per generi musicali (rock, pop, hip-hop).

ReducerPlayer: Gestisce lo stato relativo alla riproduzione della canzone corrente.

ReducerSearch: Gestisce lo stato dei risultati di ricerca.

action.js: Definisce le azioni per le chiamate Api:
           Main ------> Homepage
           Search ----> Barra di ricerca
           Artist ----> Artista specifico
           Album -----> Album specifico

store.js: Dichiara l'oggetto Reducers che associa chiavi ai rispettivi reducers. Configura lo store passando gli oggetti dei reducers e lo stato iniziale.


