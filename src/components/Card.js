import React from 'react';

const Card = ({ name, username, email, id }) => {
    return (
        <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p><span className='b'>Username:</span> {username}</p>
                <p><span className='b'>E-mail:</span> {email}</p>
            </div>
        </div>
    );
}

export default Card;