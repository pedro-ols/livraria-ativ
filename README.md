# Loja Livraria_Virtual

## Atividade realizada em sala para revisão dos conteúdos de front-end voltados para componentização.

## Inicialização do Projeto
### O projeto foi inicado pelo comando no terminal que inicializa uma aplicação NextJS, em seguida, organizei os arquivos seguindo o modelo aprendido durante as aulas de front-end (substituir os arquivos .js por .jsx).
### Em seguida, copiei e colei os códigos disponibilizados pelo professor em seu repositório no GitHub na página da aplicação.

## Componentização
### Depois disso, dei uma boa olhada para o site a fim de reconhecer quais elementos da página poderiam ser componentizados ou não. Cheguei a conclusão que os elementos componentizáveis eram a Header, a Footer, os Principais Livros, os Novos Lançamentos, o Carrinho de compras, o Formulário de subscrição, o Banner Principal e os Cards.
### Como pode ser visto no projeto, eu criei uma pasta para componentes, e dentro desta, criei uma pasta para cada componente com dois arquivos (index.jsx e name.module.css). Passei os códigos da home para as pastas de componentes, exportei, importei novamente na home, chamei por eles na função e, com um pouco de tempo, tinha meu site todo componentizado e funcional. Vale ressaltar que alguns componentes dependiam de funções javaScript que estavam na home, e tive que transferi-las para os componentes.

## Props
### Uma vez tendo todos os componentes, passei a iniciar o processo de props, definindo as propriedades dos livros como parâmetros na função do componente de card e eliminando o método .map() do meu componente. Depois disso, exportei, importei nos componentes das seções que continham cards, e assim, depois de alguns erros, tinha todos os cards componentizados com props.
### Após isso, notei que os cards estavam organizados em colunas, não em linhas, com deveriam. Então fui nos componentes das seções e criei uma div pai para os cards e utilizei o flexbox para reorganizá-los.

## Problemas e desafios
### Durante o processo da atividade, notei certas dificulade, já que tive bastante trava para entender como o props funcionaria uma vez que já se tem o array de livros. Também não consegui colocar um selo de novo nos cards da seção de novos lançamentos, a única solução que pensei foi criar um novo componente só para os livros novos, no entanto, nao tive tempo para isso.
