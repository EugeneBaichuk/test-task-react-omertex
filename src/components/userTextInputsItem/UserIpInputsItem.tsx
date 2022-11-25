import {FC, useState} from "react";
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

export const UserIpInputsItem: FC<UserIpInputsItemProps> = ({error, label, radioInputDisabled, required, value, wireless, id, onValueChange}) => {
    const [blurError, setBlurError] = useState(false);
    const {wifiInputChecked} = useSelector(showFormData);
    const wifiDisabled = (!wifiInputChecked && wireless);

    const onInputBlur = () => {
        setBlurError(error);
    }

    return (
        <TextField error={blurError} onBlur={onInputBlur} required={required} fullWidth id="outlined-basic" onChange={onValueChange(id)} value={value} label={label} disabled={radioInputDisabled || wifiDisabled} variant="outlined" />
    )
}
