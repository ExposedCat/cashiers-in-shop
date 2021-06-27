enum gender {
	male = 'm',
	female = 'f'
}

enum weekday {
	monday = 1,
	tuesday = 2,
	wednesday = 3,
	thursday = 4,
	friday = 5,
	saturday = 6,
	sunday = 7
}

interface Cashier {
	id: number,
	name: string,
	gender: gender,
	age: number
}

interface Shop {
	id: number,
	nameId: string,
	addressId: number
}

interface CashRegister {
	id: number,
	money: number,
	number: number
}

interface CashiersShops {
	id: number,
	cashierId: number,
	shopId: number,
	dateStart: Date,
	dateEnd?: Date,
	cashRegisterId: number,
	shiftId: number
}

interface Shifts {
	id: number,
	typeId: number,
	weekday: weekday
}

interface ShiftTypes {
	id: number,
	name: number,
	startHour: number,
	endHour: number
}

interface ShopNames {
	id: number,
	name: string
}

interface Addresses {
	id: number,
	streetId: string,
	cityId: string,
	address: string
}

interface StreetNames {
	id: number,
	name: string
}

interface Cities {
	id: number,
	coatuu: string,
	name: string
}

export {
	Shop,
	Shifts,
	Cities,
	gender,
	Cashier,
	Addresses,
	ShopNames,
	ShiftTypes,
	StreetNames,
	CashRegister,
	CashiersShops
}