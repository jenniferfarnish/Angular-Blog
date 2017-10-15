import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import api from './api';


let clientPath = path.join(__dirname, '../client');

let app = express();
app.use(express.static(clientPath));

app.use(bodyParser.json());

//If it starts with /api, it will use api.ts
app.use('/api', api);

app.get('*', (req, res, next) => {
    if (isAsset(req.url)) {
        return next(); // call the next route handler
    } else {
        // Not a server asset, send back index.html so Angular takes over
        // e.g. /chirps
        res.sendFile(path.join(clientPath, 'index.html'));
    }
});

app.listen(3000);

function isAsset(path: string) {
    // ex: /images/tree.png, then pieces is ['', 'images', 'tree.png']
    let pieces = path.split('/');
    if (pieces.length === 0) {
        return false;
    }
    // ex: in the same example, last would be 'tree.png'
    let last = pieces[pieces.length - 1]; // Get the last piece after we've cut up the URL on the /
    
    // "If it's not the case that /api is NOT found OR it's not the case that /? is NOT found"
    // AKA: If /api or /? was found
    if (path.indexOf('/api') !== -1 || path.indexOf('/?') !== -1) {
        return true;
    } else if (last.indexOf('.') !== -1) {
        // "If it's not the case that '.' was not found in last"
        // AKA: If . was found
        return true; // must be a file extension e.g. tree.png
    } else {
        // In all other cases, this is NOT a server asset and must be a front-end asset
        // should be handled by Angular.
        return false;
    }
}
