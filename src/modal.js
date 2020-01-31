import React from 'react';
import './output.css';

const Modal = (props) => {
    function handleOnClick(e) {
        const modalCtrl = document.querySelector('.modalCtrl');
        const dashboard = document.querySelector('.dashboard');
        modalCtrl.style.display = 'none';
        dashboard.style.overflow = 'visible';
        e.preventDefault();
    }
    return (
        <div className={"modalCtrl flex z-40 h-full w-full absolute top-0 justify-center items-center" }>
            <div className={"background bg-gray-200 opacity-50 h-full w-full absolute top-auto bottom-auto left-auto right-auto justify-center align-middle"} onClick={handleOnClick}>
            {/*Background color*/}
            </div>
            <div className={"form-wrapper-center bg-white opacity-100 shadow-md rounded absolute top-40 w-2/4 h-auto"}>
                <form className={"p-10 z-50 text-center"}>
                    <div className={"flex justify-end"}>
                        <button onClick={handleOnClick}>
                            <svg className={"h-5 w-5"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M2.93 17.07A10 10 0 1117.07 2.93 10 10 0 012.93 17.07zm1.41-1.41A8 8 0 1015.66 4.34 8 8 0 004.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"/>
                            </svg>
                        </button>
                    </div>
                    <h2 className={"text-lg my-6"}> {props.cardTitle}</h2>
                    <textarea className={"bg-gray-200 text-black h-64 w-3/4 p-2"} defaultValue={props.cardDescription}>

                    </textarea>
                </form>
                <div className={"flex p-6 justify-end"}>
                    <button className={"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}
                            onClick={handleOnClick}>
                        SUBMIT
                    </button>
                    <button className={"bg-orange-600 mx-3 hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded"}
                            onClick={handleOnClick}>
                        CANCEL
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Modal
