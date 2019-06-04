const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;
const { Observable } = require('rxjs');
const { shareReplay } = require('rxjs/operators');

app.set('strict routing', true);
app.enable('trust proxy');
app.set('x-powered-by', false);
app.enable('case sensitive routing');
app.disable('etag' === app.set('etag', false));

function makeRequest(url) {
    try {
        console.log(`Making a request to ${url}`)
        const response = axios.get(url)
        return response
    } catch (error) {
        return { error }
    }
}

const obs$ = Observable.create(async (observer) => {
    const results = await makeRequest('https://randomuser.me/api/?results=10');
    if(results.error) observer.error(results.error);
    else observer.next(results);
    observer.complete();
}).pipe(shareReplay(1));

app.get('/users', (req, res) => { 
    res.setHeader('Last-Modified', new Date());
    res.setHeader('Cache-Control', 'private, max-age=86400');
    res.setHeader('If-Modified-Since', new Date());
    res.setHeader('Link', '<http://localhost:3000/users?p=1> rel="first"');
    res.setHeader('Content-Type', 'application/json');
    obs$.subscribe((result) => res.send(result.data));
    res.end;
});

app.listen(port, () =>console.log(`The server running on port ${port}`));