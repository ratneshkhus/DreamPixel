import React from 'react'

export default function Historyimg({data}) {
    console.log(data);
    
    return (
        <div className="historyimage">
            <img src={data} alt="img1" />
        </div>
    )
}
