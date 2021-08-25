# language: pt

Funcionalidade: Doctor
	Como um Doctor
	Eu devo curar o Traveler
	Para que possamos seguir viagem.

	Contexto:
	Dado Um Doctor de nome "Billy"

	Cenário: Curou um Traveler doente
		Quando o Traveler estiver doente
		E o Doctor curar o Traveler
		Então o Traveler fircará saudável

	Cenário: Curou Traveler saudável
		Quando o Travelers estiver saudável
		E o Doctor curar o Traveler
		Então o Traveler continua saudável