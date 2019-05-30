const Gym = require('./gym');

const gym = new Gym();

// register event
gym.on('boom' , (count, sportType) => { console.log(`${count + 1}- ${sportType} is working out`)});
gym.play("Athlete");