import IpAdress from "../radioForm";
import UserIpInputs from "../userTextInputs";
import "./form.css";
import { useSelector, useDispatch} from "react-redux";
import { showFormData, 
    setRadioInputValue, 
    setDNSRadioInputValue, 
    setWirelessIpRadioInputValue, 
    setWirelessDNSRadioInputValue,
    setWifiInput,
    resetWifi
} from "../../slice/formSlice";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SelectAutoWidth from "../select";
import Security from "../security";
import Buttons from "../buttons";

export const Form = () => {
    const {
        ipRadioInputValue, 
        DNSformControlData, 
        ipFormControlData, 
        userIpLabels, 
        userDNSLabels,
        userWirelessIpLabels,
        userWirelessDNSLabels, 
        DNSradioInputValue,
        wirelessIpRadioInputValue, 
        wirelessDNSradioInputValue, 
        wirelessIpFormControlData, 
        wirelessDNSformControlData,
        wifiInputChecked,
    } = useSelector(showFormData);

    const dispatch = useDispatch();
    const onChange = (setValue: (action: string) => any ) => (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setValue(e.target.value));
    }
    const onWifiChange = (val: boolean) => () => {
        dispatch(setWifiInput(!val));
        if (wifiInputChecked) {
            dispatch(resetWifi());    
        }
        
    }

    return (
        <div className='form'>
            <section className='form__section'>
                <h3 className="form__header">Ethernet Settings</h3>
                <IpAdress radioInputValue={ipRadioInputValue} formControlData={ipFormControlData} onchange={onChange(setRadioInputValue)}/>
                <UserIpInputs userLabels={userIpLabels} inputVal={"userIp"} radioInputValue={ipRadioInputValue}/>
                <IpAdress radioInputValue={DNSradioInputValue} formControlData={DNSformControlData} onchange={onChange(setDNSRadioInputValue)}/>
                <UserIpInputs userLabels={userDNSLabels} inputVal={"userDNS"} radioInputValue={DNSradioInputValue}/>
            </section>
            <section className='form__section'>
                <h3 className="form__header">Wireless Settings</h3>
                <FormControlLabel  control={<Checkbox value={wifiInputChecked} onChange={onWifiChange(wifiInputChecked)} checked={wifiInputChecked}/>} label="Enable Wifi" />
                <SelectAutoWidth/> 
                <Security/>
                <IpAdress radioInputValue={wirelessIpRadioInputValue} formControlData={wirelessIpFormControlData} onchange={onChange(setWirelessIpRadioInputValue)}/>
                <UserIpInputs userLabels={userWirelessIpLabels} inputVal={"wirelessUserIp"} radioInputValue={wirelessIpRadioInputValue}/>
                <IpAdress radioInputValue={wirelessDNSradioInputValue} formControlData={wirelessDNSformControlData} onchange={onChange(setWirelessDNSRadioInputValue)}/>
                <UserIpInputs userLabels={userWirelessDNSLabels} inputVal={"wirelessUserDNS"} radioInputValue={wirelessDNSradioInputValue}/>
            </section>
            <Buttons/>
        </div>
    )
}
