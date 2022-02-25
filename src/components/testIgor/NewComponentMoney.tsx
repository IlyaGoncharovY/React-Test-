import React from 'react';

type NewComponentMoneyPropsType = {
    currentMoney:
}

export const NewComponentMoney = (props:NewComponentMoneyPropsType) => {
    return (
        <div>
            <ul>
                {currentMoney.map((objectMoneyArray, index) => {
                    return (
                        <li key={index}>
                            <span>{objectMoneyArray.banknote}</span>
                            <span>{objectMoneyArray.nominal}</span>
                            <span>{objectMoneyArray.number}</span>
                        </li>

                    )
                })}

            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => onClickFilterHandler("all")}>All</button>
                <button onClick={() => onClickFilterHandler("ruble")}>ruble</button>
                <button onClick={() => onClickFilterHandler("dollar")}>dollar</button>
            </div>
        </div>
    );
};