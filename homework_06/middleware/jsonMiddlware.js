// const observable$ = require('rxjs');

module.exports = (req, res, next) => {
    if(req.method == "POST"){
        let data= '';
        req.on('data', (chunk) => {
            data += chunk
        });
        req.on('end', () => {
            try {
                const jsonGrade = JSON.parse(data);
                console.log(jsonGrade);
                req.body = jsonGrade;
                // flag = true;
                return next();
            } catch (error) {
                // flag = false;
                return next(new Error("invalid JSON"));
            } 
            // observable$.next(flag);
            // setTimeout(() => {
            //     observable$.complete();
            // }, 500);
        });
        // observable$.subscribe(
        //     function(flag){ 
        //         if(flag){
        //             return next();
        //         }else{
        //             return next('error');   
        //         }
        //     },
        //     function(error){ return next('error'); },
        //     function(){ console.log('done!'); }
        // );
    } else {
        return next();
    }
};