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
    error: boolean,
    onValueChange: (id: string) => (e: any) => void
}

export const UserTextInputsItem: FC<UserIpInputsItemProps> = ({error, label, radioInputDisabled, required, value, wireless, id, onValueChange}) => {
    const {wifiInputChecked} = useSelector(showFormData);
    const wifiDisabled = (!wifiInputChecked && wireless);

    return (
        <div style={{position: "relative", margin: "20px 0"}}>
        <TextField error={error} required={required} fullWidth id="outlined-basic" onChange={onValueChange(id)} value={value} label={label} disabled={radioInputDisabled || wifiDisabled} variant="outlined" />
        {error && <div style={{position: "absolute", left: "10px", fontSize: '11px', color: "#d84949"}}>Please type data in the format ___.___.___.___</div>}
        </div>
    )
}
