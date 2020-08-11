import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "top"
                         "bot";
`
export const SectorPost = styled.div`
    grid-area: top;
`
export const SectorDetail = styled.div`
    grid-area: bot;
`

