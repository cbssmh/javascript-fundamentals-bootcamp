export function AnimalList(animals) {
  return animals.map(animal => `<li>${animal.name}</li>`).join("");
}
