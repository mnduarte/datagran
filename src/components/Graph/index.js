import React, {useEffect} from 'react';
import ReactHighcharts from 'react-highcharts';
import { useDispatch } from 'react-redux'
import { enableRenderGraph} from '../../store/Graph/action'

export const Graph = ({xAxis, yAxis, seriesData}) => {
    const dispatch = useDispatch();
    
    useEffect(function () {
        //Disabled render for avoid re render if change states
        dispatch(enableRenderGraph(false))

    }, [xAxis, yAxis, seriesData])

    const findCategories = seriesData.map( e => {
        
            if (e[xAxis]?.value !== undefined) 
                return e[xAxis].value
    })
    const cleanCategories = findCategories.filter( e =>  e)
    
    const findSeries = seriesData.map( e => {
        
            if (e[yAxis]?.value !== undefined) 
                return e[yAxis].value
    })
    const cleanSeries = findSeries.filter( e =>  e)

    const config = {
        xAxis: [{
            title: {
                text: xAxis
            },
            categories: cleanCategories
        }],   
        yAxis: {
            title: {
                text: yAxis,
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        series: [{
            data: cleanSeries
        }]
      };

    return <ReactHighcharts config={config} />
}