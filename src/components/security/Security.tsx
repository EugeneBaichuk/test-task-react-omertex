import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch} from "react-redux";
import { showFormData, setSecurityInput, setSecurityKeyForm, resetSecurity} from "../../slice/formSlice";

/* 
* Возвращает чекбокс Enable Wireless Security и текстовую форму Security key
* реализован сброс текстового поля при деактивации чекбокса
*/

export const Security = () => {
    const {
        securityInputChecked,
        wifiInputChecked,
        securityKeyForm,
    } = useSelector(showFormData);
    const dispatch = useDispatch();
    const onSecurityChange = (val: boolean) => () => {
        dispatch(setSecurityInput(!val));
        if (securityInputChecked) {
            dispatch(resetSecurity())
        }
    }

    const onKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSecurityKeyForm({value: e.target.value, error: !e.target.value}));
    }

    return (
        <>
            <div>
                <FormControlLabel control={wifiInputChecked ? <Checkbox onChange={onSecurityChange(securityInputChecked)} checked={securityInputChecked}/>: <Checkbox disabled checked={securityInputChecked}/>} label="Enable Wireless Security" />
                </div>
                <div style={{width: "fit-content", margin: "0 20px 0 auto"}}>
                <TextField
                    onChange={onKeyChange}
                    disabled={!securityInputChecked || !wifiInputChecked}
                    sx={{ minWidth: 350 }}
                    value={securityKeyForm.value}
                    error={securityKeyForm.error}
                    required
                    id="outlined-required"
                    label="Security key:"
                    />
            </div>
        </>
    )
}
