import React, { useRef, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import Button from '../../components/button/Button';
import {
	formatDate,
	// calculateMaxOrMIN_DATE,
	getRangeDate,
} from '../../helpers/dateRangeAndFormat';
import './MobileSearchForm.scss';

const MobileSearchForm = () => {
	const { navState, queryState } = useContext(AppContext);
	const inputFromRef = useRef(null);
	const inputToRef = useRef(null);
	const history = useHistory();
	const MIN_DATE = '1995-06-16';
	const MAX_DATE = formatDate(new Date());
	const [maxRangeDate, setMaxRangeDate] = useState('');
	const [minRangeDate, setMinRangeDate] = useState('');

	const resetAndCloseForm = () => {
		navState.setSearchIsActive(false);
		inputFromRef.current.value = '';
		inputToRef.current.value = '';
		inputFromRef.current.setAttribute('class', 'text-color-default');
		inputToRef.current.setAttribute('class', 'text-color-default');
	};

	const handleDateInput = (e) => {
		if (e.target.value !== '')
			e.target.setAttribute('class', 'text-color-blur');
		setMaxRangeDate(getRangeDate(e.target));
		setMinRangeDate(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		queryState.setQuery({
			fromDate: inputFromRef.current.value,
			toDate: inputToRef.current.value,
		});

		queryState.setIsDateEntered(true);

		history.push('/gallery');

		resetAndCloseForm();
	};

	useEffect(() => {
		setMaxRangeDate(getRangeDate(MAX_DATE));
	}, []);

	return (
		<div
			className={`search-menu ${navState.searchIsActive && 'show-search-menu'}`}
			data-test-id='data-test-form'
		>
			<h2>Enter your search dates</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-input'>
					<label htmlFor='fromDate'>Start date: </label>
					<input
						type='date'
						name='fromDate'
						required
						ref={inputFromRef}
						onBlur={handleDateInput}
						className='text-color-default'
						min={MIN_DATE}
						max={MAX_DATE}
					/>
				</div>
				<div className='form-input'>
					<label htmlFor='toDate'>End date: </label>
					<input
						type='date'
						name='toDate'
						required
						ref={inputToRef}
						onBlur={handleDateInput}
						className='text-color-default'
						min={minRangeDate}
						max={maxRangeDate}
					/>
				</div>
				<Button type='submit' className='button' innerText='Search' />
				<Button
					type='button'
					className='close-search-button'
					innerText='Close search'
					onClick={resetAndCloseForm}
				/>
			</form>
			<div className='nav-border' />
		</div>
	);
};

export default MobileSearchForm;
