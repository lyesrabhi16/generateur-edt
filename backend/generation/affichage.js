//! this is just a script for displaying the generated emp
//! formated in this way: 
//!     Jour: 
//!          Groupe :  
//!                     debut fin type module local

import { jours as jours_constant } from "../../constants.js";

const creneaux = {
    "G5": [
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 9,
          "type": "Cours",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 14,
          "type": "Cours",
          "nom_module": "TOP",
          "nom_specialite": "genie logiciel",
          "code_module": "TOP",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "15",
          "nom": "Gomez",
          "prenom": "Ana",
          "role": "maitre C",
          "code_module": "TOP",
          "nom_module": "TOP",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 16,
          "type": "Cours",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 19,
          "type": "Cours",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "16:20:04",
        "fin": "17:50:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 11,
          "type": "TP",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "6",
          "nom": "Dubois",
          "prenom": "Marie",
          "role": "Maitre C",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 10,
          "type": "TD",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 12,
          "type": "TD",
          "nom_module": "AIE",
          "nom_specialite": "genie logiciel",
          "code_module": "AIE",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "AIE",
          "nom_module": "AIE",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "13:00:04",
        "fin": "14:30:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 15,
          "type": "TD",
          "nom_module": "TOP",
          "nom_specialite": "genie logiciel",
          "code_module": "TOP",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "19",
          "nom": "Fernandez",
          "prenom": "Laura",
          "role": "maitre F",
          "code_module": "TOP",
          "nom_module": "TOP",
          "priorite": 2
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 18,
          "type": "TP",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "16:20:04",
        "fin": "17:50:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 13,
          "type": "TP",
          "nom_module": "AIE",
          "nom_specialite": "genie logiciel",
          "code_module": "AIE",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "AIE",
          "nom_module": "AIE",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 17,
          "type": "TD",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 20,
          "type": "TD",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 22,
          "type": "TD",
          "nom_module": "Anglais",
          "nom_specialite": "genie logiciel",
          "code_module": "Anglais",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "19",
          "nom": "Fernandez",
          "prenom": "Laura",
          "role": "maitre F",
          "code_module": "Anglais",
          "nom_module": "Anglais",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Mercredi",
        "seance": {
          "id_seance": 21,
          "type": "TP",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 1,
          "code_groupe": "G5",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 6
        }
      }
    ],
    "G4": [
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 9,
          "type": "Cours",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 14,
          "type": "Cours",
          "nom_module": "TOP",
          "nom_specialite": "genie logiciel",
          "code_module": "TOP",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "15",
          "nom": "Gomez",
          "prenom": "Ana",
          "role": "maitre C",
          "code_module": "TOP",
          "nom_module": "TOP",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 16,
          "type": "Cours",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 19,
          "type": "Cours",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "16:20:04",
        "fin": "17:50:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 10,
          "type": "TD",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 11,
          "type": "TP",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 12,
          "type": "TD",
          "nom_module": "AIE",
          "nom_specialite": "genie logiciel",
          "code_module": "AIE",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "AIE",
          "nom_module": "AIE",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "13:00:04",
        "fin": "14:30:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 17,
          "type": "TD",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 15,
          "type": "TD",
          "nom_module": "TOP",
          "nom_specialite": "genie logiciel",
          "code_module": "TOP",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "19",
          "nom": "Fernandez",
          "prenom": "Laura",
          "role": "maitre F",
          "code_module": "TOP",
          "nom_module": "TOP",
          "priorite": 2
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 13,
          "type": "TP",
          "nom_module": "AIE",
          "nom_specialite": "genie logiciel",
          "code_module": "AIE",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "AIE",
          "nom_module": "AIE",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "13:00:04",
        "fin": "14:30:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 20,
          "type": "TD",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 18,
          "type": "TP",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "16:20:04",
        "fin": "17:50:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 22,
          "type": "TD",
          "nom_module": "Anglais",
          "nom_specialite": "genie logiciel",
          "code_module": "Anglais",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "19",
          "nom": "Fernandez",
          "prenom": "Laura",
          "role": "maitre F",
          "code_module": "Anglais",
          "nom_module": "Anglais",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      },
      {
        "debut": "13:00:04",
        "fin": "14:30:04",
        "jour": "Mercredi",
        "seance": {
          "id_seance": 21,
          "type": "TP",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 2,
          "code_groupe": "G4",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 3
        }
      }
    ],
    "G1": [
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 9,
          "type": "Cours",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 14,
          "type": "Cours",
          "nom_module": "TOP",
          "nom_specialite": "genie logiciel",
          "code_module": "TOP",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "15",
          "nom": "Gomez",
          "prenom": "Ana",
          "role": "maitre C",
          "code_module": "TOP",
          "nom_module": "TOP",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 16,
          "type": "Cours",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 19,
          "type": "Cours",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "16:20:04",
        "fin": "17:50:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 12,
          "type": "TD",
          "nom_module": "AIE",
          "nom_specialite": "genie logiciel",
          "code_module": "AIE",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "AIE",
          "nom_module": "AIE",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 11,
          "type": "TP",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 10,
          "type": "TD",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "16:20:04",
        "fin": "17:50:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 17,
          "type": "TD",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 15,
          "type": "TD",
          "nom_module": "TOP",
          "nom_specialite": "genie logiciel",
          "code_module": "TOP",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "19",
          "nom": "Fernandez",
          "prenom": "Laura",
          "role": "maitre F",
          "code_module": "TOP",
          "nom_module": "TOP",
          "priorite": 2
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 13,
          "type": "TP",
          "nom_module": "AIE",
          "nom_specialite": "genie logiciel",
          "code_module": "AIE",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "AIE",
          "nom_module": "AIE",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 20,
          "type": "TD",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "16:20:04",
        "fin": "17:50:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 18,
          "type": "TP",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Mercredi",
        "seance": {
          "id_seance": 22,
          "type": "TD",
          "nom_module": "Anglais",
          "nom_specialite": "genie logiciel",
          "code_module": "Anglais",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "19",
          "nom": "Fernandez",
          "prenom": "Laura",
          "role": "maitre F",
          "code_module": "Anglais",
          "nom_module": "Anglais",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Mercredi",
        "seance": {
          "id_seance": 21,
          "type": "TP",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 3,
          "code_groupe": "G1",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      }
    ],
    "G2": [
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 9,
          "type": "Cours",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 14,
          "type": "Cours",
          "nom_module": "TOP",
          "nom_specialite": "genie logiciel",
          "code_module": "TOP",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "15",
          "nom": "Gomez",
          "prenom": "Ana",
          "role": "maitre C",
          "code_module": "TOP",
          "nom_module": "TOP",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 16,
          "type": "Cours",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 19,
          "type": "Cours",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 12,
          "type": "TD",
          "nom_module": "AIE",
          "nom_specialite": "genie logiciel",
          "code_module": "AIE",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "AIE",
          "nom_module": "AIE",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 10,
          "type": "TD",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 11,
          "type": "TP",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 15,
          "type": "TD",
          "nom_module": "TOP",
          "nom_specialite": "genie logiciel",
          "code_module": "TOP",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "19",
          "nom": "Fernandez",
          "prenom": "Laura",
          "role": "maitre F",
          "code_module": "TOP",
          "nom_module": "TOP",
          "priorite": 2
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 13,
          "type": "TP",
          "nom_module": "AIE",
          "nom_specialite": "genie logiciel",
          "code_module": "AIE",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "AIE",
          "nom_module": "AIE",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "13:00:04",
        "fin": "14:30:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 17,
          "type": "TD",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "16:20:04",
        "fin": "17:50:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 20,
          "type": "TD",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Mercredi",
        "seance": {
          "id_seance": 18,
          "type": "TP",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Mercredi",
        "seance": {
          "id_seance": 22,
          "type": "TD",
          "nom_module": "Anglais",
          "nom_specialite": "genie logiciel",
          "code_module": "Anglais",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "19",
          "nom": "Fernandez",
          "prenom": "Laura",
          "role": "maitre F",
          "code_module": "Anglais",
          "nom_module": "Anglais",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "16:20:04",
        "fin": "17:50:04",
        "jour": "Mercredi",
        "seance": {
          "id_seance": 21,
          "type": "TP",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 4,
          "code_groupe": "G2",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      }
    ],
    "G3": [
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 9,
          "type": "Cours",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 14,
          "type": "Cours",
          "nom_module": "TOP",
          "nom_specialite": "genie logiciel",
          "code_module": "TOP",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "15",
          "nom": "Gomez",
          "prenom": "Ana",
          "role": "maitre C",
          "code_module": "TOP",
          "nom_module": "TOP",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 16,
          "type": "Cours",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Dimanche",
        "seance": {
          "id_seance": 19,
          "type": "Cours",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "Amphi10",
          "capacite": 100,
          "type": "Amphi"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "13:00:04",
        "fin": "14:30:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 11,
          "type": "TP",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 3
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "14:40:04",
        "fin": "16:10:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 10,
          "type": "TD",
          "nom_module": "PS",
          "nom_specialite": "genie logiciel",
          "code_module": "PS",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "6",
          "nom": "Dubois",
          "prenom": "Marie",
          "role": "Maitre C",
          "code_module": "PS",
          "nom_module": "PS",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "16:20:04",
        "fin": "17:50:04",
        "jour": "Lundi",
        "seance": {
          "id_seance": 12,
          "type": "TD",
          "nom_module": "AIE",
          "nom_specialite": "genie logiciel",
          "code_module": "AIE",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "17",
          "nom": "Roy",
          "prenom": "Sophie",
          "role": "maitre Z",
          "code_module": "AIE",
          "nom_module": "AIE",
          "priorite": 2
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 17,
          "type": "TD",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s120",
          "capacite": 40,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "8",
          "nom": "Chen",
          "prenom": "Ling",
          "role": "Maitre D",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "11:20:04",
        "fin": "12:50:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 15,
          "type": "TD",
          "nom_module": "TOP",
          "nom_specialite": "genie logiciel",
          "code_module": "TOP",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "19",
          "nom": "Fernandez",
          "prenom": "Laura",
          "role": "maitre F",
          "code_module": "TOP",
          "nom_module": "TOP",
          "priorite": 2
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "13:00:04",
        "fin": "14:30:04",
        "jour": "Mardi",
        "seance": {
          "id_seance": 13,
          "type": "TP",
          "nom_module": "AIE",
          "nom_specialite": "genie logiciel",
          "code_module": "AIE",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "AIE",
          "nom_module": "AIE",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Mercredi",
        "seance": {
          "id_seance": 20,
          "type": "TD",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "09:40:04",
        "fin": "11:10:04",
        "jour": "Mercredi",
        "seance": {
          "id_seance": 18,
          "type": "TP",
          "nom_module": "MC",
          "nom_specialite": "genie logiciel",
          "code_module": "MC",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "13",
          "nom": "Martinez",
          "prenom": "Antonio",
          "role": "maitre A",
          "code_module": "MC",
          "nom_module": "MC",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "13:00:04",
        "fin": "14:30:04",
        "jour": "Mercredi",
        "seance": {
          "id_seance": 22,
          "type": "TD",
          "nom_module": "Anglais",
          "nom_specialite": "genie logiciel",
          "code_module": "Anglais",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b5s112",
          "capacite": 60,
          "type": "SalleTD"
        },
        "enseignant": {
          "matricule": "19",
          "nom": "Fernandez",
          "prenom": "Laura",
          "role": "maitre F",
          "code_module": "Anglais",
          "nom_module": "Anglais",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      },
      {
        "debut": "08:00:04",
        "fin": "09:30:04",
        "jour": "Jeudi",
        "seance": {
          "id_seance": 21,
          "type": "TP",
          "nom_module": "Req-Con",
          "nom_specialite": "genie logiciel",
          "code_module": "Req-Con",
          "code_specialite": "GL"
        },
        "local": {
          "code_local": "b1s1",
          "capacite": 30,
          "type": "SalleTP"
        },
        "enseignant": {
          "matricule": "22",
          "nom": "Smith",
          "prenom": "Jane",
          "role": "vacataire",
          "code_module": "Req-Con",
          "nom_module": "Req-Con",
          "priorite": 1
        },
        "groupe": {
          "id_groupe": 5,
          "code_groupe": "G3",
          "id_section": 1,
          "code_section": "A",
          "niveau": "M1",
          "code_specialite": "GL",
          "nom_specialite": "genie logiciel",
          "nbr_etudiants": 0
        }
      }
    ]
  };

const jours = Object.keys(jours_constant);
jours.forEach(jour => {
    console.log(`${jour}:`);
    Object.keys(creneaux).forEach(groupe => {
        const creneau_groupes = creneaux[groupe].filter(creneau => creneau.jour === jour);
        console.log(`\t${groupe}:`);
        creneau_groupes.forEach(creneau => {
            const seance = creneau["seance"];
            const local = creneau["local"];
            console.log(`\t\t ${creneau.debut} ${creneau.fin} ${seance.type} ${seance.code_module} ${local.code_local}`);
        });
    });

});