function showContent(aba) {
        // Ocultar todas as abas
        const contents = document.querySelectorAll('.content');
        contents.forEach(content => {
            content.classList.remove('active');
        });
         document.getElementById(id).classList.add('active');

        // Mostrar a aba selecionada, se existir
        const selectedContent = document.getElementById(aba);
        if (selectedContent) {
            selectedContent.classList.add('active');
        } else {
            console.warn(`A aba com ID "${aba}" não foi encontrada.`);
        }
    }
  