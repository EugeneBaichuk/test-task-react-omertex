import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch} from "react-redux";
import { showFormData, setSecurityInput} from "../../slice/formSlice";

export const Security = () => {
    const dispatch = useDispatch();
    const onSecurityChange = (val: boolean) => () => {
        dispatch(setSecurityInput(!val));
    }
    const {
        securityInputChecked,
        wifiInputChecked
    } = useSelector(showFormData);
    return (
        <>
            <div>
                <FormControlLabel  onChange={onSecurityChange(securityInputChecked)} control={wifiInputChecked ? <Checkbox checked={securityInputChecked}/>: <Checkbox disabled/>} label="Enable Wireless Security" />
                </div>
                <div style={{width: "fit-content", margin: "0 20px 0 auto"}}>
                <TextField
                    disabled={!securityInputChecked}
                    sx={{ minWidth: 350 }}
                    required
                    id="outlined-required"
                    label="Security key:"
                    />
            </div>
        </>
    )
}
