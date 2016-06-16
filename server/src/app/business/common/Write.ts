/**
 * Created by Moiz.Kachwala on 16-06-2016.
 */

interface Write<T> {
    create: (item: T, callback: (error: any, result: any ) => void) => void;
    update:(_id: string, item: T, callback: (error: any, result: any)=> void) => void ;
    delete: (_id: string, callback: (error: any, result: any) => void) => void;

}

export = Write;