// Função para codificar o texto em Base64
function encodeBase64() {
    var inputText = document.getElementById("inputText").value;

    // Verifica se o campo de entrada não está vazio
    if (inputText) {
        // Codifica o texto em Base64 usando a função btoa
        var encodedText = btoa(inputText);
        
        // Exibe o texto codificado na área de texto para o usuário
        document.getElementById("encodedText").value = encodedText;

        // Exibe a mensagem de sucesso
        showNotification('success', 'Texto codificado com sucesso!');
    } else {
        // Exibe a mensagem de erro
        showNotification('error', 'Por favor, insira o texto para codificar.');
    }
}




// Função para decodificar o texto Base64
function decodeBase64() {
    var inputText = document.getElementById("inputTextDecode").value;

    // Verifica se o campo de entrada não está vazio
    if (inputText) {
        try {
            // Decodifica o texto Base64 usando a função atob
            var decodedText = atob(inputText);

            // Exibe o texto decodificado na área de texto para o usuário
            document.getElementById("decodedText").value = decodedText;
        } catch (e) {
            // Exibe uma mensagem de erro se houver um problema na decodificação
            alert("Erro na decodificação. Verifique o texto Base64.");
        }
    } else {
        alert("Por favor, insira o texto codificado em Base64.");
    }
}

// Função para lidar com o upload de arquivo Base64
function handleFileUpload(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();

        // Leitura do arquivo como texto (não como Base64)
        reader.onload = function(e) {
            // O conteúdo do arquivo será lido como texto
            var fileContent = e.target.result;
            
            // Exibe o conteúdo Base64 do arquivo na caixa de texto 'inputTextDecode'
            document.getElementById("inputTextDecode").value = fileContent;
        };

        // Lê o arquivo como texto (não como Base64)
        reader.readAsText(file);
    }
}









// Função para copiar o texto codificado para a área de transferência
function copyToClipboard(id) {
    var copyText = document.getElementById(id);  // Pega o textarea pelo ID

    // Usa o método moderno para copiar o texto para a área de transferência
    navigator.clipboard.writeText(copyText.value).then(function() {
        // Mostrar a notificação de sucesso
        showNotification('success', 'Texto copiado com sucesso!');
    }).catch(function(err) {
        // Mostrar a notificação de erro
        showNotification('error', 'Erro ao copiar o texto.');
    });
}

// Função para mostrar as notificações
function showNotification(type, message) {
    var notification = document.getElementById("notification");
    var notificationMessage = document.getElementById("notificationMessage");

    // Substitui a mensagem da notificação
    notificationMessage.textContent = message;

    // Esconde qualquer notificação anterior (se existir)
    notification.classList.remove("show", "hide", "hidden");
    notification.classList.add("hide"); // Inicia a animação de saída

    // Espera a animação de saída terminar para esconder completamente
    setTimeout(function() {
        notification.classList.add("hidden");  // Esconde a notificação
        notification.classList.remove("hide");  // Remove o efeito de esconder
        notification.classList.add(type); // Adiciona a classe correspondente ao tipo
        notification.classList.add("show");  // Exibe a nova notificação
    }, 500); // Espera a animação de saída terminar (500ms)

    // Esconde a notificação após 3 segundos
    setTimeout(function() {
        notification.classList.remove("show");
        notification.classList.add("hide");
    }, 3000);
}
