import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App';
import Html from './client/Html';

const port = 3000;
const server = express;

server.get('/', (req, res) => {
    /* 
    renderToString() will take our react app and trun it into a string
    to be inserted into our Html template function.
    */

    const body = renderToString(<App />);
    const title = 'Server side Rendering with Styled Component';

    res.send(
        Html({ body, title })
    );
});

server.listen(port);
console.log(`Serving at http://localhost:${post}`);

