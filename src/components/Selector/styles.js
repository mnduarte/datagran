import styled from 'styled-components'
import { FormControl } from '@material-ui/core';

export const Form = styled.form`
    padding: 20px 20px;
`
export const SFormControl = styled(FormControl)`
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