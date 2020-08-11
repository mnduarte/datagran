import styled from 'styled-components'

export const Container = styled.div`
    display: grid;    
    grid-template: 1fr 1fr/ 1fr 1fr;
    grid-template-areas: "left right"
                         "bot bot";
`
export const SectorProcess = styled.div`
    grid-area: left;
`
export const SectorApply = styled.div`
    grid-area: right;
`
export const SectorDraw = styled.div`
    grid-area: bot;
`

