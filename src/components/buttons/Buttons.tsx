import {useState, useEffect} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./buttons.css";
import { useSelector, useDispatch} from "react-redux";
import {setSubmitObj, showFormData, reset} from "../../slice/formSlice";


export const Buttons = () => {
    const [render, setRender] = useState(false);
    const {
        data, 
        securityKeyForm, 
        userIpLabels, 
        userWirelessIpLabels,
        userDNSLabels,
        userWirelessDNSLabels,
        networkName,
        ipRadioInputValue,
        DNSradioInputValue,
        wirelessIpRadioInputValue,
        wirelessDNSradioInputValue
    } = useSelector(showFormData);

    let buttonIsDisabled = (securityKeyForm.value) ? false: true;
    buttonIsDisabled = (userIpLabels.find( (item) => item.error || (item.required && !item.value)) ? true: buttonIsDisabled);
    buttonIsDisabled =  userWirelessIpLabels.find( (item) => item.error || (item.required && !item.value)) ? true: buttonIsDisabled;
    buttonIsDisabled =  userDNSLabels.find( (item) => item.error || (item.required && !item.value)) ? true: buttonIsDisabled;
    buttonIsDisabled =  userWirelessDNSLabels.find( (item) => item.error || (item.required && !item.value)) ? true: buttonIsDisabled;
    buttonIsDisabled = networkName ? buttonIsDisabled: true;


    // (ipRadioInputValue === "autoIp") ? false :
    // (wirelessIpRadioInputValue === "wirelessAutoIp") ? false :
    // (DNSradioInputValue === "autoDNS") ? false :
    // (wirelessDNSradioInputValue === "wirelessAutoDNS") ? false :

    const dispatch = useDispatch();
    const onSaveBtnClick = () => {
        dispatch(setSubmitObj());
        setRender(data => !data);
        
    }

    useEffect(() => {
        console.log(data);
        dispatch(reset());
    }, [render]);




    return (
        <div className='form__buttons'>
            <Stack spacing={2} direction="row">
                <Button disabled={buttonIsDisabled} onClick={onSaveBtnClick} sx={{width: "100px", borderRadius: "50px"}} variant="contained">Save</Button>
                <Button sx={{width: "100px", borderRadius: "50px"}} className='form__button' variant="outlined">Cancel</Button>
            </Stack>
        </div>
    )
}
