const EventEmitter = require('events');
let intervalID, count = 0;
class Gym extends EventEmitter{

    // Just play a set training in gym then stop
    play(sportType){
        intervalID = setInterval(() => {
            if(count === 10){
                clearInterval(intervalID);
                return;
            }
            this.emit('boom', count, sportType);
            count++;
        }, 1000);
    }
}

module.exports = Gym;