
import {FC} from "react";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector, useDispatch} from "react-redux";
import { showFormData, 
    resetUserIpLabels, 
    resetUserDNSLabels,
    resetUserWirelessDNSLabels,
    resetUserWirelessIpLabels 
} from "../../slice/formSlice";

type FormControlLabelItemProps = {
    value: string,
    label: string
}

export const RadioFormItem: FC<FormControlLabelItemProps> = ({value, label}) => {
    const {wifiInputChecked} = useSelector(showFormData);
    const dispatch = useDispatch();

    const disabled = ((value === "wirelessAutoIp" 
    || value === "wirelessUserIp" 
    || value === "wirelessUserDNS" 
    || value === "wirelessAutoDNS") && !wifiInputChecked) ? true : false; 

    const onCheckboxClick = () => {
        switch (value) {
            case "autoIp": 
                dispatch(resetUserIpLabels())
                break;
            case "autoDNS": 
                dispatch(resetUserDNSLabels())
                break;
            case "wirelessAutoIp":
                dispatch(resetUserWirelessIpLabels())
                break;
            case "wirelessAutoDNS":  
                dispatch(resetUserWirelessDNSLabels())
                break;
        }

    } 

    return (
        <FormControlLabel onChange={onCheckboxClick} disabled={disabled} value={value} label={label} control={<Radio />}/>
    )
}
