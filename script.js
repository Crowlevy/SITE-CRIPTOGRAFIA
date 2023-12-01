
function encrypt(){
    criptoAplicar(1)
}
function decrypt(){
    criptoAplicar(-1)
}
function criptoAplicar(n){
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWYXZ"
    let inputText = document.getElementById("inputText").value
    let resultado = ''
        for (let i=0;i<inputText.length;i++){
            const char = inputText[i].toUpperCase()
            const alf = alfabeto.indexOf(char) !==-1
            const caracteres = [" ", "@", "!", "_", ".","-","?","*"]
            if (!alf){
                if (char == " "){
                    resultado += "@"
                }
                else if (char == "@"){
                    resultado += " "
                }

                else if (char == "!"){
                    resultado += "_"
                }
                else if(char == "_"){
                    resultado+="!"
                }

                else if(char == "."){
                    resultado+="-"
                }
                else if(char == "-"){
                    resultado+="."
                }

                else if(char == "?"){
                    resultado+="*"
                }
                else if(char == "*"){
                    resultado+="?"
                }else {
                    resultado += inputText[i]
                }

            }else if(alf){
                let index = alfabeto.indexOf(char)
                index = (index+n+26)%26
                resultado +=(inputText[i] == inputText[i].toUpperCase()) ? alfabeto[index]:alfabeto[index].toLowerCase()
            }
            else{
                resultado+=char
            }
        }
        document.getElementById("output").textContent = resultado
}