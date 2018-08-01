import Pokemon from './pokemon';

function Diglett() {
    Pokemon.call(this, 'Diglett', 'Ground');
}

Diglett.prototype = Object.create(Pokemon.prototype);
Diglett.prototype.constructor = Diglett;

export default Diglett;
