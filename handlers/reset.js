function resetHandler() {
  // reset state
  document.getElementById("inputText").value = "";
  document.getElementById("inputNumber").value = 0;
  // re-render UI using state
  listData.text = [];
  listData.repetitions = [];
  const olElement = document.getElementById("list");
  olElement.innerHTML = "";

  //const replicationDiv = document.getElementById('replication');
  //const detailsEl = replicationDiv.children[0];
  //const extraLink = detailsEl.children[1];

  //detailsEl.removeChild(extraLink);

  // log interaction: handler name, new state
  log.push({
    handler: "reset",
    listData: JSON.parse(JSON.stringify(listData))
  });
}
