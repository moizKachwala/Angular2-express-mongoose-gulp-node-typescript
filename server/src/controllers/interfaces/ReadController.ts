/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
interface ReadController {
    retrieve: express.RequestHandler;
    findById: express.RequestHandler;


}
export = ReadController;