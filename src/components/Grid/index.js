import React  from 'react';
import {Table, Caption, THead, TBody, TableTr, TableTh, TableTd} from './styles'

export const Grid = ({title, data, onFetchDetail, enableHoverCell, enableHoverRow}) => {
    const handleClick = (e) => {
        enableHoverCell && onFetchDetail({
            dataLabel: e.target.getAttribute('data-label'),
            value: e.target.getAttribute('value')
        })
    }
    
    return(
        <Table>
            <Caption>
                {title}
            </Caption>
            <THead>            
            <TableTr>
                <TableTh size="small" scope="col">User Id</TableTh>
                <TableTh size="small" scope="col">Id</TableTh>
                <TableTh scope="col">Title</TableTh>
                <TableTh scope="col">Body</TableTh>
            </TableTr>
            </THead>
            <TBody>        
                {
                    data.map(item => {
                        return(                    
                            <TableTr key={item.id} enableHoverRow={enableHoverRow}>
                                <TableTd 
                                    size="small" 
                                    enableHoverCell={enableHoverCell}
                                    data-label="userid" 
                                    value={item.userId}
                                    onClick={handleClick} 
                                >
                                    {item.userId}
                                </TableTd>
                                <TableTd 
                                    size="small" 
                                    enableHoverCell={enableHoverCell}
                                    data-label="id" 
                                    value={item.id}
                                    onClick={handleClick} 
                                >
                                    {item.id}
                                </TableTd>
                                <TableTd scope="col" data-label="title">{item.title}</TableTd>
                                <TableTd scope="col" data-label="body">{item.body}</TableTd>
                            </TableTr>
                        )
                    })           
                }   
            </TBody>
        </Table>
    )
}