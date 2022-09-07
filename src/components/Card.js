import React from 'react';

const Card = (props) => {
    const {name, email} = props;
    return (
        <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img style={{ width: 200, height: 200 }} alt="robots" src = {`https://robohash.org/${name}/?set=set4`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>   
    );
}

export default Card;