import React from 'react';
import { format, parseISO } from 'date-fns';

const dateFormat = 'dd/MM/yyyy';

const FormattedDate = ({ format: customFormat, value, ...otherProps }) => {
    const dFormat = customFormat || dateFormat;

    const formattedValue = value ? format(parseISO(value), dFormat) : null;

    return <span {...otherProps}>{formattedValue}</span>;
};

export default FormattedDate;