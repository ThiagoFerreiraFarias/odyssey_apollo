const resolvers = {
    /**
     * Returns an array of tracks that will be used
     * to populate the homepage grid of our web client
     */

    //resolver key
    Query: {
        //default 4 parameters (parent, args, context, info)
        tracksForHome: (_, __, {dataSources}) => {
            return dataSources.trackAPI.getTracksForHome();
        }
    },

    //resolver key
    Track: {
        author: ({authorId}, _, {dataSources}) =>{
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;