// Keeps track of a winner
let winner = false;

// Get a reference to the cards div
const cards = document.querySelector('.cards');

// Render cards
cards.innerHTML = getCards();

// Get a reference to the cards buttons
const cardButtons = document.querySelectorAll('.card-btn');

// Get a reference to the LABOUR votes span
const LABOURVotesEl = document.querySelector('.votes-number-LABOUR');

// Get a reference to the CONSERVATIVE votes span
const CONSERVATIVEVotesEl = document.querySelector('.votes-number-CONSERVATIVE');

// Get a reference to the LIBERAL DEMOCRAT votes span
const LIBERAL_DEMOCRATVotesEl = document.querySelector('.votes-number-LIBERAL_DEMOCRAT');

// Get a reference to the GREEN votes span
const GREENVotesEl = document.querySelector('.votes-number-GREEN');

// Get a reference to the REFORM PARTY votes span
const REFORM_PARTYVotesEl = document.querySelector('.votes-number-REFORM_PARTY');

// Get a reference to the PATIENT SUPPORT TRUST votes span
const PATIENT_SUPPORT_TRUSTVotesEl = document.querySelector('.votes-number-PATIENT_SUPPORT_TRUST');

// Get a reference to the FREEDOM ALLIANCE votes span
const FREEDOM_ALLIANCEVotesEl = document.querySelector('.votes-number-FREEDOM_ALLIANCE');

// Get a reference to the OFFICIAL MONSTER RAVING LOONY PARTY votes span
const OFFICIAL_MONSTER_RAVING_LOONY_PARTYVotesEl = document.querySelector('.votes-number-OFFICIAL_MONSTER_RAVING_LOONY_PARTY');

// Get a reference to the HERITAGE PARTY votes span
const HERITAGE_PARTYVotesEl = document.querySelector('.votes-number-HERITAGE_PARTY');

// Get a reference to the THE PARTY PARTY votes span
const THE_PARTY_PARTYVotesEl = document.querySelector('.votes-number-THE_PARTY_PARTY');

// Get a reference to the RECLAIM PARTY votes span
const RECLAIM_PARTYVotesEl = document.querySelector('.votes-number-RECLAIM_PARTY');

// Get a reference to the REJOIN EU votes span
const REJOIN_EUVotesEl = document.querySelector('.votes-number-REJOIN_EU');

// Get a reference to the UKIP votes span
const UKIPVotesEl = document.querySelector('.votes-number-UKIP');

// Get a reference to the INDEPENDENT votes span
const INDEPENDENTVotesEl = document.querySelector('.votes-number-INDEPENDENT');

// Set event listener for the vote buttons
cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-LABOUR')) {
            addVote(0, 'LABOUR', LABOURVotesEl)
        } else if (e.target.classList.contains('btn-CONSERVATIVE')) {
            addVote(1, 'CONSERVATIVE', CONSERVATIVEVotesEl)
        } else if (e.target.classList.contains('btn-LIBERAL_DEMOCRAT')) {
            addVote(2, 'LIBERAL_DEMOCRAT', LIBERAL_DEMOCRATVotesEl)
        } else if (e.target.classList.contains('btn-GREEN')) {
            addVote(3, 'GREEN', GREENVotesEl)
        } else if (e.target.classList.contains('btn-REFORM_PARTY')) {
            addVote(4, 'REFORM_PARTY', REFORM_PARTYVotesEl)
        } else if (e.target.classList.contains('btn-PATIENT_SUPPORT_TRUST')) {
            addVote(5, 'PATIENT_SUPPORT_TRUST', PATIENT_SUPPORT_TRUSTVotesEl)
        } else if (e.target.classList.contains('btn-FREEDOM_ALLIANCE')) {
            addVote(6, 'FREEDOM_ALLIANCE', FREEDOM_ALLIANCEVotesEl)
        } else if (e.target.classList.contains('btn-OFFICIAL_MONSTER_RAVING_LOONY_PARTY')) {
            addVote(7, 'OFFICIAL_MONSTER_RAVING_LOONY_PARTY', OFFICIAL_MONSTER_RAVING_LOONY_PARTYVotesEl)
        } else if (e.target.classList.contains('btn-HERITAGE_PARTY')) {
            addVote(8, 'HERITAGE_PARTY', HERITAGE_PARTYVotesEl)
        } else if (e.target.classList.contains('btn-THE_PARTY_PARTY')) {
            addVote(9, 'THE_PARTY_PARTY', THE_PARTY_PARTYVotesEl)
        } else if (e.target.classList.contains('btn-RECLAIM_PARTY')) {
            addVote(10, 'RECLAIM_PARTY', RECLAIM_PARTYVotesEl)
        } else if (e.target.classList.contains('btn-REJOIN_EU')) {
            addVote(11, 'REJOIN_EU', REJOIN_EUVotesEl)
        } else if (e.target.classList.contains('btn-UKIP')) {
            addVote(12, 'UKIP', UKIPVotesEl)
        } else if (e.target.classList.contains('btn-INDEPENDENT')) {
            addVote(13, 'INDEPENDENT', INDEPENDENTVotesEl)
        }
    })
})