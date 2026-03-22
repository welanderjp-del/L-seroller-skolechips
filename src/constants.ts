import { Role } from './types';

export const ROLES: Role[] = [
  {
    id: 'reader',
    title: {
      da: 'Oplæseren',
      en: 'The Reader',
      de: 'Der Vorleser'
    },
    description: {
      da: 'Læser afsnittet højt.',
      en: 'Reads the paragraph out loud.',
      de: 'Liest den Abschnitt laut vor.'
    }
  },
  {
    id: 'dj',
    title: {
      da: 'DJen',
      en: 'The DJ',
      de: 'Der DJ'
    },
    description: {
      da: 'Laver lydeffekter, mens der læses højt.',
      en: 'Makes sound effects while reading out loud.',
      de: 'Macht Soundeffekte, während laut vorgelesen wird.'
    }
  },
  {
    id: 'fortune_teller',
    title: {
      da: 'Spåkonen',
      en: 'The Fortune Teller',
      de: 'Die Wahrsagerin'
    },
    description: {
      da: 'Gætter på, hvad der sker i næste afsnit (må gerne tage fejl).',
      en: 'Guesses what happens in the next paragraph (it\'s okay to be wrong).',
      de: 'Rät, was im nächsten Abschnitt passiert (darf falsch liegen).'
    }
  },
  {
    id: 'word_counter',
    title: {
      da: 'Ordtælleren',
      en: 'The Word Counter',
      de: 'Der Wortzähler'
    },
    description: {
      da: 'Tæller et bestemt ord og råber tallet højt hver gang, det dukker op.',
      en: 'Counts a specific word and shouts the number every time it appears.',
      de: 'Zählt ein bestimmtes Wort und ruft die Zahl jedes Mal laut, wenn es vorkommt.'
    }
  },
  {
    id: 'reviewer',
    title: {
      da: 'Anmelderen',
      en: 'The Reviewer',
      de: 'Der Rezensent'
    },
    description: {
      da: 'Giver afsnittet en rating fra 1 til 10 og begrunder.',
      en: 'Gives the paragraph a rating from 1 to 10 and explains why.',
      de: 'Gibt dem Abschnitt eine Bewertung von 1 bis 10 und begründet diese.'
    }
  },
  {
    id: 'influencer',
    title: {
      da: 'Influenceren',
      en: 'The Influencer',
      de: 'Der Influencer'
    },
    description: {
      da: 'Stopper oplæseren når der er et vigtigt objekt, for at minde om, at dette afsnit er "sponsored content".',
      en: 'Stops the reader when there is an important object to remind everyone that this section is "sponsored content".',
      de: 'Stoppt den Vorleser bei einem wichtigen Objekt, um daran zu erinnern, dass dieser Abschnitt "sponsored content" ist.'
    }
  },
  {
    id: 'frenchman',
    title: {
      da: 'Franskmanden',
      en: 'The Frenchman',
      de: 'Der Franzose'
    },
    description: {
      da: 'Skal efter afsnittet mime, hvad det handlede om.',
      en: 'Must mime what the paragraph was about after it\'s read.',
      de: 'Muss nach dem Abschnitt pantomimisch darstellen, worum es ging.'
    }
  },
  {
    id: 'chill_guy',
    title: {
      da: 'Chill guy',
      en: 'Chill Guy',
      de: 'Chilliger Typ'
    },
    description: {
      da: 'Tager det helt chill.',
      en: 'Takes it totally chill.',
      de: 'Nimmt alles ganz locker.'
    }
  },
  {
    id: 'clapping_king',
    title: {
      da: 'Klappekongen',
      en: 'The Clapping King',
      de: 'Der Klatschkönig'
    },
    description: {
      da: 'Klapper hver gang, der er et sejt ord.',
      en: 'Claps every time there\'s a cool word.',
      de: 'Klatscht jedes Mal, wenn ein cooles Wort vorkommt.'
    }
  },
  {
    id: 'smooth_brain',
    title: {
      da: 'Smooth Brain',
      en: 'Smooth Brain',
      de: 'Glattes Gehirn'
    },
    description: {
      da: 'Stiller et dumt spørgsmål til teksten (gruppen svarer).',
      en: 'Asks a dumb question about the text (the group answers).',
      de: 'Stellt eine dumme Frage zum Text (die Gruppe antwortet).'
    }
  },
  {
    id: 'echo_expert',
    title: {
      da: 'Ek(ko)sperten',
      en: 'The Echo Expert',
      de: 'Der Echo-Experte'
    },
    description: {
      da: 'Gentager det sidste ord i hver sætning (SÆTNING, SÆTning, sætning)',
      en: 'Repeats the last word of every sentence (SENTENCE, SENtence, sentence).',
      de: 'Wiederholt das letzte Wort jedes Satzes (SATZ, Satz, satz).'
    }
  },
  {
    id: 'headliner',
    title: {
      da: 'Overskrifteren',
      en: 'The Headliner',
      de: 'Der Überschriften-Macher'
    },
    description: {
      da: 'Vælger en god overskrift til det læste afsnit.',
      en: 'Chooses a good headline for the read paragraph.',
      de: 'Wählt eine gute Überschrift für den gelesenen Abschnitt.'
    }
  },
  {
    id: 'asmr_streamer',
    title: {
      da: 'ASMR-streameren',
      en: 'The ASMR Streamer',
      de: 'Der ASMR-Streamer'
    },
    description: {
      da: 'Forklarer chatten, hvad de lige har hørt som ASMR.',
      en: 'Explains to the chat what they just heard as ASMR.',
      de: 'Erklärt dem Chat im ASMR-Stil, was er gerade gehört hat.'
    }
  },
  {
    id: 'spoiler_alert',
    title: {
      da: 'Spoiler-alarmen',
      en: 'The Spoiler Alert',
      de: 'Der Spoiler-Alarm'
    },
    description: {
      da: 'Holder sig for ørene og siger "spoiler warning", når der sker noget vigtigt.',
      en: 'Covers their ears and says "spoiler warning" when something important happens.',
      de: 'Hält sich die Ohren zu und sagt "Spoiler-Warnung", wenn etwas Wichtiges passiert.'
    }
  },
  {
    id: 'npc',
    title: {
      da: 'NPC\'en',
      en: 'The NPC',
      de: 'Der NPC'
    },
    description: {
      da: 'Stirrer tomt ud i luften og siger "hej", hver gang oplæseren holder en pause.',
      en: 'Stares blankly into the air and says "hello" every time the reader takes a pause.',
      de: 'Starrt leer in die Luft und sagt "Hallo", jedes Mal wenn der Vorleser eine Pause macht.'
    }
  },
  {
    id: 'meme_king',
    title: {
      da: 'Meme-kongen',
      en: 'Meme Queen',
      de: 'Der Meme-König'
    },
    description: {
      da: 'Genfortæller afsnittet med 6-7 ord.',
      en: 'Retells the paragraph in 6-7 words.',
      de: 'Erzählt den Abschnitt mit 6-7 Wörtern nach.'
    }
  },
  {
    id: 'giga_brain',
    title: {
      da: 'Giga Brain',
      en: 'Giga Brain',
      de: 'Giga-Gehirn'
    },
    description: {
      da: 'Genfortæller så alle forstår det',
      en: 'Retells it so everyone understands.',
      de: 'Erzählt es so nach, dass es jeder versteht.'
    }
  },
  {
    id: 'pause_police',
    title: {
      da: 'Pause-politiet',
      en: 'The Pause Police',
      de: 'Die Pausen-Polizei'
    },
    description: {
      da: 'Holder øje med, om oplæseren holder gode pauser.',
      en: 'Keeps an eye on whether the reader takes good pauses.',
      de: 'Achtet darauf, ob der Vorleser gute Pausen macht.'
    }
  },
  {
    id: 'artist',
    title: {
      da: 'Kunstneren',
      en: 'The Artist',
      de: 'Der Künstler'
    },
    description: {
      da: 'Tegner en lynhurtig tegning, mens de lytter, som viser, hvad der skete i afsnittet.',
      en: 'Draws a lightning-fast drawing while listening, showing what happened in the paragraph.',
      de: 'Zeichnet während des Zuhörens eine blitzschnelle Zeichnung, die zeigt, was im Abschnitt passiert ist.'
    }
  },
  {
    id: 'stalker',
    title: {
      da: 'Stalkeren',
      en: 'The Stalker',
      de: 'Der Stalker'
    },
    description: {
      da: 'Er alt for interesseret i det, oplæseren læser højt.',
      en: 'Is way too interested in what the reader is reading out loud.',
      de: 'Ist viel zu interessiert an dem, was der Vorleser laut vorliest.'
    }
  },
  {
    id: 'conspiracy_theorist',
    title: {
      da: 'Konspirations-teoretikeren',
      en: 'The Conspiracy Theorist',
      de: 'Der Verschwörungstheoretiker'
    },
    description: {
      da: 'Skal efter hvert afsnit forklare, hvorfor teksten i virkeligheden handler om noget helt andet (f.eks. at hovedpersonen er en alien).',
      en: 'Must explain after each paragraph why the text is actually about something completely different (e.g., the main character is an alien).',
      de: 'Muss nach jedem Abschnitt erklären, warum der Text in Wirklichkeit von etwas ganz anderem handelt (z. B. dass die Hauptfigur ein Alien ist).'
    }
  },
  {
    id: 'hype_man',
    title: {
      da: 'Hype-man',
      en: 'The Hype Man',
      de: 'Der Hype-Man'
    },
    description: {
      da: 'Står bag ved oplæseren og råber "PRÆCIS!", "SÅDAN!" eller "FORTÆL DEM DET!" efter de vigtigste pointer.',
      en: 'Stands behind the reader and shouts "EXACTLY!", "YES!" or "TELL THEM!" after the most important points.',
      de: 'Steht hinter dem Vorleser und ruft "GENAU!", "SO IST ES!" oder "SAG ES IHNEN!" nach den wichtigsten Punkten.'
    }
  }
];

export const UI_TEXT = {
  title: {
    da: 'Læseroller',
    en: 'Reading Roles',
    de: 'Lese-Rollen'
  },
  newRoles: {
    da: 'Nye læseroller',
    en: 'New Reading Roles',
    de: 'Neue Lese-Rollen'
  },
  people: {
    da: 'Personer',
    en: 'People',
    de: 'Personen'
  },
  language: {
    da: 'Sprog',
    en: 'Language',
    de: 'Sprache'
  }
};

export const COLORS = [
  '#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF', '#FFFFFC'
];
