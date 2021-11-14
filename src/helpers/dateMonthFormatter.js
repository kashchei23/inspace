const monthName = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const convertMonthToName = (inputDate) => {
	const getMonth = (inputDate) => {
		for (let i = 0; i < monthName.length; i++) {
			const month = monthName[i - 1];
			if (i === Number(inputDate.slice(5, 7))) {
				return month;
			}
		}
	};
	const getDay = (inputDate) => {
		if (inputDate.slice(8, 9) === '0') {
			return inputDate.slice(9, 10);
		} else return inputDate.slice(8, 10);
	};

	return (
		getMonth(inputDate) + ' ' + getDay(inputDate) + ', ' + inputDate.slice(0, 4)
	);
};
