export default class mongoConnect {
    /**
     * Database is a String
     */
    public database: String
    /**
     * mongoose
     */
    public mongoose; 
    /**
     * Chalk
     */
    public chalk
    constructor(ops = {
        database: null as any
    }) {
     this.database = ops.database
        /**
         * Requires mongoose
         */
        this.mongoose = require('mongoose');
        /**
         * Requires chalk
         */
        this.chalk = require('chalk')
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
            console.log(this.chalk.green('The mongoose database is now connceted'))
        })
    }
}