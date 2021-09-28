import React, { useRef, useEffect, useState } from 'react';
import { Switch, Link, Route, useRouteMatch, Redirect } from 'react-router-dom';

import PictureOfTheDay from '../pictureOfTheDay/PictureOfTheDay';
const List = ({ nasaData }) => {
	const displayedRef = useRef(null);

	useEffect(() => {
		console.log('from List nasa', nasaData);
		console.log('from List nasa', nasaData.date);
		// if (displayedRef.current) {
		// 	displayedRef.current.setAttribute('class', 'nasa-data');
		// }
	}, [nasaData]);

	let { url, path } = useRouteMatch();

	useEffect(() => {
		console.log(url, path);
	});

	const [visible, setVisible] = useState(true);

	const handleClick = () => {
		setVisible(!visible);
	};

	return (
		<>
			{nasaData.map((data) => {
				return (
					<>
						{visible ? (
							<>
								<h1>List Component</h1>
								<div className='nasa-data' ref={displayedRef} key={data.title}>
									<h4 className='nasa-data-title'>{data.title}</h4>
									<Link to={`${url}/${data.date}`} onClick={handleClick}>
										<img
											className='nasa-data-img'
											src={data.url}
											alt={data.title}
										/>
									</Link>
									<p className='nasa-data-txt'>{data.date}</p>
								</div>
							</>
						) : (
							<>
								<Switch>
									<Redirect from='//*' to='/*' />
									<Route path={`${path}/${data.date}`}>
										<PictureOfTheDay data={data} onClick={handleClick} />
									</Route>
								</Switch>
							</>
						)}
					</>
				);
			})}
		</>
	);
};

export default List;
