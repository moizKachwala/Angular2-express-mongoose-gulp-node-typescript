/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import Read = require("./common/Read");
import Write = require("./common/Write");
interface BaseBusiness<T> extends Read<T>, Write<T>
{
}
export = BaseBusiness;