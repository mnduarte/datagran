import React from 'react';
import { useSelector } from 'react-redux'
import { Container, SectorProcess, SectorApply, SectorDraw } from './styles'
import { ProcessData } from '../../container/ProcessData';
import { ApplyData } from '../../container/ApplyData';
import { DrawGraph } from '../../container/DrawGraph';

 
export const LineGraph = () => {
    const graphStore = useSelector(store => store.graphReducer)

    return(
        <Container>        
            <SectorProcess>
                <ProcessData />
            </SectorProcess>
            <SectorApply>
                <ApplyData />
            </SectorApply>
            <SectorDraw>
                <DrawGraph {...graphStore}/>        
            </SectorDraw>
        </Container>
    )
}
    