import { useState } from 'react'

export const useInputValue = () => {
    const [value, setValue] = useState('')
    const onChange = (e) => {
        return setValue(e ? e.target.value : '')
    }
    
    return { value, onChange}
}