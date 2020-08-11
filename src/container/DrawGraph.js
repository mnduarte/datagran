import React from 'react';
import { Graph } from '../components/Graph'

const Draw = ({ xAxisSelected, yAxisSelected, seriesData, loading, error}) => { 
    return(
        <Graph         
            xAxis = {xAxisSelected}
            yAxis = {yAxisSelected}
            seriesData = {seriesData}
        />
    )
}

export const DrawGraph = React.memo(Draw, (prevProps, props) => {
    return prevProps.enableRenderGraph === props.enableRenderGraph
});