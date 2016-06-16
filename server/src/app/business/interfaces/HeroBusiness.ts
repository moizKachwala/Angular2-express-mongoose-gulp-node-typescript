/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IHeroModel = require("./../../model/interfaces/HeroModel");

interface HeroBusiness extends BaseBusiness<IHeroModel> {

}
export = HeroBusiness;