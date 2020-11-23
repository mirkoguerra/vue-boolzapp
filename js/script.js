// collego il codice di Vue all'html
const boolzappApp = new Vue ({
  el: "#root",
  data: {
    // oggetto contenente nome e avatar dell'utente
    user: {
      name: "Mirko",
      avatar: "img/avatar_0.jpg"
    },
    // array di oggetti; gli oggetti sono i contatti dell'utente, ognuno dei quali contiene nome e avatar
    contacts: [
      {
        name: "Silvio",
        avatar: "img/avatar_1.jpg",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/11/2020 15:48:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/11/2020 15:50:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Giorgia",
        avatar: "img/avatar_2.jpg",
        oldMessages: [
          {
            text: "Hai comprato la cioccolata?",
            data: "05/11/2020 16:48:00",
            writedByMe: false
          },
          {
            text: "No, fa male",
            data: "05/11/2020 16:50:00",
            writedByMe: true
          },
          {
            text: "Hai ragione, sei molto saggio",
            data: "05/11/2020 16:52:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Leonardo",
        avatar: "img/avatar_3.jpg",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "02/11/2020 17:48:00",
            writedByMe: false
          },
          {
            text: "Ho avuto giornate migliori...",
            data: "02/11/2020 17:50:00",
            writedByMe: true
          },
          {
            text: "Ma il dottore mi ha detto di non lamentarmi, quindi non lo farò",
            data: "02/11/2020 17:51:00",
            writedByMe: true
          },
          {
            text: "Sei molto stoico, sono certo che la tua anima sia splendida",
            data: "02/11/2020 17:55:00",
            writedByMe: false
          },
          {
            text: "Lo penso anch'io, ma grazie di averlo sottolineato",
            data: "02/11/2020 15:58:00",
            writedByMe: true
          }
        ]
      },
      {
        name: "Matteo",
        avatar: "img/avatar_4.jpg",
        oldMessages: [
          {
            text: "Usciamo stasera?",
            data: "27/10/2020 12:48:00",
            writedByMe: true
          },
          {
            text: "Volentieri, verso che ora?",
            data: "27/10/2020 12:50:00",
            writedByMe: false
          },
          {
            text: "Ci muoviamo con la mia macchina?",
            data: "27/10/2020 12:51:00",
            writedByMe: false
          },
          {
            text: "No,andiamo con la mia. Passo a prenderti verso le 20.00",
            data: "27/10/2020 12:53:00",
            writedByMe: true
          },
          {
            text: "Grazie, a dopo!",
            data: "27/10/2020 12:55:00",
            writedByMe: false
          }
        ]
      },
      {
        name: "Tommaso",
        avatar: "img/avatar_5.jpg",
        oldMessages: [
          {
            text: "Vorrei diventare un pasticcere",
            data: "25/10/2020 15:48:00",
            writedByMe: false
          },
          {
            text: "Non sapevo avessi la passione per i dolci",
            data: "25/10/2020 15:50:00",
            writedByMe: true
          }
        ]
      },
      {
        name: "Giulia",
        avatar: "img/avatar_6.jpg",
        oldMessages: [
          {
            text: "Ciao Giulia, come stai?",
            data: "20/10/2020 11:20:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "20/10/2020 11:25:00",
            writedByMe: false
          },
          {
            text: "Vuoi un caffè?",
            data: "20/10/2020 11:26:00",
            writedByMe: false
          },
          {
            text: "Perché mi chiedi sempre se voglio un caffe? Comunque ne ho già bevuti a sufficienza, grazie lo stesso",
            data: "20/10/2020 11:30:00",
            writedByMe: true
          }
        ]
      },
      {
        name: "Alessandro",
        avatar: "img/avatar_7.jpg",
        oldMessages: [
          {
            text: "Ciao, come stai?",
            data: "10/09/2020 17:28:00",
            writedByMe: true
          },
          {
            text: "Tutto bene, grazie",
            data: "10/09/2020 17:38:00",
            writedByMe: false
          },
          {
            text: "Non mi chiedi come sto io?",
            data: "10/09/2020 17:40:00",
            writedByMe: true
          },
          {
            text: "Maleducato!",
            data: "10/09/2020 17:41:00",
            writedByMe: true
          }
        ]
      },
      {
        name: "Alessio",
        avatar: "img/avatar_8.jpg",
        oldMessages: [
          {
            text: "Andiamo a fare due tiri al campetto?",
            data: "15/07/2020 09:30:00",
            writedByMe: false
          },
          {
            text: "Mi sono slogato una caviglia, temo che non sarei molto competitivo",
            data: "15/07/2020 09:33:00",
            writedByMe: true
          }
        ]
      }
    ],
    // numero che rappresenta l'indice del contatto corrente
    currentContactIndex: 0,
  },
  methods: {
    // funzione che fa cambiare valore a currentContactIndex in relazione all'indice della list item che sarà cliccata
    currentContactIndexChanging: function(index) {
      this.currentContactIndex = index;
    }
  }
});
