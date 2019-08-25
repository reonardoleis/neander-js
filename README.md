# neander-js
Reimplementação do processador hipotético Neander em JavaScript para usar online.
<br>
Pode ser acessado [aqui](https://reonardoleis.github.io/neanderjs).

## Instruções:
- O arquivo .js com o simulador em si e que renderiza o html está em src/js/neander.js
- Permite exportação e importação de código no formato JSON e exportação em Assembly(para montar no Hidra)
- Os códigos das instruções podem ser escritos em formato de texto(LDA, STA, etc) case-insensitive ou em  formato numérico
- Para exportar como assembly, pode-se adicionar um "v" na frente do que for variável. Assim, o código exportado conterá um "org LINHA db VALOR", que facilita para depois, no montador, adicionar uma label na variável. 

# TODO
- Adicionar contador de acessos e instruções
- Adicionar modo step(ok)
- Corrigir possíveis bugs
- Adicionar importação em Assembly formato Hidra
