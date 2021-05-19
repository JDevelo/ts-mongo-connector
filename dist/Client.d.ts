export default class mongoConnect {
    database: String;
    mongoose: any;
    chalk: any;
    constructor(ops?: {
        database: any;
    });
    c(database?: String): void;
}
