class Wagon{
	constructor(capacity){
		this.capacity = capacity
		this.travelers = []
	}

	getAvailableSeatCount(){
		return this.capacity
	}

	join (traveler){
		if(this.capacity > 0){
			this.capacity -= 1
			this.travelers.push(traveler)
		}
	}

	shouldQuarantine(){
		for(let i = 0; i < this.travelers.length; i++){
			let traveler = this.travelers[i]
			if(traveler.isHealthy !== true){
			}
		}
	}

	totalFood(){
		let result = this.travelers.reduce((acc, item), function(){
			return acc + item.food
		},0)
	}

}

module.exports = Wagon