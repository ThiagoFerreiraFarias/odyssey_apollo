const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const TrackAPI = require('./datasources/track-api');

//Mock data to use in development environment
const mock = {
    Query: () => ({
        tracksForHome: () => [...new Array(6)],
    }),
    Track: () => ({
        id: () => 'track_01',
        title: () => 'Astro Kitty, Space Explorer',
        author: () => {
            return {
                name: "Grumpy Cat",
                photo:
                 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
            };
        },
        thumbnail: () =>
         'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
        length: () => 1210,
        modulesCount: () => 6
    })
};

/**
Instantiate server and indicates the typeDefs const;
Allow mocked data indicating the mock to use.
**/
const server = new ApolloServer({
    typeDefs,
    //mocks: mock
    resolvers,
    dataSources:() => {
        return {
            trackAPI: new TrackAPI(),
        }
    }
});

server.listen().then(() => {
    console.log(`
        🚀  Server is running!
        🔉  Listening on port 4000
        📭  Query at https://studio.apollographql.com/dev
    `);
});

