const resolvers = {
    //resolver key
    Query: {
        //default 4 parameters (parent, args, context, info)

        //Returns an array of tracks that will be used to populate the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },

        //get a single track by id, for the track page
        track: (_, args, {dataSources}) => {
            return dataSources.trackAPI.getTrack(args.id);
        },
    },
    //resolver key
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ( { id }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(id);
        }
    }
};

module.exports = resolvers;