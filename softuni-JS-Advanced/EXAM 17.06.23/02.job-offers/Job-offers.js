class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = [];
  }
  jobApplication(candidates) {
    let candidatesNames = [];
    candidates.forEach((candidate) => {
      let [name, education, yearsExperience] = candidate.split(`-`);
      yearsExperience = parseInt(yearsExperience);
      const candidateExists = this.jobCandidates.find(
        (candidate) => candidate.name === name
      );
      if (!candidateExists) {
        this.jobCandidates.push({ name, education, yearsExperience });
      } else {
        if (candidate.yearsExperience < yearsExperience) {
          candidate.yearsExperience = yearsExperience;
        }
      }

      if (!candidatesNames.includes(name)) {
        candidatesNames.push(name);
      }
    });
    return `You successfully added candidates: ${candidatesNames.join(`, `)}.`;
  }
  jobOffer(chosenPerson) {
    let [name, minimlalExperience] = chosenPerson.split(`-`);
    minimlalExperience = parseInt(minimlalExperience);
    const candidateExists = this.jobCandidates.find(
      (candidate) => candidate.name === name
    );
    const candidateWithExperience = this.jobCandidates.find(
      (candidate) => candidate.yearsExperience >= minimlalExperience
    );
    if (!candidateExists) {
      throw new Error(`${name} is not in the candidates list!`);
    } else if (!candidateWithExperience) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimlalExperience} years.`
      );
    } else {
      candidateExists.yearsExperience = "hired";
      return `Welcome aboard, our newest employee is ${name}.`;
    }
  }
  salaryBonus(name) {
    const candidateExists = this.jobCandidates.find(
      (candidate) => candidate.name === name
    );
    if (!candidateExists) {
      throw new Error(`${name} is not in the candidates list!`);
    }
    if (candidateExists.education === "Bachelor") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
    } else if (candidateExists.education === "Master") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
    } else {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
  }
  candidatesDatabase() {
    if (this.jobCandidates.length === 0) {
      throw new Error("Candidate Database is empty!");
    }
    let line1 = `Candidates list:`;
    let result = [line1];
    this.jobCandidates = this.jobCandidates.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    for (const candidate of this.jobCandidates) {
      result.push(`${candidate.name}-${candidate.yearsExperience}`);
    }
    return result.join(`\n`);
  }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(
  Jobs.jobApplication([
    "John Doe-Bachelor-10",
    "Peter Parker-Master-5",
    "Jordan Cole-High School-5",
    "Daniel Jones- Bachelor-18",
  ])
);
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());
