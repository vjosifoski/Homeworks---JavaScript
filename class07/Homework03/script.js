function UserCredentials(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
}

let users = [
    new UserCredentials("Stancho", "Stanchov", "stanchov.stancho@example.com", "StanchoStancho"),
    new UserCredentials("Ivan", "Ilievski", "ivan.Ilievski@example.com", "IvanIvan"),
    new UserCredentials("Ivana", "Ivanovska", "ivana.ivanovska@example.com", "IvanovskaIvanovska"),
    new UserCredentials("Goran", "Jovanovski", "goran.jovanovski@example.com", "goran123"),
];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let newUser = new UserCredentials(firstName, lastName, email, password);
    users.push(newUser);

    alert("Successfully registered");
    this.reset();
});

document.getElementById('showUsers').addEventListener('click', function() {
    let userList = document.getElementById('userList');
    userList.innerHTML = '';

    for (let i = 0; i < users.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = `${users[i].firstName} ${users[i].lastName}`;
        userList.appendChild(listItem);
    }
    
});
