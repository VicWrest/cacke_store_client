import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
         value="Тип коржа"
         onChange={event => event}
         >
            <option disabled value={defaultValue}>{defaultValue}</option>
            <option selected="true" value="vanil">Ванильный</option>
            <option selected="true" value="choco">Шоколадный</option>
        </select>
    );
};

export default MySelect;