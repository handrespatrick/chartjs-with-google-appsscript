function buildDatasets(data, colors, labels){
  let datasets = []
  for(i = 0; i < data.length; i++){
    datasets.push({
      label: labels[i],
      backgroundColor: colors[i],
      data: data[i],
    })
  }

  return datasets
}