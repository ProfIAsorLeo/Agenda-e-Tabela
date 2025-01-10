# Google Sheets Task Manager (Gerenciador de Tarefas no Google Sheets)

Este projeto é um script para Google Sheets que permite gerenciar tarefas (demandas) diretamente em uma planilha. Ele oferece uma interface de usuário personalizada para adicionar, visualizar e excluir tarefas, além de recursos como:

- **Priorização de Tarefas:** Defina a prioridade de cada tarefa (0 a 3).
- **Status da Tarefa:** Acompanhe o status de cada tarefa (Travado, Andando, Checar, Em Pesquisa, Concluído, Cancelado).
- **Datas de Início e Ação:** Registre a data de início da demanda e a data da próxima ação.
- **Validação de Dados:** Garante que as datas sejam inseridas nos formatos corretos.
- **Interface Personalizada:** Uma caixa de diálogo é usada para facilitar a adição de novas tarefas.
- **Exclusão de Tarefas:** Um botão dedicado permite excluir tarefas com facilidade.

## Funcionalidades

- Adicionar novas tarefas através de uma caixa de diálogo personalizada.
- Excluir tarefas selecionadas.
- Visualizar as tarefas em uma planilha organizada com colunas para prioridade, data de início, descrição, status, ação e data.
- Abrir a caixa de diálogo clicando na aba Agenda.

## Como Usar

1. **Abra a planilha:** [Link para a sua planilha do Google Sheets, com permissões de visualização para "Qualquer pessoa com o link"].
2. **Faça uma cópia:** Vá em "Arquivo" > "Fazer uma cópia" para salvar uma cópia editável da planilha na sua conta do Google Drive.
3. **Abra o editor de scripts:** Vá em "Extensões" > "Apps Script".
4. **Execute a função `onOpen()`:** Isso criará o menu personalizado "Agenda" (se ainda não existir).
5. **Adicione tarefas:** Clique em "Agenda" > "Adicionar Demanda" ou clique na célula A2 da planilha para abrir a caixa de diálogo e adicionar novas tarefas.
6. **Exclua tarefas:** Selecione a linha da tarefa que você quer excluir e clique no botão "Excluir Demanda" ou vá em "Agenda" > "Excluir Demanda".

## Estrutura do Código

O projeto é composto por dois arquivos principais:

- **`Código.gs`:** Contém o código Google Apps Script que controla a lógica do aplicativo, incluindo a exibição da caixa de diálogo, a inserção e exclusão de dados na planilha e a criação do menu personalizado.
- **`dialog.html`:** Contém o código HTML e JavaScript para a interface da caixa de diálogo de adição de tarefas.

## Capturas de Tela
Visual da Planilha 
![image](https://github.com/user-attachments/assets/03deedc1-9b85-474c-b7e9-0ea0c712904a)

Bloco para adicionar 
![image](https://github.com/user-attachments/assets/db823f2c-c51c-4ec7-9476-3b8389003aca)





## Contribuindo

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, por favor, abra uma issue ou envie um pull request.

## Autor

[Leonardo Cassiano Silva] - [ProfIAsorLeo]
[]

## Licença

Este projeto está licenciado sob a [Nome da Licença, por exemplo, MIT License] - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
