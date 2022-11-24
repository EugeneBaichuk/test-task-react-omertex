import {FC} from "react";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabelItem from '../radioFormItem';
import FormControl from '@mui/material/FormControl';

interface formControlDataObj {
    value: string,
    label: string
}

type IpAdressProps = {
    radioInputValue: string,
    formControlData: Array<formControlDataObj>
    onchange: any
}

export const IpAdress: FC<IpAdressProps> = ({radioInputValue, formControlData, onchange}) => {
    
    return (
        <FormControl>
            <RadioGroup
                onChange={onchange}
                aria-labelledby="demo-radio-buttons-group-label"
                value={radioInputValue}
                name="radio-buttons-group"
            >
                {formControlData.map((radio: formControlDataObj, i: number) =><FormControlLabelItem key={i} {...radio}/>)}
            </RadioGroup>
        </FormControl>
    );
}

