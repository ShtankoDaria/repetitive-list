function resetHandler() {
  // reset state

  // re-render UI using state

  // log interaction: handler name, new state
  log.push({
    handler: 'reset',
    listData: JSON.parse(JSON.stringify(listData))
  });
};
