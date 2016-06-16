/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import Mongoose = require("mongoose");
import Constants = require("./../../config/constants/constants");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;

    constructor () {
        DataAccess.connect();
    }

    static connect (): Mongoose.Connection {
        if(this.mongooseInstance) return this.mongooseInstance;

        this.mongooseConnection  = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("Connected to mongodb.");
        });

        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}

DataAccess.connect();
export = DataAccess;