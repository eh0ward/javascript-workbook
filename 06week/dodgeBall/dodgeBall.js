const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "Can stop a ball mid-air like Neo stops bullets.",
    placeBorn: "Omaha, Nebraska",
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "She's a Vampire...nuff said.",
    placeBorn: "Louisville, Kentucky",
  },
  {
    id: 4,
    name: "Cynthia Dolittle",
    age: 20,
    skillSet: "Dr. Dolittle's daughter. ",
    placeBorn: "Pawnee, Texas",
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "Taxi driver by day, Ninja by night.",
    placeBorn: "New York, New York",
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet:
      "Part robot, part kangaroo. He can throw the ball over 100mph and is impossible to hit.",
    placeBorn: "Perth, Australia",
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet:
      "Aspiring actress, they call her Sticky Finger Watu, bc she can catch a ball with one finger.",
    placeBorn: "Los Angeles, California",
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "........ ummm...",
    placeBorn: "New Orleans, Louisiana",
  },
  {
    id: 9,
    name: "Franco Howard",
    age: 2,
    skillSet: "Best dog ever! His cuteness is beyond distracting.",
    placeBorn: "Austin, Texas",
  },
];

const listOfPlayers = [];
const blueTeam = [];
const redTeam = [];

// Creates a Player Class.
class Player {
  constructor(
    id,
    name,
    age,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.canThrowBall = canThrowBall;
    this.canDodgeBall = canDodgeBall;
    this.hasPaid = hasPaid;
    this.isHealthy = isHealthy;
    this.yearsExperience = yearsExperience;
  }
}

// Extends Player Class.
class Teammate extends Player {
  constructor(id, name, age, color) {
    super(id, name, age, color);
    this.color = color;
  }
}

// When the "List of Tryouts" button is clicked, eligable tryouts will be added to the DOM.
const listPeopleChoices = () => {
  let list = document.getElementById("people");
  arrOfPeople.map((person) => {
    // Adds player's name to the dom under "Tryouts"
    let li = document.createElement("li");
    li.appendChild(
      document.createTextNode(person.name + " " + " === " + person.skillSet)
    );
    list.append(li);

    // // Adds player's skills to the dom under "Tryouts"
    // let liSkill = document.createElement("liSkill");
    // liSkill.appendChild(document.createTextNode("Skill: " + person.skillSet));
    // list.append(liSkill);

    // List Player's by name to be drafted.
    li.id = person.name;
    console.log(person.name);

    // Creates "Draft Player" button for tryouts to be add to the "Draft Pool".
    let draftButton = document.createElement("button");
    draftButton.classList.add("button");
    // Displays "Draft Player" inside the button.
    draftButton.innerHTML = "Draft Player";
    // Adds an event listener to the "Draft Player" button,
    //   so when clicked the select player in the "Tryout Pool" will be moved to the "Draft Pool".
    draftButton.addEventListener("click", function () {
      draftPlayer(person.name);
    });

    li.appendChild(draftButton);
  });
};

// Moves Players to "Draft Pool".
const draftPlayer = (name) => {
  console.log(`${name} was added to Draft Pool`);
  li = document.getElementById(name);
  // Removes player and button when "Draft Player" button is clicked.
  li.parentNode.removeChild(li);

  // Loops through each available Player in arrOfPeople
  //   and pushes them to the listOfPlayers array.
  arrOfPeople.forEach((person) => {
    if (person.name == name) {
      let newPlayer = new Player(person.id, person.name, person.age);
      listOfPlayers.push(newPlayer);
      addPlayer(newPlayer);
    }
  });

  // Remove player from "Tryout Pool"
  arrOfPeople.filter((person) => {
    person.name != name;
  });
};

// Adds player to the DOM
const addPlayer = (player) => {
  let listElement = document.getElementById("players");
  let li = document.createElement("li");
  li.id = player.name;

  // Shows Player's attributes in DOM under "Draft Pool"
  li.appendChild(
    document.createTextNode(player.name + " - " + player.age + " years old")
  );

  // Creates a "Blue Team" button.
  // Button displays "Blue Team".
  // Adds an event listener so when clicked makeTeammate function is invoked
  //   in order to assign Player a team color.
  let blueButton = document.createElement("button");
  blueButton.classList.add("blueButton");
  blueButton.innerHTML = "Blue Team";
  blueButton.addEventListener("click", function () {
    makeTeammate(player.name, "Blue");
  });
  // Adds the "Blue Team" button to the DOM.
  li.appendChild(blueButton);

  // Creates a "Red Team" button.
  // Button displays "Red Team".
  // Adds an event listener so when clicked makeTeammate function is invoked
  //   in order to assign Player a team color.
  let redButton = document.createElement("button");
  redButton.classList.add("redButton");
  redButton.innerHTML = "Red Team";
  redButton.addEventListener("click", function () {
    makeTeammate(player.name, "Red");
  });
  // Adds the "Red Team" button to the DOM.
  li.appendChild(redButton);

  //   // Shows Player's attributes in DOM under "Draft Pool"
  //   li.appendChild(
  //     document.createTextNode(player.name + " - " + player.age + " years old")
  //   );

  // Lists Players added to "Draft Pool"
  listElement.append(li);
};

// Assigns player to a team color
const makeTeammate = (name, color) => {
  console.log(`${color} Team has drafted ${name}!`);
  li = document.getElementById(name);
  // Removes player from "Draft Pool"
  li.parentNode.removeChild(li);

  // Loops through player by name and pushes them to a team.
  listOfPlayers.forEach((player) => {
    if (player.name == name) {
      let newTeammate = new Teammate(player.id, player.name, player.age, color);
      if (color == "Red") {
        redTeam.push(newTeammate);
      } else {
        blueTeam.push(newTeammate);
      }

      // Adds player to selected team.
      addTeammate(newTeammate);
    }
  });
};

// Adds the Player to the selected team.
const addTeammate = (player) => {
  let color = player.color;
  console.log(`A new Player has been added to ${color} Team`);
  let listElement = document.getElementById(color.toLowerCase());
  let li = document.createElement("li");
  //   li.classList.add("teamColor");
  li.name = player.name;
  li.appendChild(
    document.createTextNode(
      player.color +
        " Team welcomes, " +
        " " +
        " nuuumber " +
        player.id +
        "! " +
        player.name +
        "!"
    )
  );
  listElement.append(li);
};

// TESTS

// Should list players that are eligable to play dodgeball when player list is clicked.
// Players should at least display name and skillSet attributes when list of players is generated.
// Each player should be assigned a button in order to be selected into the draft.
// Player should move from arrOfPeople to listOfPlayers && once selected be removed from listOfPlayers.

// Player should be added to a new list in order to be assigned a team.
// Player should be assigned a "Red Team" && "Blue Team" button.

// Once player is a assigned a team, Player should be removed from new list and moved to the selected team list.
// Each team should have its own list to be assigned to.
// Player should display a statement that they have been picked to that team.
// Text should be changed to the color of their team.
