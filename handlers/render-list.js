function saveHandler() {
  debugger;
  // read user input
  const inputValue = document.getElementById("inputText").value;
  const repeatValue = document.getElementById("inputNumber").value;
  // update state
  listData.text = inputValue;
  listData.repetitions = repeatValue;
  // re-render UI using state
  const olElement = document.getElementById("list");
  for (let i = 0; i < repeatValue; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = inputValue;
    olElement.appendChild(newLi);
  }
  // log user interaction: handler name, user input, new state
  log.push({
    handler: "save",
    inputValue,
    listData: JSON.parse(JSON.stringify(listData))
  });
}
