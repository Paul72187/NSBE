// Return a list of cards
const getCards = () => {
    return candidates.map(candidate => {
        return `<div class="card">
            <img class="card-image" src="images/${candidate.id}.jpg">
            <div class="card-info">
                <div class="candidate-votes">
                    <span class="votes-number-${candidate.id}">${candidate.votes}</span>
                    <span class="votes-text">VOTES</span>
                </div>
                <div class="line"></div>
                <div class="candidate-info">
                    <span class="candidate-name">${candidate.name}</span>
                    <span class="candidate-party">${candidate.party}</span>
                </div>
            </div>
            <button class="card-btn btn-${candidate.id}">VOTE</button>
        </div>`
    })
}

// Adds one vote to the corresponding candidate.
const addVote = (index, candidate, votesEl) => {
    // Increase vote by one as long as there's not a winner
    if (!winner) {
        // Increase vote by one
        candidates[index].votes++;

        // Update votes element
        votesEl.textContent = candidates[index].votes;

        // Check if the candidate won
        isWinner(candidate, candidates[index].votes);
    }
}

// If candidate won, set winner variable to true
const isWinner = (candidate, votes) => {
    if (votes === 500) {
        winner = true;

        setWinnerLoser(candidate);
    }
}

// Shows who won and who lost
const setWinnerLoser = (candidate) => {
    if (candidate === "LABOUR") {
        document.querySelector('.btn-LABOUR').textContent = "WINNER";
        document.querySelector('.btn-CONSERVATIVE').textContent = "LOSER";
        document.querySelector('.btn-LIBERAL_DEMOCRAT').textContext = "LOSER";
        document.querySelector('.btn-GREEN').textContent = "LOSER";
        document.querySelector('.btn-REFORM_PARTY').textContent = "LOSER";
        document.querySelector('.btn-PATIENT_SUPPORT_TRUST').textContent = "LOSER";
        document.querySelector('.btn-FREEDOM_ALLIANCE').textContent = "LOSER";
        document.querySelector('.btn-OFFICIAL_MONSTER_RAVING_LOONY_PARTY').textContent = "LOSER",
        document.querySelector('.btn-HERTIAGE_PARTY').textContent = "LOSER";
        document.querySelector('.btn-THE_PARTY_PARTY').textContent = "LOSER";
        document.querySelector('.btn-RECLAIM_PARTY').textContent = "LOSER";
        document.querySelector('.btn-REJOIN_EU').textContent = "LOSER";
        document.querySelector('.btn-UKIP').textContent = "LOSER";
        document.querySelector('.btn-INDEPENDENT').textContent = "LOSER"
    } else if (candidate === "CONSERVATIVE") {
        document.querySelector('.btn-CONSERVATIVE').textContent = "WINNER";
        document.querySelector('.btn-LABOUR').textContent = "LOSER";
        document.querySelector('.btn-LIBERAL_DEMOCRAT').textContent = "LOSER";
        document.querySelector('.btn-GREEN').textContent = "LOSER";
        document.querySelector('.btn-PATIENT_SUPPORT_TRUST').textContent = "LOSER";
        document.querySelector('.btn-FREEDOM_ALLIANCE').textContent = "LOSER";
    } else if (candidate === "LIBERAL_DEMOCRAT") {
        document.querySelector('.btn-LIBERAL_DEMOCRAT').textContent = "WINNER";
        document.querySelector('.btn-LABOUR').textContent = "LOSER";
        document.querySelector('.btn-CONSERVATIVE').textContent = "LOSER";
        document.querySelector('.btn-GREEN').textContent = "LOSER";
        document.querySelector('.btn-PATIENT_SUPPORT_TRUST').textContent = "LOSER";
        document.querySelector('.btn-FREEDOM_ALLIANCE').textContent = "LOSER";
    } else if (candidate === "GREEN") {
        document.querySelector('.btn-GREEN').textContent = "WINNER";
        document.querySelector('.btn-LABOUR').textContent = "LOSER";
        document.querySelector('.btn-CONSERVATIVE').textContent = "LOSER";
        document.querySelector('.btn-LIBERAL_DEMOCRAT').textContent = "LOSER";
        document.querySelector('.btn-PATIENT_SUPPORT_ALLIANCE').textContent = "LOSER";
        document.querySelector('.btn-FREEDOM_ALLIANCE').textContent = "LOSER";
    }
}