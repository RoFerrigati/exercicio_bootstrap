$(document).ready(function () {
    // Máscara para o telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação do formulário
    $("#cadastroForm").submit(function (event) {
        event.preventDefault(); // Evita o envio do formulário
        
        // Limpa os erros anteriores
        $(".form-control").removeClass("is-invalid");
        $(".invalid-feedback").hide();

        let isValid = true;

        // Validação do nome
        if ($("#nome").val() === "") {
            $("#nome").addClass("is-invalid");
            $("#nomeError").text("O nome é obrigatório.").show();
            isValid = false;
        }

        // Validação do email
        const email = $("#email").val();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            $("#email").addClass("is-invalid");
            $("#emailError").text("Por favor, insira um e-mail válido.").show();
            isValid = false;
        }

        // Validação do telefone
        const telefone = $("#telefone").val();
        const telefonePattern = /^\(\d{2}\)\s\d{5}-\d{4}$/;
        if (!telefonePattern.test(telefone)) {
            $("#telefone").addClass("is-invalid");
            $("#telefoneError").text("Por favor, insira um telefone válido.").show();
            isValid = false;
        }

        // Se tudo estiver correto, envia o formulário (por enquanto só vai mostrar um alert)
        if (isValid) {
            alert("Cadastro realizado com sucesso!");
            $("#cadastroForm")[0].reset();
        }
    });
});
