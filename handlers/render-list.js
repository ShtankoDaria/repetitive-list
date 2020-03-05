function saveHandler() {
  debugger;
  // read user input

  // update state

  // re-render UI using state

  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save',
    newInput,
    listData: JSON.parse(JSON.stringify(listData))
  })
}
