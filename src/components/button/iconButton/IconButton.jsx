import React from 'react';

const IconButton = ({
	type,
	label,
	className,
	onClick,
	disabled,
	dataName,
	title,
}) => {
	return (
		<button
			type={type}
			className={className}
			onClick={onClick}
			disabled={disabled}
			data-name={dataName}
			title={title}
		>
			<div className='icon-text'>{label}</div>
		</button>
	);
};

export default IconButton;
