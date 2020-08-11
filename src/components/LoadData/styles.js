import styled from 'styled-components'
import { TextField } from '@material-ui/core';

export const Form = styled.form`
    padding: 20px 20px;
`
export const SeccionData = styled.div`
`

export const STextField = styled(TextField)`
&& {
    width: 100%;     
    margin-bottom: 15px;
}
`

export const DockedItem = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 15px;    
`
