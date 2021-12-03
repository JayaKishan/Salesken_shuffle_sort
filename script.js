let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  cubeWrapper = document.getElementById('cube-container'), appendCubeElement;

numbers.forEach((item, index) => {
  cubeWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>'
})
shuffleNums = () => {
  let index = 0
  numbers = numbers.sort(() => { return .5 - Math.random() });
  cubeWrapper.innerHTML = ''
  while (index < numbers.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbers[index]
    cubeItem.setAttribute('data-item', numbers[index])
    cubeWrapper.appendChild(cubeItem)
    ++index;
  }
}
sortNums = () => {
  let index = 0
  numbers = numbers.sort((a, b) => { return a - b });
  cubeWrapper.innerHTML = ''
  while (index < numbers.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbers[index]
    cubeItem.setAttribute('data-item', numbers[index])
    cubeWrapper.appendChild(cubeItem)
    ++index;
  }
}

shuffleValues = (numbersItems) => {
  let index = 0, numbers = numbersItems;
  cubeWrapper.innerHTML = ''
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
}
shufflingArray = () => {
  let index = 0
  shuffleValues(numbers)
  cubeWrapper.innerHTML = ''
  while (index < numbers.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbers[index]
    cubeItem.setAttribute('data-item', numbers[index])
    cubeWrapper.appendChild(cubeItem)
    ++index;
  }
};