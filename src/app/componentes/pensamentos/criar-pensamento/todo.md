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

resumo sobre formGroup 
Na tag <form> do html, é necessário fazer um property binding por meio da diretiva formGroup e atribuir a ela o valor da propriedade formulario, criada na classe typescript. Além disso, é necessário incluir em cada input a propriedade formControlName, com o nome declarado na classe.

<form [formGroup]="formulario">

formControlName="conteudo"

formControlName="autoria"

formControlName="modelo"

O FormGroup representa um grupo de dados no formulário. Você pode ter vários grupos em um único formulário, o que facilita e organiza o controle dos dados.

O FormControlName é uma diretiva que sincroniza os controles em um formGroup através da sincronização por meio do nome da propriedade do formGroup, como fiz com o conteúdo, autoria e modelo.
<p>{{ formulario.get('conteudo')?.value }}</p>

Em um formulário reativo, você sempre pode acessar qualquer controle de formulário através do método get, passando para ele o campo e a propriedade que deseja acessar. Como queremos o valor do campo, devemos passar a propriedade value.
