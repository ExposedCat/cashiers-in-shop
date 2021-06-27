import { getAllCashiers } from './db'
import { stringifyCashier } from './utils'

async function main() {
    const allCashiers = await getAllCashiers()
    const stringifiedAllCashiers = allCashiers.map(stringifyCashier).join('\n')
    console.log('Все кассиры:\n\n')
    console.log(stringifiedAllCashiers)
}

main()