function onOpen(e) {
  addMenu(); 
}

function addMenu() {
  const menu = SpreadsheetApp.getUi().createMenu('Charts');
  menu.addItem('BarChartJS', 'doGet')
  menu.addToUi(); 
}

function doGet() {
  const html = HtmlService.createHtmlOutputFromFile('index')
    .setWidth(1000)
    .setHeight(1000)
    .setSandboxMode(HtmlService.SandboxMode.NATIVE);
    SpreadsheetApp.getUi()
    .showModalDialog(html, 'BarChartJS');
}