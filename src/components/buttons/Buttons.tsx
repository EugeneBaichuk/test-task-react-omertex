import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./buttons.css";
import { useSelector, useDispatch} from "react-redux";
import { showFormData, reset} from "../../slice/formSlice";

interface userFormObj {
    label: string;
    required: boolean;
    value: string;
    wireless: boolean;
    id: string;
    userForm: boolean;
    error: boolean;
}

export const Buttons = () => {
    const { 
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
    const state = useSelector(showFormData); 
    const dispatch = useDispatch();

    let buttonIsDisabled //валидация
    const userIpLabelsIsDisabled = userIpLabels.find( (item: userFormObj) => item.error || (item.required && !item.value))
    const userDNSLabelsIsDisabled = userDNSLabels.find( (item: userFormObj) => item.error || (item.required && !item.value))
    const userWirelessIpLabelsIsValid = userWirelessIpLabels.find( (item: userFormObj) => item.error || (item.required && !item.value));
    const userWirelessDNSLabelsIsValid = userWirelessDNSLabels.find( (item: userFormObj) => item.error || (item.required && !item.value));

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

    const formData = () => {
        const ipRadioInputValue = (state.ipRadioInputValue === "autoIp") ? true: false;
        const DNSradioInputValue = (state.DNSradioInputValue === "autoDNS") ? true: false;
        const wirelessIpRadioInputValue = (state.wirelessIpRadioInputValue === "wirelessAutoIp") ? true: false;
        const wirelessDNSradioInputValue = (state.wirelessDNSradioInputValue === "wirelessAutoDNS") ? true: false;
        return {
            autoEthernetIpRequired: ipRadioInputValue,
            userEthernetIpData: {
                adress: state.userIpLabels[0].value,
                subnetMask: state.userIpLabels[1].value,
                defaultGateway: state.userIpLabels[2].value,
            },
            autoEthernetDNSRequired: DNSradioInputValue,
            userEthernetDNSData: {
                preferredDNSServer: state.userDNSLabels[0].value,
                alternativeDNSServer: state.userDNSLabels[1].value,
            },
            wifiChecked: state.wifiInputChecked,
            securityChecked: state.securityInputChecked,
            autoWirelessIpRequired: wirelessIpRadioInputValue,
            userWirelessIpData: {
                adress: state.userWirelessIpLabels[0].value,
                subnetMask: state.userWirelessIpLabels[1].value,
                defaultGateway: state.userWirelessIpLabels[2].value,
            },
            autoWirelessDNSRequired: wirelessDNSradioInputValue,
            userWirelessDNSData: {
                preferredDNSServer: state.userWirelessDNSLabels[0].value,
                alternativeDNSServer: state.userWirelessDNSLabels[1].value,
            },
            securityKey: state.securityKeyForm.value,
            wirelessNetworkName: state.networkName
        }
    }

    const onSaveBtnClick = () => {
        console.log(JSON.stringify({formData: formData()}));
        dispatch(reset());
    }

    return (
        <div className='form__buttons'>
            <Stack spacing={2} direction="row">
                <Button disabled={buttonIsDisabled} onClick={onSaveBtnClick} sx={{width: "100px", borderRadius: "50px"}} variant="contained">Save</Button>
                <Button sx={{width: "100px", borderRadius: "50px"}} className='form__button' variant="outlined">Cancel</Button>
            </Stack>
        </div>
    )
}
