import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const MobileSearchForm = ({
	setQuery,
	setIsDateEntered,
	searchIsActive,
	handleSearchClick,
}) => {
	const DATE_PATTERN =
		'(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))';

	const inputFromRef = useRef(null);
	const inputToRef = useRef(null);

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();

		setQuery({
			fromDate: inputFromRef.current.value,
			toDate: inputToRef.current.value,
		});

		setIsDateEntered(true);

		handleSearchClick();

		history.push('/list');

		inputFromRef.current.value = '';
		inputToRef.current.value = '';
	};
	return (
		<>
			<div className={`search-menu ${searchIsActive && 'show'}`}>
				<p>Enter your search dates</p>
				<form onSubmit={handleSubmit}>
					<div className='formInputs'>
						<label htmlFor='fromDate'>Start date</label>
						<input
							type='text'
							name='fromDate'
							placeholder='YYYY-MM-DD'
							required
							pattern={DATE_PATTERN}
							ref={inputFromRef}
							autoComplete='on'
						/>
					</div>
					<div className='formInputs'>
						<label htmlFor='toDate'>End date</label>
						<input
							type='text'
							name='toDate'
							placeholder='YYYY-MM-DD'
							required
							pattern={DATE_PATTERN}
							ref={inputToRef}
							autoComplete='on'
						/>
					</div>
					<button type='submit'>Search</button>
				</form>
				<div className='nav-border' />
			</div>
		</>
	);
};

export default MobileSearchForm;
