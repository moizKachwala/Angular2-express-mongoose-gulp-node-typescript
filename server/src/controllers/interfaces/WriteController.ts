/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
interface WriteController {
    create: express.RequestHandler;
    update: express.RequestHandler;
    delete: express.RequestHandler;

}

export = WriteController;