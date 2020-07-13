; (function () {
	// 	const dataPerson = {
	// 	'name': ['Аарон', 'Абрам', 'Аваз', 'Августин', 'Авраам', 'Агап', 'Агапит', 'Агат', 'Агафон', 'Адам', 'Адриан', 'Азамат', 'Азат', 'Азиз', 'Аид', 'Айдар', 'Айрат', 'Акакий', 'Аким', 'Самат', 'Самвел', 'Самир', 'Самуил', 'Санжар', 'Сани', 'Святослав', 'Севастьян', 'Семён', 'Серафим', 'Сергей', 'Сидор', 'Симба', 'Соломон', 'Спартак', 'Станислав', 'Степан', 'Сулейман', 'Султан', 'Сурен', 'Тагир', 'Таир', 'Тайлер', 'Талгат', 'Тамаз', 'Тамерлан', 'Тарас', 'Тахир', 'Тигран', 'Тимофей', 'Тимур', 'Тихон', 'Томас', 'Трофим', 'Уинслоу', 'Умар', 'Устин', 'Фазиль', 'Фарид', 'Фархад', 'Фёдор', 'Федот', 'Феликс', 'Филипп', 'Флор', 'Фома', 'Фред', 'Фридрих', 'Хабиб', 'Хаким', 'Харитон', 'Хасан', 'Цезарь', 'Цефас', 'Цецилий', 'Сесил', 'Цицерон', 'Чарльз', 'Чеслав', 'Чингиз', 'Шамиль', 'Шарль', 'Шерлок', 'Эдгар', 'Эдуард', 'Эльдар', 'Эмиль', 'Эмин', 'Эрик', 'Эркюль', 'Эрмин', 'Эрнест', 'Эузебио', 'Юлиан', 'Юлий', 'Юнус', 'Юрий', 'Юстиниан', 'Юстус', 'Яков', 'Ян', 'Яромир', 'Ярослав'],
	// 	'surname': ['Иванов', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Петров', 'Соколов', 'Михайлов', 'Новиков', 'Федоров', 'Морозов', 'Волков', 'Алексеев', 'Лебедев', 'Семенов', 'Егоров', 'Павлов', 'Козлов', 'Степанов', 'Николаев', 'Орлов', 'Андреев', 'Макаров', 'Никитин', 'Захаров', 'Зайцев', 'Соловьев', 'Борисов', 'Яковлев', 'Григорьев', 'Романов', 'Воробьев', 'Сергеев', 'Кузьмин', 'Фролов', 'Александров', 'Дмитриев', 'Королев', 'Гусев', 'Киселев', 'Ильин', 'Максимов', 'Поляков', 'Сорокин', 'Виноградов', 'Ковалев', 'Белов', 'Медведев', 'Антонов', 'Тарасов', 'Жуков', 'Глебов', 'Ильинский', 'Успенский', 'Дьяков', 'Кочетов', 'Вишневский', 'Высоцкий', 'Глухов', 'Дубов', 'Бессонов', 'Ситников', 'Астафьев', 'Мешков', 'Шаров', 'Яшин', 'Козловский', 'Туманов', 'Басов', 'Корчагин', 'Худяков', 'Жилин', 'Малахов', 'Сизов', 'Ежов', 'Толкачев', 'Анохин', 'Вдовин', 'Бабушкин', 'Усов', 'Лыков', 'Горлов', 'Коршунов', 'Маркелов', 'Постников', 'Черный', 'Дорохов', 'Корнев', 'Гладков', 'Злобин', 'Моргунов', 'Поликарпов', 'Рябинин', 'Судаков', 'Кукушкин', 'Калачев', 'Грибов', 'Елизаров', 'Звягинцев', 'Корольков', 'Федосов']
	// }

	// const goods = ['Принтер', 'Бумага для принтера', 'Краски для принтера', 'Картридж для принтера', 'Полимерная ванна'];
	// const prices = [12000, 500, 700, 1200, 2700];

	// const status = ['new', 'process', 'back', 'archived'];

	// const beginDate = Date.now() - 50 * 24 * 60 * 60 * 1000;
	// const endDate = Date.now() - 3 * 24 * 60 * 60 * 1000;

	// const getRandom = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

	// const getRandomFrom = (array) => array[getRandom(0, array.length - 1)];

	// const getRandomOrder = (n) => {
	// 	const arr = [];

	// 	for (let i = 1; i <= n; i += 1) {
	// 		const order = {};

	// 		const index = getRandom(0, goods.length - 1);
	// 		order.id = i;
	// 		order.fullname = `${getRandomFrom(dataPerson.name)} ${getRandomFrom(dataPerson.surname)}`;
	// 		order.good = goods[index];
	// 		order.price = prices[index];
	// 		order.status = getRandomFrom(status)
	// 		order.date = getRandom(beginDate, endDate);

	// 		arr.push(order);
	// 	}

	// 	return arr;
	// }

	const orders = [
		{ id: 1, fullname: "Чингиз Егоров", good: "Картридж для принтера", price: 1200, status: "new", date: 1590430536562 },
		{ id: 2, fullname: "Талгат Дорохов", good: "Принтер", price: 12000, status: "process", date: 1592439899649 },
		{ id: 3, fullname: "Хасан Дорохов", good: "Картридж для принтера", price: 1200, status: "new", date: 1593768807121 },
		{ id: 4, fullname: "Шамиль Мешков", good: "Краски для принтера", price: 700, status: "archived", date: 1592597332262 },
		{ id: 5, fullname: "Хасан Ковалев", good: "Принтер", price: 12000, status: "back", date: 1590411566106 },
		{ id: 6, fullname: "Аарон Злобин", good: "Бумага для принтера", price: 500, status: "new", date: 1590667708584 },
		{ id: 7, fullname: "Флор Высоцкий", good: "Картридж для принтера", price: 1200, status: "process", date: 1593254835752 },
		{ id: 8, fullname: "Тайлер Фролов", good: "Бумага для принтера", price: 500, status: "process", date: 1591048935406 },
		{ id: 9, fullname: "Шамиль Алексеев", good: "Полимерная ванна", price: 2700, status: "back", date: 1591244337629 },
		{ id: 10, fullname: "Сулейман Киселев", good: "Картридж для принтера", price: 1200, status: "process", date: 1591999914387 },
		{ id: 11, fullname: "Сурен Попов", good: "Принтер", price: 12000, status: "back", date: 1591146604148 },
		{ id: 12, fullname: "Устин Толкачев", good: "Краски для принтера", price: 700, status: "back", date: 1590494325008 },
		{ id: 13, fullname: "Цицерон Виноградов", good: "Полимерная ванна", price: 2700, status: "back", date: 1593674389668 },
		{ id: 14, fullname: "Фома Поляков", good: "Картридж для принтера", price: 1200, status: "new", date: 1593054183206 },
		{ id: 15, fullname: "Феликс Морозов", good: "Картридж для принтера", price: 1200, status: "process", date: 1590658038300 },
		{ id: 16, fullname: "Юстиниан Ильинский", good: "Картридж для принтера", price: 1200, status: "process", date: 1593009143680 },
		{ id: 17, fullname: "Чарльз Гладков", good: "Принтер", price: 12000, status: "new", date: 1592157987636 },
		{ id: 18, fullname: "Харитон Дмитриев", good: "Краски для принтера", price: 700, status: "back", date: 1593206876042 },
		{ id: 19, fullname: "Ян Судаков", good: "Полимерная ванна", price: 2700, status: "back", date: 1593814982328 },
		{ id: 20, fullname: "Сидор Судаков", good: "Картридж для принтера", price: 1200, status: "back", date: 1591505370076 },
		{ id: 21, fullname: "Адриан Корнев", good: "Бумага для принтера", price: 500, status: "archived", date: 1591668585235 },
		{ id: 22, fullname: "Самат Киселев", good: "Краски для принтера", price: 700, status: "new", date: 1592595181034 },
		{ id: 23, fullname: "Уинслоу Васильев", good: "Картридж для принтера", price: 1200, status: "back", date: 1591112449640 },
		{ id: 24, fullname: "Чеслав Корчагин", good: "Принтер", price: 12000, status: "new", date: 1592264921758 },
		{ id: 25, fullname: "Чингиз Жуков", good: "Бумага для принтера", price: 500, status: "process", date: 1590614999488 },
		{ id: 26, fullname: "Станислав Медведев", good: "Бумага для принтера", price: 500, status: "archived", date: 1590321283229 },
		{ id: 27, fullname: "Цефас Андреев", good: "Краски для принтера", price: 700, status: "back", date: 1592259126773 },
		{ id: 28, fullname: "Фарид Кочетов", good: "Картридж для принтера", price: 1200, status: "archived", date: 1592981218487 },
		{ id: 29, fullname: "Аким Дмитриев", good: "Картридж для принтера", price: 1200, status: "process", date: 1591886367926 },
		{ id: 30, fullname: "Фридрих Бабушкин", good: "Краски для принтера", price: 700, status: "back", date: 1592043830050 },
		{ id: 31, fullname: "Санжар Алексеев", good: "Бумага для принтера", price: 500, status: "archived", date: 1592402535732 },
		{ id: 32, fullname: "Эркюль Козловский", good: "Полимерная ванна", price: 2700, status: "back", date: 1593678978230 },
		{ id: 33, fullname: "Чингиз Дубов", good: "Краски для принтера", price: 700, status: "new", date: 1593977974618 },
		{ id: 34, fullname: "Сергей Воробьев", good: "Бумага для принтера", price: 500, status: "archived", date: 1592333150539 },
		{ id: 35, fullname: "Абрам Козлов", good: "Принтер", price: 12000, status: "archived", date: 1592863060884 },
		{ id: 36, fullname: "Севастьян Малахов", good: "Принтер", price: 12000, status: "back", date: 1592583062798 },
		{ id: 37, fullname: "Эльдар Высоцкий", good: "Краски для принтера", price: 700, status: "back", date: 1590785997356 },
		{ id: 38, fullname: "Фома Ильинский", good: "Краски для принтера", price: 700, status: "back", date: 1592277644654 },
		{ id: 39, fullname: "Сидор Усов", good: "Картридж для принтера", price: 1200, status: "back", date: 1593614665479 },
		{ id: 40, fullname: "Соломон Корчагин", good: "Принтер", price: 12000, status: "new", date: 1591381687696 },
		{ id: 41, fullname: "Тамаз Жуков", good: "Полимерная ванна", price: 2700, status: "process", date: 1592752082063 },
		{ id: 42, fullname: "Эмин Калачев", good: "Картридж для принтера", price: 1200, status: "new", date: 1593054410945 },
		{ id: 43, fullname: "Аид Белов", good: "Краски для принтера", price: 700, status: "back", date: 1594136375402 },
		{ id: 44, fullname: "Севастьян Толкачев", good: "Полимерная ванна", price: 2700, status: "new", date: 1594088043447 },
		{ id: 45, fullname: "Харитон Никитин", good: "Бумага для принтера", price: 500, status: "new", date: 1592741731855 },
		{ id: 46, fullname: "Адриан Яшин", good: "Картридж для принтера", price: 1200, status: "back", date: 1593838664431 },
		{ id: 47, fullname: "Сергей Черный", good: "Полимерная ванна", price: 2700, status: "process", date: 1593149997866 },
		{ id: 48, fullname: "Агап Кукушкин", good: "Принтер", price: 12000, status: "process", date: 1593545654184 },
		{ id: 49, fullname: "Тихон Антонов", good: "Принтер", price: 12000, status: "back", date: 1591444316024 },
		{ id: 50, fullname: "Юстус Кукушкин", good: "Полимерная ванна", price: 2700, status: "new", date: 1592152258525 },
		{ id: 51, fullname: "Таир Григорьев", good: "Бумага для принтера", price: 500, status: "back", date: 1591136306365 },
		{ id: 52, fullname: "Аарон Зайцев", good: "Бумага для принтера", price: 500, status: "new", date: 1593570977922 },
		{ id: 53, fullname: "Тамаз Кузьмин", good: "Бумага для принтера", price: 500, status: "new", date: 1591739745674 },
		{ id: 54, fullname: "Эмиль Усов", good: "Краски для принтера", price: 700, status: "back", date: 1591188454728 },
		{ id: 55, fullname: "Хаким Жуков", good: "Принтер", price: 12000, status: "back", date: 1592571538560 },
		{ id: 56, fullname: "Сергей Романов", good: "Картридж для принтера", price: 1200, status: "back", date: 1591186357363 },
		{ id: 57, fullname: "Хаким Морозов", good: "Принтер", price: 12000, status: "archived", date: 1594311305838 },
		{ id: 58, fullname: "Семён Фролов", good: "Краски для принтера", price: 700, status: "archived", date: 1590456691003 },
		{ id: 59, fullname: "Юстус Шаров", good: "Картридж для принтера", price: 1200, status: "back", date: 1591313944863 },
		{ id: 60, fullname: "Тимур Постников", good: "Картридж для принтера", price: 1200, status: "new", date: 1593193674095 },
		{ id: 61, fullname: "Святослав Корчагин", good: "Полимерная ванна", price: 2700, status: "process", date: 1591327971958 },
		{ id: 62, fullname: "Умар Высоцкий", good: "Бумага для принтера", price: 500, status: "new", date: 1593499514111 },
		{ id: 63, fullname: "Эдгар Туманов", good: "Бумага для принтера", price: 500, status: "process", date: 1591059819946 },
		{ id: 64, fullname: "Спартак Успенский", good: "Бумага для принтера", price: 500, status: "process", date: 1592257265613 },
		{ id: 65, fullname: "Фред Кузьмин", good: "Краски для принтера", price: 700, status: "back", date: 1591119798605 },
		{ id: 66, fullname: "Тимофей Белов", good: "Краски для принтера", price: 700, status: "process", date: 1590601722687 },
		{ id: 67, fullname: "Эдгар Степанов", good: "Принтер", price: 12000, status: "back", date: 1593380916640 },
		{ id: 68, fullname: "Тигран Никитин", good: "Полимерная ванна", price: 2700, status: "back", date: 1591040615758 },
		{ id: 69, fullname: "Эдуард Киселев", good: "Картридж для принтера", price: 1200, status: "archived", date: 1594305902567 },
		{ id: 70, fullname: "Юстиниан Вдовин", good: "Бумага для принтера", price: 500, status: "back", date: 1592744319839 },
		{ id: 71, fullname: "Уинслоу Глухов", good: "Принтер", price: 12000, status: "archived", date: 1590646143361 },
		{ id: 72, fullname: "Шамиль Бабушкин", good: "Бумага для принтера", price: 500, status: "process", date: 1591469236830 },
		{ id: 73, fullname: "Трофим Сизов", good: "Краски для принтера", price: 700, status: "process", date: 1593331016291 },
		{ id: 74, fullname: "Айрат Жуков", good: "Бумага для принтера", price: 500, status: "new", date: 1591425048592 },
		{ id: 75, fullname: "Фёдор Алексеев", good: "Принтер", price: 12000, status: "process", date: 1592769819551 },
		{ id: 76, fullname: "Агафон Бабушкин", good: "Полимерная ванна", price: 2700, status: "archived", date: 1593464165052 },
		{ id: 77, fullname: "Сесил Зайцев", good: "Принтер", price: 12000, status: "new", date: 1592962304758 },
		{ id: 78, fullname: "Юлиан Кочетов", good: "Бумага для принтера", price: 500, status: "process", date: 1592732001630 },
		{ id: 79, fullname: "Аким Фролов", good: "Картридж для принтера", price: 1200, status: "archived", date: 1592038246888 },
		{ id: 80, fullname: "Сидор Фролов", good: "Принтер", price: 12000, status: "new", date: 1593131096147 },
		{ id: 81, fullname: "Тимур Яшин", good: "Бумага для принтера", price: 500, status: "new", date: 1591878655657 },
		{ id: 82, fullname: "Аид Козлов", good: "Бумага для принтера", price: 500, status: "back", date: 1593500351182 },
		{ id: 83, fullname: "Цецилий Новиков", good: "Картридж для принтера", price: 1200, status: "process", date: 1590323311406 },
		{ id: 84, fullname: "Тамерлан Сорокин", good: "Полимерная ванна", price: 2700, status: "new", date: 1591225343908 },
		{ id: 85, fullname: "Эрик Рябинин", good: "Принтер", price: 12000, status: "back", date: 1592740334878 },
		{ id: 86, fullname: "Серафим Жилин", good: "Принтер", price: 12000, status: "back", date: 1593445172966 },
		{ id: 87, fullname: "Тимур Маркелов", good: "Принтер", price: 12000, status: "back", date: 1592915035920 },
		{ id: 88, fullname: "Харитон Лебедев", good: "Картридж для принтера", price: 1200, status: "new", date: 1593371032884 },
		{ id: 89, fullname: "Таир Астафьев", good: "Бумага для принтера", price: 500, status: "new", date: 1594075871687 },
		{ id: 90, fullname: "Агат Елизаров", good: "Принтер", price: 12000, status: "back", date: 1591330521982 },
		{ id: 91, fullname: "Ян Толкачев", good: "Картридж для принтера", price: 1200, status: "back", date: 1590368796429 },
		{ id: 92, fullname: "Спартак Корольков", good: "Принтер", price: 12000, status: "process", date: 1593393797720 },
		{ id: 93, fullname: "Агап Корнев", good: "Принтер", price: 12000, status: "back", date: 1591227790024 },
		{ id: 94, fullname: "Азат Новиков", good: "Полимерная ванна", price: 2700, status: "archived", date: 1594360029462 },
		{ id: 95, fullname: "Чарльз Антонов", good: "Принтер", price: 12000, status: "new", date: 1593945820423 },
		{ id: 96, fullname: "Фархад Егоров", good: "Полимерная ванна", price: 2700, status: "back", date: 1592906985224 },
		{ id: 97, fullname: "Симба Астафьев", good: "Краски для принтера", price: 700, status: "process", date: 1590559047029 },
		{ id: 98, fullname: "Цезарь Успенский", good: "Картридж для принтера", price: 1200, status: "archived", date: 1591744064725 },
		{ id: 99, fullname: "Тагир Киселев", good: "Картридж для принтера", price: 1200, status: "new", date: 1594181780384 },
		{ id: 100, fullname: "Сергей Лебедев", good: "Бумага для принтера", price: 500, status: "new", date: 1594324957372 }
	];

	Database.seed(orders);
})();

