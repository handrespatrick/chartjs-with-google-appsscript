function getData() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ChartJS')
  const dataSheet = sheet.getDataRange().getValues()

  const label = dataSheet.map(d => d[0])
  const data = getColumns()

   return {
    label,
    data,
   }
}