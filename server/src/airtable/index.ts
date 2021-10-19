import Airtable from "airtable"; 
import type { AirtableQuery, Tables } from "../types"
import { config } from "../config"

const { base: baseKey, apiKey } = config.airtable

const base = new Airtable({apiKey: 'keyvvuP3joa4iDswY'}).base('appcGqp923iGvu9jr');

/**
 * Query Data From Airtable
 * 
 * @returns Array Of Provided Type
 */
const Query = async<T>({ table, limit, fields }: AirtableQuery):Promise<T[]> => {

    const fetchContent = new Promise((resolve: any, reject: any) => {
        const r = new Array<T>() 
        base("Events").select({
            maxRecords: limit,
            view: "Grid view"
        }).eachPage((records, next) => {
            records.forEach((rec) => {
                const structure: any = {}
                for(let i = 0; i< fields.length; i++) {
                    const field = fields[i] 
                    structure[field] = rec.get(field)
                };
                r.push(structure)
            })
            next()
        }, (err) => {
            if (err) { 
                console.error(err);
                reject(err) 
                return; }
        });
        console.log(r)
        resolve(r)
    });

   
   return await fetchContent.then((v) => v as T[]);


}

export { Query }