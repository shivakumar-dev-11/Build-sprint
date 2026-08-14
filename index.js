function formatName(firstName, lastName) {
  return firstName + " " + lastName;
}

function getGreeting(timeOfDay) {
  if (timeOfDay === "morning") {
    return "Good morning";
  } else if (timeOfDay === "afternoon") {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

function createGreeting(firstName, lastName, timeOfDay) {
  let name = formatName(firstName, lastName);
  let greeting = getGreeting(timeOfDay);

  return greeting + ", " + name + "!";
}

console.log(createGreeting("shiva", "kumar ", "morning"));
