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

async function getTargetCashiers1(): Promise<Cashier[]> {
    const cashiers: Cashier[] = await db.any(`
        SELECT
            Cashiers.*
        FROM
            "Shops" as Shops,
            "Cities" as Cities,
            "Cashiers" as Cashiers,
            "Addresses" as Addresses,
            "ShopNames" as ShopNames,
            "CashiersShops" as CashiersShops
        WHERE
                Shops."nameId" = ShopNames.id
            AND
                ShopNames.name = 'ATB'
            AND
                Cashiers.id = CashiersShops."cashierId"
            AND
                Shops.id = CashiersShops."shopId"
            AND
                Shops."addressId" = Addresses.id
            AND
                Addresses."cityId" = Cities.id
            AND
                Cities.name = 'Львів'
            AND
                EXISTS (
                    SELECT
                        1
                    FROM
                        "Shops" as Shops2,
                        "ShopNames" as ShopNames2,
                        "CashiersShops" as CashiersShops2
                    WHERE
                            Cashiers.id = CashiersShops2."cashierId"
                        AND
                            CashiersShops2."shopId" = Shops2.id
                        AND
                            Shops2."nameId" = ShopNames2.id
                        AND (
                            ShopNames2.name = 'Silpo'
                        OR
                            ShopNames2.name = 'Arsen'
                        )
                        AND
                            GET_CASHIER_EXPERIENCE(Cashiers.id) > 5
                )
    `)

    return cashiers
}

export {
    getAllCashiers,
    getTargetCashiers1
}