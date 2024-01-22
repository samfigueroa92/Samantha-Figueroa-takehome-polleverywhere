// import axios from "axios";
// import { useState } from 'react';

const Winner = ({ winner }) => {
    const {id, first_name, last_name, email, phone, registration_date} = winner;

    return (
        <div className="Winner">
            <div>
                <img src="https://t4.ftcdn.net/jpg/04/54/58/47/360_F_454584719_dhKO4mMII6269PpQxgQTqE9T2i9zlFYz.jpg" alt="winner" />
                <div>{`${first_name} ${last_name}`}</div>
                <div>winner {registration_date}</div>
                <div>{id}</div>
                <div>winner {email}</div>
                <div>winner {phone}</div>
            </div>

        </div>
    );
};

export default Winner;