module.exports = (req, res, next)=>{
    if(req.method == "POST"){
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            try {
                const jsonBody = JSON.parse(body);
                req.body = jsonBody;
                return next();
            } catch (error) {
                return next(new Error("Invalid JSON !"));
            }
        });
    }else{
        return next();
    }
};