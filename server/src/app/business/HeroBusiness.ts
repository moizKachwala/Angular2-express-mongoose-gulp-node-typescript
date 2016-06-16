/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import HeroRepository = require("./../repository/HeroRepository");
import IHeroBusiness = require("./interfaces/HeroBusiness");
import IHeroModel = require("./../model/interfaces/HeroModel");
import HeroModel = require("./../model/HeroModel");


class HeroBusiness implements IHeroBusiness {
    private _heroRepository: HeroRepository;

    constructor () {
        this._heroRepository = new HeroRepository();
    }

    create (item: IHeroModel, callback: (error: any, result: any) => void) {
        this._heroRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._heroRepository.retrieve(callback);
    }

    update (_id: string, item: IHeroModel, callback: (error: any, result: any) => void) {

        this._heroRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._heroRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._heroRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IHeroModel) => void) {
        this._heroRepository.findById(_id, callback);
    }

}


Object.seal(HeroBusiness);
export = HeroBusiness;