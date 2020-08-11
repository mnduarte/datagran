import styled, {css} from 'styled-components'

export const Table = styled.table`    
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  
  @media (max-width: 750px) {
    border: 0;
  }
`
export const Caption = styled.caption`
    font-size: 1.5em;
    margin: .5em 0 .75em;
    text-align: left;  
    @media (max-width: 750px) {
    text-align: center;  
        font-size: 1.3em;
    }
`

export const THead = styled.thead`
    @media (max-width: 750px) {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
`

export const TBody = styled.tbody`
    display:block;
    height:35vh;
    overflow-y: scroll;
    overflow-x: hidden;
`

export const TableTr = styled.tr`
    display:table;
    width:100%;
    table-layout:fixed; 
    
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
    
    &:hover {
        ${
            props => props.enableHoverRow && css`
            background-color: #d6e7ff;
            `
        }
    }
    @media (max-width: 750px) {
        border-bottom: 3px solid #ddd;
        display: block;
        margin-bottom: .625em;
    }
`

export const TableTh = styled.th`
    padding: .625em;
    text-align: center;
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
    ${
        props => props.size && css`
        width: 100px;
        `
    }
`

export const TableTd = styled.td`
    padding: .625em;
    text-align: center;
    font-size: .9em;
    &:hover {
        ${
            props => props.enableHoverCell && css`
            cursor: pointer;
            background-color: #d6e7ff;
            `
        }
    }
    ${
        props => props.size && css`
        width: 100px;
        `
    }
    @media (max-width: 750px) {        
        width: 95%;
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: .8em;
        text-align: right;
        &::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
`