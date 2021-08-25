const { Given, When, Then } = require("@cucumber/cucumber")
const assert = require("assert")

const { medico, viajante } = require("./../../app")

/** GIVEN */

Given('Um Doctor de nome {string}', function (string) {
	medico.name = string
})

/** WHEN */

When('o Traveler estiver doente', function () {
	viajante.isHealthy = false
})

When('o Doctor curar o Traveler', function () {
	viajante.isHealthy = (viajante)
})

When('o Travelers estiver saudável', function () {
	viajante.isHealthy = true
})

/** THEN */

Then('o Traveler fircará saudável', function () {
	viajante.isHealthy = true
})

Then('o Traveler continua saudável', function () {
	viajante.isHealthy = true
})