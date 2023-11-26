function hasCandidate(name, candidates) {
  for (const candidate of candidates) {
    if (name === candidate.name) {
      return true;
    }
  }
  return false;
}

(() => {
  // ask number of candidates
  let numberCandidates;
  while (true) {
    numberCandidates = parseInt(prompt("Enter the number of candidates"));
    if (Number.isNaN(numberCandidates)) alert("Please enter a valid number.");
    else break;
  }

  // ask for name of candidates
  let candidates = [];
  for (let i = 0; i < numberCandidates; i += 1) {
    // ensure no dup name
    while (true) {
      const nameInput = prompt(`Name for candidate ${i + 1}`);
      if (hasCandidate(nameInput, candidates))
        alert("Duplicated candidate name, please enter a different one");
      else {
        candidates[i] = { name: nameInput, votes: 0 };
        break;
      }
    }
  }

  // ask for number of voters
  let numberVoters;
  while (true) {
    numberVoters = parseInt(prompt("Enter the number of voters"));
    if (Number.isNaN(numberVoters)) alert("Please enter a valid number.");
    else break;
  }

  //vote
  for (let i = 0; i < numberVoters; i += 1) {
    while (true) {
      const nameInput = prompt(
        `Voter ${i + 1}, who do you vote? (empty input to pass)`,
      );
      if (nameInput === "") break;
      else if (!hasCandidate(nameInput, candidates))
        alert(`${nameInput} is not a valid candidate, try again.`);
      else {
        for (const candidate of candidates) {
          if (candidate.name === nameInput) {
            candidate.votes += 1;
            break;
          }
        }
        break;
      }
    }
  }

  // announce
  candidates.sort((a, b) => b.votes - a.votes);
  console.log(
    `The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`,
  );
  console.log("results:");
  candidates.forEach((candidate) => {
    console.log(`${candidate.name}: ${candidate.votes} votes`);
  });
})();
