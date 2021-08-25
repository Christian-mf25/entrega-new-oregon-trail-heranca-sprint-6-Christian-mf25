const { Given, When, Then } = require("@cucumber/cucumber")
const assert = require("assert")

const { cacador, viajante} = require("./../../app")

/** GIVEN */

Given('um caçador de nome {string}', function (string) {
	cacador.name = string
})

Given('ele sempre começa a viagem com {int} comidas', function (int) {
	cacador.food = int
})

Given('ele sempre começa a viagem saudável.', function () {
	cacador.food = true
})

/** WHEN */

When('o Hunter sair para caçar {int} vezes', function (int) {
	for(let i = 0;i<int;i++){
		cacador.hunt()
	}
})

When('o Hunter parar para comer {int} vezes', function (int) {
	for(let i = 0; i < int; i++){
		cacador.eat()
	}
})

When('o Hunter compartilhar {int} refeições {int} vezes', function (int, int2) {
	for(let i = 0; i < int2; i++){
		cacador.giveFood(viajante,int)
	}
})

/** THEN */

Then('o Hunter não ficará doente', function () {
	cacador.isHealthy = true
})
  
Then('o Hunter ficará doente', function () {
	cacador.isHealthy = false
})

Then('a quantidade de refeições do Hunter deve ser igual a {int}', function (int) {
	assert.strictEqual(cacador.food, int)
})

Then('a quantidade de refeições do Traveler deve ser igual a {int}', function (int) {
	assert.strictEqual(viajante.food, int)
})

Then('a quantidade de refeições do caçador deve ser igual a {int}', function (int) {
	cacador.food = int
});
