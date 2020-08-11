import React, {useEffect} from 'react'

import { useDispatch } from 'react-redux'
import { emptyCombo } from '../../store/Graph/action'

import { useInputValue } from '../../hooks/useInputValue';
import { Form, SFormControl, DockedItem } from './styles'
import { Button, InputLabel, Select, MenuItem} from '@material-ui/core';

import { RiArrowUpDownLine } from 'react-icons/ri';

export const Selector = ({xItems, yItems, filterItemY, onSubmit, empCombo}) => {
    const dispatch = useDispatch();
    const xAxis = useInputValue();
    const yAxis = useInputValue();

    const handleItemX = (val) => {
        filterItemY(val.target.value)

        //Set value string empty for clean Select Y
        val.target.value == yAxis.value && yAxis.onChange('')
    }

    const changeValues = () => {
        //Clean Filter before exchange
        filterItemY()

        const buildX = {
            target: {
                value: yAxis.value
            }
        }
        const buildY = {
            target: {
                value: xAxis.value
            }
        }

        xAxis.onChange(buildX) 
        yAxis.onChange(buildY)
    }

    const handleSubmit = (e) => {
        e.preventDefault();        
        
        onSubmit({
            xAxis: xAxis.value,
            yAxis: yAxis.value
        })
    }

    useEffect(function () {
        //Disabled render for avoid re render if change states
        if(emptyCombo){
            xAxis.onChange('') 
            yAxis.onChange('')
            dispatch(emptyCombo(false))
        }

    }, [empCombo])

    return (
        <Form>
            <SFormControl>
                <InputLabel>X Axis</InputLabel>
                <Select         
                    {...xAxis}
                    onClick={handleItemX}  
                >
                {
                    xItems.map((item, idx) => {
                        return (
                            <MenuItem 
                                key={idx} 
                                value={item}
                            >
                               {item}
                            </MenuItem>
                            )
                    })
                }
                </Select>
            </SFormControl>

            <Button
                variant='contained'
                component='label'
            >
                <RiArrowUpDownLine 
                    size='1.5em'
                    onClick={changeValues}
                />
            </Button>

            <SFormControl>
                <InputLabel>Y Axis</InputLabel>
                <Select {...yAxis}>
                {
                    yItems.map((item, idx) => {
                        return (<MenuItem key={idx} value={item}>{item}</MenuItem>)
                    })
                }
                </Select>
            </SFormControl>
            
            <DockedItem>                     
                <Button 
                    variant='contained' 
                    color='primary'
                    onClick={handleSubmit}
                >
                    Apply
                </Button>
            </DockedItem>  
        </Form>
    )
}