import { 
    gender,
    Cashier
 } from './models'

function stringifyCashierGender(userGender: gender) {
    return userGender === gender.male ? 'Мужской' : 'Женский'
}

function stringifyCashier(user: Cashier) {
    return `Кассир №${user.id}:\n- Имя: ${user.name}\n- Пол: ${stringifyCashierGender(user.gender)}\n- Возраст: ${user.age}`
}

export { stringifyCashier }