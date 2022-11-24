
import {FC} from "react";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector} from "react-redux";
import { showFormData } from "../../slice/formSlice";

type FormControlLabelItemProps = {
    value: string,
    label: string
}

export const FormControlLabelItem: FC<FormControlLabelItemProps> = ({value, label}) => {
    const {
        wifiInputChecked
    } = useSelector(showFormData);

    const disabled = ((value === "wirelessAutoIp" 
    || value === "wirelessUserIp" 
    || value === "wirelessUserDNS" 
    || value === "wirelessAutoDNS") && !wifiInputChecked) ? true : false; 
    return (
        <FormControlLabel disabled={disabled} value={value} label={label} control={<Radio />}/>
    )
}
