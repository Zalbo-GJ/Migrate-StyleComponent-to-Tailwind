import React, { useEffect } from 'react';

import { Headers } from '../../components';
import { scrollToTop } from '../../utils/constants';
import { Container, Centerize, Link } from './styles';

const PrivacyPolicy = () => {
  useEffect(scrollToTop, []);

  return (
    <Container>
      <Centerize>
        <Headers.H1>Informativa sulla Privacy</Headers.H1>
        <Headers.H2>Entrata in vigore: 30 ottobre 2019</Headers.H2>
      </Centerize>
      <Headers.H3>Benvenuti!</Headers.H3>
      <p>
        Abbiamo redatto i presenti Termini di Servizio (di seguito "Termini")
        per farti conoscere le regole che governano il nostro rapporto con te.
        Abbiamo fatto il possibile per eliminare il linguaggio giuridico,
        tuttavia alcuni punti dei Termini potrebbero ancora risultare come un
        contratto tradizionale. Il motivo è semplice: questi Termini
        costituiscono effettivamente un contratto vincolante fra te e Snap Inc.
        Ti preghiamo pertanto di leggerli con attenzione.
      </p>
      <p>
        Usando Snapchat, Bitmoji o qualsiasi altro nostro prodotto o servizio
        correlato ai presenti Termini (di seguito collettivamente indicati come
        "Servizi"), accetti i Termini. Ovviamente, se non trovi accettabili i
        Termini, non utilizzare i Servizi.
      </p>
      <p>
        ARBITRATO: I PRESENTI TERMINI CONTENGONO UNA{' '}
        <Link href="">CLAUSOLA SUGLI ARBITRATI</Link> RIPORTATA PIÙ AVANTI.
        SALVO CHE PER DETERMINATI TIPI DI CONTROVERSIE CITATI IN TALE CLAUSOLA
        SUGLI ARBITRATI, TU E SNAP INC. ACCETTATE CHE OGNI CONTROVERSIA TRA LE
        PARTI SARÀ TRATTATA MEDIANTE ARBITRATO OBBLIGATORIO E VINCOLANTE E TU E
        SNAP INC. RINUNCIATE AD OGNI DIRITTO A PARTECIPARE A CLASS-ACTION O
        ARBITRATI COLLETTIVI.
      </p>
      <Headers.H3>Chi può utilizzare i Servizi</Headers.H3>
      <p>
        Nessuno al di sotto dei 13 anni d'età può creare un account o utilizzare
        i Servizi. Possiamo offrire anche ulteriori Servizi - soggetti a
        condizioni aggiuntive - che potrebbero richiedere un'età anche superiore
        per l'utilizzo dei Servizi. Ti invitiamo quindi a leggere attentamente
        tutti i Termini.
      </p>
      <p>Utilizzando i Servizi, dichiari di:</p>
      <ul>
        <li>
          Essere legittimato/a a stipulare un contratto vincolante con Snap Inc.
        </li>
        <li>
          Non essere una persona a cui è stato negato l'utilizzo dei Servizi
          secondo le leggi degli Stati Uniti o di altra giurisdizione
          applicabile; ad esempio, di non essere incluso/a nell'elenco del
          Dipartimento del Tesoro degli Stati Uniti tra gli "Specially
          Designated Nationals" né di dover sottostare ad altro analogo divieto.
        </li>
        <li>Non essere stato condannato per reati a sfondo sessuale.</li>
        <li>
          Osservare i presenti Termini e tutte le leggi, le norme e i
          regolamenti locali, statali, nazionali e internazionali applicabili.
        </li>
      </ul>
      <p>
        Se utilizzi i Servizi per conto di una società o di un altro soggetto,
        dichiari di avere l’autorizzazione ad accordare tutte le licenze
        indicate nei presenti Termini e accetti i Termini stessi per conto della
        società o del soggetto in questione. Se utilizzi i Servizi per conto di
        un ente del Governo degli Stati Uniti, accetti l'{' '}
        <Link href="">
          Emendamento ai Termini di Servizio di Snap Inc. per gli utenti
          governativi USA
        </Link>
        .
      </p>
    </Container>
  );
};

export default PrivacyPolicy;
