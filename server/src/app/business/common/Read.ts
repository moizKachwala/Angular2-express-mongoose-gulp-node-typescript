/**
 * Created by Moiz.Kachwala on 16-06-2016.
 */

interface Read<T> {
    retrieve: (callback: (error: any, result: T)=> void)=> void ;
    findById: (_id: string, callback: (error:any, result: T) => void) => void;

}

export = Read;