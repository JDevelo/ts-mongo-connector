"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class mongoConnect {
    constructor(ops = {
        database: null
    }) {
        this.database = ops.database;
        this.mongoose = require('mongoose');
        this.chalk = require('chalk');
    }
    c(database) {
        if (!database)
            throw new ReferenceError('DATABASE URL has not need been provided with in the proper strings.');
        this.mongoose.connect(database, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        this.mongoose.connection.on('connected', () => __awaiter(this, void 0, void 0, function* () {
            console.log(this.chalk.green('The mongoose database is now connceted'));
        }));
    }
}
exports.default = mongoConnect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE1BQXFCLFlBQVk7SUFhN0IsWUFBWSxNQUFNO1FBQ2QsUUFBUSxFQUFFLElBQVc7S0FDeEI7UUFDQSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7UUFJekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFJcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUNELENBQUMsQ0FBQyxRQUFpQjtRQUlmLElBQUcsQ0FBQyxRQUFRO1lBQUUsTUFBTSxJQUFJLGNBQWMsQ0FBQyxxRUFBcUUsQ0FBQyxDQUFBO1FBQzdHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUM1QixrQkFBa0IsRUFBRSxJQUFJO1lBQ3hCLGVBQWUsRUFBRSxJQUFJO1NBQ3hCLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBUyxFQUFFO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFBO1FBQzNFLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0o7QUF2Q0QsK0JBdUNDIn0=