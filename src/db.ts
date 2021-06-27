import * as pgPromise from 'pg-promise'
import { pgPromiseConfiguration } from './config'
import { Cashier } from './models'

const db: pgPromise.IDatabase<any> = pgPromise()(pgPromiseConfiguration)

async function getAllCashiers(): Promise<Cashier[]> {
    const cashiers: Cashier[] = await db.any(`
        SELECT
            *
        FROM
            "Cashiers"
    `)

    return cashiers
}

export {
    getAllCashiers
}