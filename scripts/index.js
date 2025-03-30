class VoteResult {
    constructor(region, democraticParty, republicanParty) {
        this.region = region;
        this.democraticParty = democraticParty;
        this.republicanParty = republicanParty;
    }

    whoIsWinning() {

        // if else 
        // if else if 
        // if

        // if(this.democraticParty > this.republicanParty) {
        //     return "Democratic Party"
        // }
        // else {
        //     return "Republican Party"
        // }


        // if (this.democraticParty > this.republicanParty) {
        //     return "Democratic Party"
        // }
        // else if (this.republicanParty > this.democraticParty) {
        //     return "Republican Party"
        // }
        // else {
        //     return "Tie"
        // }

        if (this.democraticParty > this.republicanParty) {
            return "Democratic Party"
        }

        if (this.republicanParty > this.democraticParty) {
            return "Republican Party"
        }

        if (this.republicanParty === this.democraticParty) {
            return "tie"
        }

    }

}

const table = document.getElementById("table-container");

const voteResults = [
    new VoteResult("Arizona", 5434, 4534),
    new VoteResult("New York", 4324, 1233),
    new VoteResult("Florida", 756, 535),
    new VoteResult("Texas", 5643, 4765),
    new VoteResult("Georgia", 123, 987),
    new VoteResult("Vermont", 12, 12),
];

var tableHTML = `<table>`;

tableHTML += `<tr>
    <td>Serial No</td>
    <td>Region</td>
    <td>Democratic Party</td>
    <td>Republican Party</td>
    <td>Lead</td>
</tr>`

voteResults.forEach((result, index) => {
    tableHTML += `<tr>
        <td>${index + 1}</td>
        <td>${result.region}</td>
        <td>${result.democraticParty}</td>
        <td>${result.republicanParty}</td>
        <td>${result.whoIsWinning()}</td>
    </tr>`
})

tableHTML += `</table>`;

table.innerHTML = tableHTML;
