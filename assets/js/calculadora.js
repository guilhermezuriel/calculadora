/*IMPORTANTE
    Dentro de um objeto, ao utilizarmos uma Arrow function, o this sempre
será pertencente a aquele que criou o objeto, isto é, se necessitarmos
de um this diferente não teríamos acesso (TradeOFF)
*/


function criaCalculadora(){
    return {
        //Propertys
        display: document.querySelector('.display'),

        //Methods
          inicia(){
            this.clickBtn();
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta;
            } catch(e){
                alert('Conta Inválida');
                return;
            }
        },

        clearDisplay(){
            this.display.value = '';
            //
        },

        btnDel(){
            this.display.value = this.display.value.slice(0, -1);
            //Retorna o tamanho da string sem o último caractere
        },

        /*Sempre que eu precisar referenciar uma chave do meu objeto,
        eu preciso utilizar o this */
        clickBtn(){
            document.addEventListener('click', (e) => {

                const el = e.target; // Determina o que eu estou clicando

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                };

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                };

                if(el.classList.contains('btn-del')){
                    this.btnDel();
                };

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            });
        },

        /* Notas de Erro
        uem chama o método é quem é o this, neste caso, quem está chamando
        o método é o document, por isso, tem-se um erro inicial
        
        Dessa forma utilizamos o método bind(this) em toda a função
        Indicando para o interpretador utilizar o this -> calculadora ao invés do document
        */
        
        btnParaDisplay(valor){
            this.display.value += valor;
        },

    }
}

const calculadora =  criaCalculadora();
calculadora.inicia();