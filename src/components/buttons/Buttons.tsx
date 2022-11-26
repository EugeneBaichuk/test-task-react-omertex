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
        wirelessDNSradioInputValue,
        wifiInputChecked,
        securityInputChecked
    } = useSelector(showFormData);

    let buttonIsDisabled //валидация
    const userIpLabelsIsDisabled = userIpLabels.find( (item) => item.error || (item.required && !item.value))
    const userDNSLabelsIsDisabled = userDNSLabels.find( (item) => item.error || (item.required && !item.value))
    const userWirelessIpLabelsIsValid = userWirelessIpLabels.find( (item) => item.error || (item.required && !item.value));
    const userWirelessDNSLabelsIsValid = userWirelessDNSLabels.find( (item) => item.error || (item.required && !item.value));

    buttonIsDisabled = (ipRadioInputValue === "autoIp") ? false: userIpLabelsIsDisabled ? true: false;
    buttonIsDisabled = (DNSradioInputValue === "autoDNS") ? buttonIsDisabled : userDNSLabelsIsDisabled ? true: buttonIsDisabled;
    if (wifiInputChecked) {
        if ( !networkName ) {
            buttonIsDisabled = true
        }
        if (securityInputChecked ) {
            if (!securityKeyForm.value) {
                buttonIsDisabled = true
            } 
        }
        if (wirelessIpRadioInputValue !== "wirelessAutoIp") {
            buttonIsDisabled = userWirelessIpLabelsIsValid ? true: buttonIsDisabled
        }
        if (wirelessDNSradioInputValue !== "wirelessAutoDNS") {
            buttonIsDisabled = userWirelessDNSLabelsIsValid ? true: buttonIsDisabled
        }
    } 


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
