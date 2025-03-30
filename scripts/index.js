var usElectionVotingResults = [
    {
        serialNo: 1,
        region: "Florida",
        democraticParty: 432,
        republicanParty: 342
    },
    {
        serialNo: 2,
        region: "Arizona",
        democraticParty: 432,
        republicanParty: 342
    }
    // ......
];

// DOM Document Object Model

function createVoteTable(){

    var tableContainer = document.getElementById("table-container")

    var tableHTML = `<table>`;

    usElectionVotingResults.forEach(function(item){
        tableHTML += `<tr>
            <td>${item.serialNo}</td>
            <td>${item.region}</td>
            <td>${item.democraticParty}</td>
            <td>${item.republicanParty}</td>
        </tr>`
    })
    
    tableHTML += `</table>`

    tableContainer.innerHTML = tableHTML
}

createVoteTable();