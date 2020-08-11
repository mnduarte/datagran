import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { parseData, emptyCombo } from '../store/Graph/action'
import { LoadData } from '../components/LoadData'


export const ProcessData = ()  => {
    const {loading, error} = useSelector(store => store.graphReducer)
    const dispatch = useDispatch();
    
    const onSubmit = (val) => {
        dispatch(parseData(val.data));
        dispatch(emptyCombo(true));
    }

    return(
        <LoadData onSubmit={onSubmit} />
    )
}