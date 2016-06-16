/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import HeroBusiness = require("./../app/business/HeroBusiness");
import IBaseController = require("./BaseController");
import IHeroModel = require("./../app/model/interfaces/HeroModel");

class HeroController implements IBaseController <HeroBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var hero: IHeroModel = <IHeroModel>req.body;
            var heroBusiness = new HeroBusiness();
            heroBusiness.create(hero, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var hero: IHeroModel = <IHeroModel>req.body;
            var _id: string = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.update(_id, hero, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var heroBusiness = new HeroBusiness();
            heroBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var heroBusiness = new HeroBusiness();
            heroBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = HeroController;