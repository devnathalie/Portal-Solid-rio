const cpfInput = document.getElementById('cpf');
if(cpfInput){
    cpfInput.addEventListener('input', function(e){
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d)/, '$1.$2');
        v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = v;
    });

}

const telInput = document.getElementById('telefone');
if(telInput){
    telInput.addEventListener('input', function(e){
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
        v = v.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
        e.target.value = v;
    });
}

const cepInput = document.getElementById('cep');
if(cepInput){
    cepInput.addEventListener('input', function(e){
        let v = e.target.value.replace(/\D/g, '');
        v = v.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = v;
    });
}

const form = document.querySelector('form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Cadastro enviado com sucesso!');
        form.reset();
    });