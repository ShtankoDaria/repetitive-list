window.onload = () => {
  debugger;
  // render UI with initial state
  document.getElementById("inputText").value = listData.text;
  document.getElementById("inputNumber").value = listData.repetitions;
  // log initial state
  log.push({
    initialListData: JSON.parse(JSON.stringify(listData))
  });
};
