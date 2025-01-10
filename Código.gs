// Exibe a caixa de diálogo para adicionar uma nova demanda
function showDialog() {
  var html = HtmlService.createHtmlOutputFromFile('dialog')
    .setWidth(400)
    .setHeight(350);
  SpreadsheetApp.getUi()
    .showModalDialog(html, 'Adicionar Nova Demanda');
}

// Fecha a caixa de diálogo (truque)
function closeDialog() {
  SpreadsheetApp.getUi().showModalDialog(HtmlService.createHtmlOutput('<div></div>').setWidth(0).setHeight(0), '');
}

// Insere os dados da nova demanda na planilha
function insertData(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('AGENDA - CHECK LIST');

  // Validação da Data de Início (Formato MM/AAAA)
  if (!/^(0[1-9]|1[0-2])\/\d{4}$/.test(data.dataInicio)) {
    throw new Error('Formato de Data de Início inválido. Use MM/AAAA.');
  }

  // Validação da Data (Formato DD/MM/AAAA)
  if (!/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(data.data)) {
    throw new Error('Formato de Data inválido. Use DD/MM/AAAA.');
  }

  // Tenta inserir os dados na planilha
  try {
    sheet.appendRow([
      data.prioridade,
      data.dataInicio,
      data.descricao,
      data.status,
      data.acao,
      data.data
    ]);
    return 'Dados inseridos com sucesso!';
  } catch (error) {
    return 'Erro ao inserir dados: ' + error.message;
  }
}

// Exclui a linha selecionada na planilha
function deleteSelectedRow() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('AGENDA - CHECK LIST');
  var row = sheet.getActiveCell().getRow();

  // Verifica se a linha selecionada é válida (não é o cabeçalho e não está fora do intervalo de dados)
  if (row > 1 && row <= sheet.getLastRow()) {
    sheet.deleteRow(row);
    SpreadsheetApp.getUi().alert('Demanda excluída com sucesso!');
  } else {
    SpreadsheetApp.getUi().alert('Por favor, selecione uma linha válida para excluir.');
  }
}

// Cria o menu personalizado na planilha
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Agenda')
    .addItem('Adicionar Demanda', 'showDialog')
    .addItem('Excluir Demanda', 'deleteSelectedRow')
    .addToUi();
}

//Chama a função showDialog quando a célula A2 da planilha 'AGENDA - CHECK LIST' é clicada
function onSelectionChange(e) {
  var range = e.range;
  if (range.getA1Notation() === 'A2' && range.getSheet().getName() === 'AGENDA - CHECK LIST') {
    showDialog();
  }
}
