import React from 'react';

const FindDays = () => {
return (
    <div>
        <label>Day: </label>
            <input type="number" id="day" name="day" min="1"max="31"/>
    </div>
)
};

export default FindDays