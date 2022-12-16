Ao usar {{ pensamento.conteudo }}, o Angular insere o valor do atributo do componente no template.


A interpolação permite a visualização do valor de uma propriedade do componente no template com o uso de chaves duplas. {{ nome-da-propriedade }}.

Para enviar informação do typescript para o template, utilizamos colchetes na propriedade da tag html, como no exemplo: [src]=”imagem”.


O property binding funciona no mesmo sentido da interpolação, unidirecional, vindo a informação do componente para o template. É representado pelo uso de colchetes em atributos de elementos HTML.

Two-way data binding mantém a informação atualizada nas duas pontas da comunicação.


Este binding combina o recurso do property binding e o event binding em uma única notação usando a diretiva ngModel.[(ngModel)]=”nome-da-propriedade”.

resumo da aula 
Criar componente de formulário para adicionar novos pensamentos;
Passar valores de uma propriedade do component para atributos de tag dentro do template com o uso de property binding;
Mostrar valores de propriedades do component no template por meio da interpolação;
Escutar eventos do template e fazer a chamada de métodos no component com o event binding;
Usar a diretiva ngModel que pertence ao FormsModule para a comunicação bidirecional entre component e template;
Como funcionam os diferentes tipos de comunicação entre component e template.
