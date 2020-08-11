import React, { useState, useEffect } from 'react';
import { Form, SeccionData, STextField, DockedItem } from './styles';
import { Button } from '@material-ui/core';

import { useInputValue } from '../../hooks/useInputValue';


export const LoadData = ( { onSubmit } ) => {    
    const [disabledProcess, setDisabledProcess] = useState(true)
    const data = useInputValue();

    const handleSubmit = (e) => {
        e.preventDefault();        
        
        onSubmit({
            data: data.value
        })
    }

    const cleanTextArea = () => {
        data.onChange()
    }

    useEffect(function () {
        data.value ? setDisabledProcess(false) : setDisabledProcess(true)
    }, [data])

    return (
        <Form>
            <SeccionData>
                <STextField
                    label="Load CSV"
                    multiline
                    rows={6}
                    variant="outlined"
                    {...data}
                />            
            </SeccionData>
            <DockedItem>    
                <Button                    
                    onClick={cleanTextArea}
                >
                    Clean
                </Button>                        
                <Button 
                    variant='contained' 
                    color='primary'
                    disabled={disabledProcess}
                    onClick={handleSubmit}
                >
                    Process
                </Button>
            </DockedItem>  
        </Form>
    )
}