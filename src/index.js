function onOpen(e) {
  addMenu(); 
}

function addMenu() {
  const menu = SpreadsheetApp.getUi().createMenu('Charts');
  menu.addItem('BarChartJS', 'doGet')
  menu.addToUi(); 
}

function doGet() {
  html = HtmlService.createHtmlOutputFromFile('index')
  SpreadsheetApp.getUi().showModalDialog(html, 'BarChartJS');
}