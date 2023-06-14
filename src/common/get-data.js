function getData() {
  const header = getColumns()[0]
  let data = getColumns()
  data.shift()

  const colors = ["rgba(82,154,190,0.5)", "rgba(151,187,205,0.5)", "rgba(220,220,220,0.5)"]
  const labels = ["# of Votes", "# of Sales","# of I dont know"]
  const datasets = buildDatasets(data, colors, labels)

  return {
    data: {
      header,
      datasets
    }
  }
}