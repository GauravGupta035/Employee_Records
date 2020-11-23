import React from 'react';
import Card from './Card';

const CardList = ({ employees }) => {
    return (
        <div>
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