// const removeNum = function (removedNum) {
//     return this.filter(value => value !== removedNum)
// };

// const removeNum = function (removedNum) {
//     let self = this;
//     return new Promise(function(resolve, reject){
//         resolve(self.filter(value => value !== removedNum));
//     });
// };


const removeNum = function (removedNum) {
    let self = this;
    return new Promise(function(resolve, reject){
        resolve(self.filter(value => value !== removedNum));
    });
};

async function excRemove(){
    try {
        console.log(await [1, 3, 4, 2, 1, 5].removeNum(1));
    }
    catch (e) {
        console.log(e);
    }
}

Array.prototype.removeNum = removeNum;

console.log('Start');
// [1, 3, 4, 2, 1, 5].removeNum(1).then(value => console.log(value));
excRemove();
console.log('Finish');

