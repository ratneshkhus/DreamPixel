import React from 'react'

export default function Historyimg({ data }) {

    const newtabfulimg = ()=>{
        if (data) {
            window.open(data, "Image Preview","_blank")
        }
    }
    return (
        <div className="historyimage">
            <button className="bigimg" onClick={newtabfulimg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                    <path d="M16.4999 3.26621C17.3443 3.25421 20.1408 2.67328 20.7337 3.26621C21.3266 3.85913 20.7457 6.65559 20.7337 7.5M20.5059 3.49097L13.5021 10.4961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.26637 16.5001C3.25437 17.3445 2.67344 20.141 3.26637 20.7339C3.85929 21.3268 6.65575 20.7459 7.50016 20.7339M10.502 13.4976L3.49825 20.5027" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <img src={data} alt="img1" />
        </div>
    )
}
