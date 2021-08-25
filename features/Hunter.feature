# language: pt

Funcionalidade: Hunter
	Como um caçador 
	Devo caçar animais
	Para alimentar meus companheiros.

	Contexto: 
        Dado um caçador de nome "Billy"
        E ele sempre começa a viagem com 2 comidas 
        E ele sempre começa a viagem saudável.

	Cenário: Caçou para conseguir mais refeições
	    Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições do caçador deve ser igual a 7

    Cenário: Comeu e continuou saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições do caçador deve ser igual a 0
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições do caçador deve ser igual a 0
        E o Hunter ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições do caçador deve ser igual a 8
        E o Hunter não ficará doente

    Cenário: Compartilhar comida
        Quando o Hunter compartilhar 1 refeições 1 vezes
        Então a quantidade de refeições do Hunter deve ser igual a 0
        E a quantidade de refeições do Traveler deve ser igual a 2