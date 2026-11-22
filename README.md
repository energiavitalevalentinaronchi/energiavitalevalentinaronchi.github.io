# Energia Vitale

Sito informativo della Dott.ssa Valentina Ronchi, psicologa, specializzanda in psicoterapia. Il sito è composto da pagine HTML, foglio di stile, JavaScript e immagini locali. Per mantenerlo e pubblicarlo non occorrono installazioni o script di compilazione.

## Aprire il sito in anteprima

Estrai tutti i file e apri `index.html` con Chrome, Firefox, Edge o Safari. La navigazione e la grafica funzionano anche offline. Per una prova del modulo usa dati di fantasia e fermati alla bozza.

## Verifiche prima di rendere pubblico il sito

1. Verifica che i collegamenti all’informativa in `privacy.html` si aprano dal piè di pagina e dalla bozza email. Aggiorna il testo se cambiano i servizi impiegati o i criteri di conservazione delle richieste di contatto.
2. Controlla la descrizione dei percorsi, i recapiti e le indicazioni per gli incontri. Il ritratto della professionista è nella pagina «Chi sono» e l’acquerello botanico è nella pagina «La natura».

## Pubblicare su GitHub Pages con il piano gratuito

L’indirizzo previsto è `https://energiavitalevalentinaronchi.github.io/`. Per avere esattamente questo indirizzo il nome utente o il nome dell’organizzazione su GitHub deve essere `energiavitalevalentinaronchi`.

1. Accedi a GitHub con l’account che gestisce il sito.
2. Apri il [repository pubblico di Energia Vitale](https://github.com/energiavitalevalentinaronchi/energiavitalevalentinaronchi.github.io). Il codice e le risorse del repository sono visibili pubblicamente.
3. Estrai lo ZIP e apri la cartella estratta. In GitHub scegli **Add file → Upload files** e trascina nell’area di caricamento tutti i file insieme alla cartella `assets/`. `index.html` e `assets/` devono trovarsi allo stesso livello. Se il sistema nasconde `.nojekyll`, crealo come file vuoto direttamente nella radice del repository. Salva con **Commit changes** sul ramo `main`.
4. Apri **Settings → Pages**. In **Build and deployment**, scegli **Deploy from a branch**. Seleziona **`main`** e **`/(root)`**, poi **Save**.
5. Attendi l’esito della pubblicazione nella scheda **Actions**, quindi apri **Settings → Pages → Visit site**. Verifica che l’indirizzo sia quello previsto e che funzioni in HTTPS. Per questo indirizzo non serve acquistare né collegare un dominio.
6. Prova il menu da cellulare e apri le pagine Privacy e Contatti. Verifica il destinatario email, il numero WhatsApp, il profilo Instagram e la bozza nella sezione «Prepara qui la tua email». Il visitatore invia il messaggio dalla sua app. Il sito non riceve i valori inseriti.

Se il nome utente è diverso, usa il repository **`nomeutente.github.io`** con quel nome e aggiorna il dominio nei **canonical**, in **og:url**, in `robots.txt` e in `sitemap.xml`. Il pacchetto è predisposto come sito utente alla radice del sottodominio.

## Aggiornare testi e grafica

| File o cartella | Contenuto |
| --- | --- |
| `index.html` | Homepage, sottotitolo e introduzione |
| `chi-sono.html`, `di-cosa-mi-occupo.html`, `genitori.html`, `il-percorso.html`, `natura.html`, `dove-ricevo.html` | Pagine dedicate |
| `contatti.html`, `privacy.html` | Recapiti, modulo e informativa |
| `assets/` | Logo, acquerelli, illustrazioni, font, stili e script |
| `404.html`, `robots.txt`, `sitemap.xml`, `.nojekyll` | Pagina di errore, indicizzazione e pubblicazione statica |

Per aggiornare il sito modifica i file interessati e carica la nuova versione sullo stesso ramo. Mantieni il sito informativo. GitHub Pages pone limiti all’uso commerciale della piattaforma e ai flussi che trattano dati sensibili. Email e WhatsApp sono indicati per il primo contatto e la richiesta di una richiamata. Gli appuntamenti, le prestazioni e l’eventuale scambio di dati clinici si gestiscono al di fuori del sito.

Font Noto Sans e Noto Serif Display con licenza SIL Open Font License in `assets/licenza-font.txt`.

## Documentazione

- [Avvio rapido di GitHub Pages](https://docs.github.com/en/pages/quickstart)
- [Impostare il ramo di pubblicazione](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Caricare file e cartelle su GitHub](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)
- [GitHub Pages e dati di navigazione](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Limiti di GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [Codice deontologico degli psicologi italiani](https://www.psy.it/la-professione-psicologica/codice-deontologico-degli-psicologi-italiani/codice-deontologico-vigente/)
