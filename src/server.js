const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
                headers: ['Accept', 'Content-Type']
            }
        },
    });

    server.route(routes)

    await server.start();
    console.log(`Server run at ${server.info.uri}`);
};

init();