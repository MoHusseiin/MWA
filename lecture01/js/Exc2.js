$(document).ready(function(){
    // $("#fetch").click(function(){
    //     const postsPromise = fetch('https://randomuser.me/api/');
    //
    //     postsPromise
    //         .then(data => data.json())
    //         .then(data => {
    //             console.log(data.results.map(function (e) {
    //             return {'name': e.name, 'location':e.location }
    //         })) })
    //      .catch((err) => {console.log(err);})
    // });

    $("#fetch").click(function(){
        const postsPromise = fetch('https://randomuser.me/api/');

        postsPromise
            .then(data => data.json())
            .then(data => {
                console.log(data.results.map(
                    (e) => {
                        return {'name': e.name, 'location':e.location }
                    }
                )) })
            .catch((err) => {console.log(err);})
    });

    $("#async").click(function(){
        asynMapData();
    });

     function asynfetch() {
         try {
             let dataPromise = fetch('https://randomuser.me/api/');
             return dataPromise;
         }catch (e) {
             console.log(e);
         }
     }

     async function asynToJsonData() {
         try {
             let dataJson = await asynfetch();
             return dataJson.json();
         }catch (e) {
             console.log(e);
         }
    }

    async function asynMapData() {
         try {
             let data = await asynToJsonData();
             console.log(data.results.map(
                 (e) => {
                     return {'name': e.name, 'location':e.location }
                 }
             ));
         }catch (e) {
             console.log(e);
         }
    }

    function getFetch(){
        return fetch('https://randomuser.me/api/');
    }

    $("#reactive").click(function () {
        const {from} = rxjs;
        const { map, flatMap } = rxjs.operators;
        let data = getFetch();
        from(data)
            .pipe(
                flatMap(data => data.json()),
                map(result => result.results.map(e => ({'name':e.name , 'location': e.location})))
            )
            .subscribe(value => console.log(value));
    });
});