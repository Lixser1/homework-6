import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCounter, megaMinusCounter, minusCounter, plusCounter, resetCounter} from "../store/MainSlice";

const MainPage = () => {

    const {counter} = useSelector(state => state.mainSlice)
    const dispatch = useDispatch();
    const changeCounter1 = ()=> {
        dispatch(changeCounter())
    }
    const minusCounter1 = ()=> {
        dispatch(minusCounter())
    }
    const plusCounter1 = ()=> {
        dispatch(plusCounter())
    }
    const megaMinusCounter1 = ()=> {
        dispatch(megaMinusCounter())
    }
    const resetCounter1 = ()=> {
        dispatch(resetCounter())
    }

    return (
        <div>
            <div>{counter}</div>
            <button onClick={changeCounter1}>+1</button>
            <button onClick={minusCounter1}>-1</button>
            <button onClick={plusCounter1}>+10</button>
            <button onClick={megaMinusCounter1}>-10</button>
            <button onClick={resetCounter1}>reset</button>
        </div>
    );
};
// Это уже 6 дз, как быстро :_)
export default MainPage;