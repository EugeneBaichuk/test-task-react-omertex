import {FC} from "react";
import TextField from '@mui/material/TextField';
import { useSelector} from "react-redux";
import { showFormData } from "../../slice/formSlice";

type UserIpInputsItemProps = {
    label: string,
    required: boolean,
    radioInputDisabled: boolean,
    value: string,
    wireless: boolean,
    id: string,
    onValueChange: (id: string) => (e: any) => void
}

export const UserIpInputsItem: FC<UserIpInputsItemProps> = ({label, radioInputDisabled, required, value, wireless, id, onValueChange}) => {
    const {wifiInputChecked} = useSelector(showFormData);
    const wifiDisabled = (!wifiInputChecked && wireless);
    console.log(value);
    



    //const validInput = 

    return (
        <TextField required={required} fullWidth id="outlined-basic" onChange={onValueChange(id)} value={value} label={label} disabled={radioInputDisabled || wifiDisabled} variant="outlined" />
    )
}
