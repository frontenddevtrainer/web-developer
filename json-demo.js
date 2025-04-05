async function getPeopleData(){
    try {
        const peopleList = document.getElementById("peopleList");
        let peopleListHTML = ""
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        const people = await response.json();
        console.log(people);

        peopleListHTML += `<ul>`;
        people.forEach(function(person){
            peopleListHTML += `<li>${person.name}, ${person.email}</li>`
        })
        peopleListHTML += `</ul>`;
        peopleList.innerHTML = peopleListHTML;
    } catch (error) {
        alert("Error getting data from API.")
    }
}


getPeopleData();
