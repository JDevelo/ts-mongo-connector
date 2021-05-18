export default class mongoConnect {
    /**
     * Database is a String
     */
    public database: String
    /**
     * mongoose
     */
    public mongoose;
    constructor(ops = {
        database: null
    }) {
        this.database = ops.database;
        /**
         * Requires mongoose
         */
        this.mongoose = require('mongoose');
    }
    c(database?: String) {
        /**
         * If there is no url in the strings then
         */
        if(!database) throw new ReferenceError('DATABASE URL has not need been provided with in the proper strings.')
        this.mongoose.connect(database, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        this.mongoose.connection.on('connected', async () => {
            console.log('test')
        })
    }
}