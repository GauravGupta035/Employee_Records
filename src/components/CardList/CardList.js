import React from 'react';
import Card from '../Card/Card';

const CardList = ({ employees }) => {
    return (
        <div className='cards'>
        {
            employees.map((employee, i) => {
                return (
                    <Card
                        key={i}
                        id={employees[i].id}
                        name={employees[i].name}
                        username={employees[i].username}
                        email={employees[i].email}/>
                );
            })
        }
        </div>
    );
}

export default CardList;