import React, { useRef, useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { AppContext } from '../../context/AppContext';
import Button from '../../components/button/Button';
import { formatDate, getMaxDate } from '../../helpers/dateRangeAndFormat';
import './MobileSearchForm.scss';

const MobileSearchForm = () => {
	const { navState, queryState } = useContext(AppContext);
	const inputFromRef = useRef(null);
	const inputToRef = useRef(null);
	const history = useHistory();
	const ABSOLUTE_MIN_DATE = '1995-06-16';
	const ABSOLUTE_MAX_DATE = formatDate(new Date());
	const [toDateMin, setToDateMin] = useState(null);
	const [toDateMax, setToDateMax] = useState(null);
	const [fromDateMin, setFromDateMin] = useState(null);
	const [fromDateMax, setFromDateMax] = useState(null);

	const clearForm = () => {
		inputFromRef.current.value = '';
		inputToRef.current.value = '';
		inputFromRef.current.setAttribute('class', 'text-color-default');
		inputToRef.current.setAttribute('class', 'text-color-default');
		setFromDateMin(ABSOLUTE_MIN_DATE);
		setFromDateMax(ABSOLUTE_MAX_DATE);
		setToDateMin(ABSOLUTE_MIN_DATE);
		setToDateMax(ABSOLUTE_MAX_DATE);
	};

	const handleDateInput = (e) => {
		if (e.target.value !== '')
			e.target.setAttribute('class', 'text-color-blur');

		if (e.target.name === 'fromDate') {
			setToDateMin(e.target.value);
			setToDateMax(getMaxDate(e.target));
		}
		if (e.target.name === 'toDate') {
			setFromDateMax(e.target.value);
			return setFromDateMin(getMaxDate(e.target));
		}
	};

	// TODO REFACTOR THIS - TOO MUCH
	const handleSubmit = (e) => {
		e.preventDefault();

		window.scrollTo({ top: 0, behavior: 'smooth' });

		queryState.setQuery({
			name: 'galleryQuery',
			fromDate: inputFromRef.current.value,
			toDate: inputToRef.current.value,
		});

		queryState.setIsDateEntered(true);

		history.push(
			`/gallery/start_date=${inputFromRef.current.value}&end_date=${inputToRef.current.value}`
		);

		clearForm();

		navState.setSearchIsActive(false);
	};

	useEffect(() => {
		if (!navState.searchIsActive) clearForm();
	}, [navState]);

	return (
		<div
			className={`search-menu ${navState.searchIsActive && 'show-search-menu'}`}
			data-test-id='data-test-form'
		>
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
						title='Max search range 7 days'
						min={fromDateMin}
						max={fromDateMax}
						autoComplete='off'
					/>
				</div>
				<div className='form-input'>
					<label htmlFor='toDate'>End date: </label>
					<input
						type='date'
						name='toDate'
						title='Max search range 7 days'
						required
						ref={inputToRef}
						onBlur={handleDateInput}
						className='text-color-default'
						min={toDateMin}
						max={toDateMax}
						autoComplete='off'
					/>
				</div>
				<Button type='submit' className='button' innerText='Search' />
				<button
					type='button'
					className='reset-search-button'
					onClick={clearForm}
				>
					Reset search
				</button>
			</form>
			<div className='search-menu-border' />
		</div>
	);
};

export default MobileSearchForm;
