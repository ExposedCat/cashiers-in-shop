import { getAllCashiers, getTargetCashiers1 } from './db'
import { stringifyCashier } from './utils'

async function main() {
    const allCashiers = await getAllCashiers()
    const stringifiedAllCashiers = allCashiers.map(stringifyCashier).join('\n')
    console.log('Все кассиры:\n\n')
    console.log(stringifiedAllCashiers)
    const targetCashiers1 = await getTargetCashiers1()
    const stringifiedTargetCashiers1 = targetCashiers1.map(stringifyCashier).join('\n')
    console.log('\n\nПервый фильтр кассиров:\n\n')
    console.log(stringifiedTargetCashiers1)
}

main()