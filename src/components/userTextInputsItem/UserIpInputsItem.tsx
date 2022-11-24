import {FC} from "react";
import TextField from '@mui/material/TextField';

type UserIpInputsItemProps = {
    label: string,
    required: boolean,
    disabled: boolean
}

export const UserIpInputsItem: FC<UserIpInputsItemProps> = ({label, disabled, required}) => {
    return (
        <TextField required={required} fullWidth id="outlined-basic" label={label} disabled={disabled} variant="outlined" />
    )
}
