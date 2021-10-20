import Airtable from "airtable";
import type { AirtableQuery, Tables } from "../types"
import { config } from "../config";
import { Camelize } from "../utils"

const { base: baseKey, apiKey } = config.airtable

const base = new Airtable({ apiKey: 'keyvvuP3joa4iDswY' }).base('appcGqp923iGvu9jr');

/**
 * Query Data From Airtable
 * 
 * @returns Array Of Provided Type
 */
const Query = async<T>({ table, limit, fields }: AirtableQuery): Promise<T[]> => {
    const result: T[] = []
    const fetchContent = new Promise((resolve: any, reject: any) => {
        base(table).select({
            maxRecords: limit,
            view: "Grid view"
        }).eachPage((records, next) => {
            resolve(records)
        }, (err) => {
            if (err) {
                console.error(err);
                reject(err)
                return;
            }
        })
    });


    return await fetchContent.then((v: any) => {
        const results: T[] = []
        v.forEach((element: any) => {
            const structure: any = {}
            for (let i = 0; i < fields.length; i++) {
                const field = fields[i]
                structure[Camelize(field)] = element.get(field);
            };
            results.push(structure)
        })

        return results
    });


}

export { Query }