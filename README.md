# Fokus - Alura Project
![visualização em diferentes dispositivos](./imagens/preview.png)

Projeto parte do curso Alura: Manipulando Elementos no DOM.<br> Objetivo: Praticar a manipulação de elementos no DOM e adicionar dinamismo à página com JavaScript.

## Requisitos
- Permitir ao usuário selecionar o modo (foco, descanso curto, descanso longo).
- Alterar o background e o texto do banner de acordo com o modo selecionado.
- Destacar apenas o texto do modo selecionado.
- Permitir ao usuário ativar/desativar uma música de fundo.
- Emitir um efeito sonoro ao clicar em "Começar" e iniciar a contagem regressiva.
- Alterar o botão "Começar" para "Pausar" se o temporizador estiver ativo.
- Emitir um efeito sonoro e pausar o temporizador ao clicar em "Pausar".
- Emitir um alerta sonoro quando a contagem regressiva terminar.
- Exibir o tempo inicial correspondente ao modo selecionado.
- Atualizar o tempo restante na tela a cada decremento.

## Conteúdo Aplicado na Prática
- **Métodos de seleção de elementos do DOM**
	- `querySelector('seletor')` -> Busca e retorna o 1º elemento que corresponde ao seletor passado (tag, classe ou id);
	- `querySelectorAll('seletor')` -> Faz o mesmo que o anterior, mas retorna uma lista de elementos;
	- `getElementsByClassName('classe')` -> Retorna uma lista de elementos que correspondem à classe;
	- `getElementById('id')` -> Retorna o elemento que corresponde ao id.
- **Métodos de Atributos HTML**
	- `elemento.setAttribute(atributo, valor)` -> Adiciona um valor ao atributo indicado. Se não existir, é criado.
- **Atributos Personalizados (data attributes)** 
	- Atributos personalizados adicionados a elementos HTML que possibilitam o armazenamento de dados que não serão exibidos na página. Devem ter o prefixo "data";
	- Neste projeto, utilizamos o "data-contexto" que armazena o modo do temporizador para alternar entre eles e fazer modificações no layout.
- **Alterar/Inserir Textos Dinamicamente**
	- `elemento.innerHTML` -> Adiciona conteúdos textuais e elementos HTML;
	- `elemento.textContent` -> Adiciona apenas conteúdos textuais.
- **Trabalhar com Classes**
	- `elemento.classList.add('classe')` -> Adiciona uma classe ao elemento;
	- `elemento.classList.remove('classe')` -> Remove uma classe do elemento.
- **Eventos**
	- `elemento.addEventListener('evento', callback)` -> Adiciona um monitorador para um evento e executa uma resposta (callback). Trabalhamos com *click* e *change* no Fokus.
- **Trabalhar com Áudio**
	- `new Audio()` ->  Cria uma instância de um elemento de áudio;
	- `elemento.play()` -> Reproduz o áudio;
	- `elemento.pause()` -> Pausa o áudio;
	- `elemento.paused` -> Verifica o estado do áudio (reproduzindo/pausado);
	- `elemento.loop` -> Define se o áudio deve ser reproduzido em loop.
- **Timer**
	- `setInterval(funcao, tempo)` -> Executa uma função ou código repetidamente a cada intervalo de tempo indicado em milissegundos. Sempre retorna um identificador do intervalo;
	- `clearInterval(intervaloId)` -> Interrompe uma chamada do `setInterval` ao receber o identificador correspondente ao intervalo.
- **Utilizar Objeto Date**
	- `new Date()` -> Cria uma nova instância de um objeto Date;
	- `elemento.toLocaleTimeString()` -> Formata o objeto de Date para uma string. No projeto, as opções passadas são: `"pt-Br", {minute: '2-digit', second: '2-digit'}`. Indicando o local (pt-Br) e que desejamos exibir apenas os minutos e segundos do objeto, com dois dígitos.

## Guias
[Projeto Base](https://github.com/alura-cursos/Fokus)
<br>
[Figma do Projeto Alura](https://www.figma.com/community/file/1412824641884998254)
<br>
[Curso](https://cursos.alura.com.br/course/javascript-manipulando-elementos-dom)