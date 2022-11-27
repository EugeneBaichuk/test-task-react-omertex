import {FC} from "react";
import RadioGroup from '@mui/material/RadioGroup';
import RadioFormItem from '../radioFormItem';
import FormControl from '@mui/material/FormControl';
import {formControlDataObj} from "../../../types/Tupes";
import {RadioFormProps} from "../../../types/Tupes";

/* Возвращает группу радио чекбоксов  */

export const RadioForms: FC<RadioFormProps> = ({radioInputValue, formControlData, onchange}) => {
    return (
        <FormControl>
            <RadioGroup
                onChange={onchange}
                aria-labelledby="demo-radio-buttons-group-label"
                value={radioInputValue}
                name="radio-buttons-group"
            >
                {formControlData.map((radio: formControlDataObj, i: number) =><RadioFormItem key={i} {...radio}/>)}
            </RadioGroup>
        </FormControl>
    );
}