import {
    getAllCashiers,
    getTargetCashiers1,
    getTargetCashiers2
} from './db'
import { stringifyCashier } from './utils'

async function main() {
    const allCashiers = await getAllCashiers()
    const stringifiedAllCashiers = allCashiers.map(stringifyCashier).join('\n')
    console.log('Все кассиры:\n\n')
    console.log(stringifiedAllCashiers)
    const targetCashiers1 = await getTargetCashiers1()
    const stringifiedTargetCashiers1 = targetCashiers1.map(stringifyCashier).join('\n')
    console.log('_____\n\nПервый фильтр кассиров:\n\n')
    console.log(stringifiedTargetCashiers1)
    const targetCashiers2 = await getTargetCashiers2()
    const stringifiedTargetCashiers2 = targetCashiers2.map(stringifyCashier).join('\n')
    console.log('_____\n\nВторой фильтр кассиров:\n\n')
    console.log(stringifiedTargetCashiers2)
}

main()