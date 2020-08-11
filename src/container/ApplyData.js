import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { filterY, setAxisSelected, enableRenderGraph} from '../store/Graph/action'
import { Selector } from '../components/Selector';

export const ApplyData = () => {    
    const { xAxis, yAxis, emptyCombo, loading, error} = useSelector(store => store.graphReducer)
    const dispatch = useDispatch();

    const filterItemY = (val) => {
        dispatch(filterY(val))
    }
    
    const onSubmit = (val) => {
        dispatch(setAxisSelected(val));
        dispatch(enableRenderGraph(true));
    }

    return(
        <Selector 
            xItems={xAxis}
            yItems={yAxis}
            filterItemY={filterItemY}
            onSubmit={onSubmit}
            empCombo={emptyCombo}
        />
    )
}