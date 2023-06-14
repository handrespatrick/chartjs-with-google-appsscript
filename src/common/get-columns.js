function getColumns() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var aba = planilha.getSheetByName("ChartJS");

  var ultimaColuna = aba.getLastColumn();
  var ultimaLinha = aba.getLastRow();
  var dados = aba.getRange(1, 1, ultimaLinha, ultimaColuna).getValues();

  var matrizesColunas = [];
  for (var i = 0; i < ultimaColuna; i++) {
    matrizesColunas.push([]);
  }

  for (var i = 0; i < dados.length; i++) {
    for (var j = 0; j < dados[i].length; j++) {
      var valor = dados[i][j];
      matrizesColunas[j].push(valor);
    }
  }

  return matrizesColunas
}