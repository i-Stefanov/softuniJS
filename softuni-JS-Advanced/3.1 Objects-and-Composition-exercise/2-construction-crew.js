function constructionCrew(worker) {
  if (worker.dizziness) {
    worker.levelOfHydrated = hydrate(worker.weight, worker.experience);
    worker.dizziness = false;
  }
  function hydrate(weight, experience) {
    return weight * experience * 0.1;
  }
  //   console.log(worker);
  return worker;
}
constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
