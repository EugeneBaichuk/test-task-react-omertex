import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch} from "react-redux";
import { showFormData, setSecurityInput, setSecurityKeyForm} from "../../slice/formSlice";


export const Security = () => {
    const dispatch = useDispatch();
    const onSecurityChange = (val: boolean) => () => {
        dispatch(setSecurityInput(!val));
    }
    const {
        securityInputChecked,
        wifiInputChecked,
        securityKeyForm
    } = useSelector(showFormData);

    const onKeyChange = (e) => {
        const error = securityKeyForm.value ? false: true;
        dispatch(setSecurityKeyForm({value: e.target.value, error: error}));
    }
    
    return (
        <>
            <div>
                <FormControlLabel  onChange={onSecurityChange(securityInputChecked)} control={wifiInputChecked ? <Checkbox checked={securityInputChecked}/>: <Checkbox disabled/>} label="Enable Wireless Security" />
                </div>
                <div style={{width: "fit-content", margin: "0 20px 0 auto"}}>
                <TextField
                    onChange={onKeyChange}
                    disabled={!securityInputChecked || !wifiInputChecked}
                    sx={{ minWidth: 350 }}
                    value={securityKeyForm.value}
                    error={false}
                    required
                    id="outlined-required"
                    label="Security key:"
                    />
            </div>
        </>
    )
}
