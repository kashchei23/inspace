export const formatDate = (dateObj) => {
	const day = ('0' + dateObj.getDate()).slice(-2);
	const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
	const year = dateObj.getFullYear().toString();
	return year + '-' + month + '-' + day;
};

export const getMaxDate = (input) => {
	const sevenDays = 7 * 86400000;

	const firstDate = new Date('1995-06-16');
	const firstDateInMilliseconds = firstDate.getTime();

	const currentDate = Date.now();

	const userDate = new Date(input.value);
	const inputDateInMilliseconds = userDate.getTime();

	const maxDate = new Date(inputDateInMilliseconds + sevenDays);
	const minDate = new Date(inputDateInMilliseconds - sevenDays);

	if (
		input.name === 'toDate' &&
		inputDateInMilliseconds - firstDateInMilliseconds > sevenDays
	) {
		return formatDate(minDate);
	} else if (
		input.name === 'toDate' &&
		inputDateInMilliseconds - firstDateInMilliseconds < sevenDays
	) {
		return formatDate(firstDate);
	}

	if (
		input.name === 'fromDate' &&
		currentDate - inputDateInMilliseconds > sevenDays
	) {
		return formatDate(maxDate);
	} else return formatDate(new Date());
};
