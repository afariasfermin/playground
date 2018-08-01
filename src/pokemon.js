function Pokemon(name, type) {
    this.name = name;
    this.type = type;
}

Pokemon.prototype.setName = function(name) {
    this.name = name;
};

Pokemon.prototype.getName = function() {
    console.log(`Pokemon's name: ${this.name}`);
}

Pokemon.prototype.setType = function(type) {
    this.type = type;
};

Pokemon.prototype.getType = function() {
    console.log(`Pokemon's type: ${this.type}`);
}


export default Pokemon;
