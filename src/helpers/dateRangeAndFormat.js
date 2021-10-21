export const formatDate = (dateObj) => {
	const day = ('0' + dateObj.getDate()).slice(-2);
	const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
	const year = dateObj.getFullYear().toString();
	return year + '-' + month + '-' + day;
};

const calculateRangeDate = (input) => {
	const userDate = new Date(input.value);
	const userInputMilliseconds = userDate.getTime();
	const sevenDays = 7 * 86400000;

	if (input.name === 'fromDate') {
		return formatDate(new Date(userInputMilliseconds + sevenDays));
	} else if (input.name === 'toDate') {
		return formatDate(new Date(userInputMilliseconds - sevenDays));
	}
};

export const getRangeDate = (input) => {
	const currentDate = new Date();
	const userDate = new Date(input.value);
	const currentDateMilliseconds = currentDate.getTime();
	const sevenDays = 7 * 86400000;
	const sevenDaysAgo = new Date(currentDateMilliseconds - sevenDays);

	if (userDate < sevenDaysAgo) {
		return calculateRangeDate(input);
	} else {
		return formatDate(new Date());
	}
};

// const testFrom = { value: '2021-10-20', name: 'fromDate' };
// const testTo = { value: '2021-10-20', name: 'toDate' };
