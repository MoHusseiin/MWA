function pluck(isPluck) {
    if(isPluck)
        highSetInterval(this);
    else
        lawNextTrick(this);
}

function highSetInterval(self){
    setImmediate(()=> console.log(Math.max(...self)));
}

function lawNextTrick(self){
    process.nextTick(() => console.log(Math.min(...self)));
}

Array.prototype.pluck = pluck;

console.log("start");
[1, 2, 3, 4, 5, 6, 7, 8].pluck(true);
[1, 2, 3, 4, 5, 6, 7, 8].pluck(false);
console.log("finish");