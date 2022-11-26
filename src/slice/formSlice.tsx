import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "./index";

export interface UserLabel {
    label: string;
    required: boolean;
    value: string;
    wireless: boolean;
    id: string;
    userForm: boolean;
    error: boolean;
}
export interface SecurityData {
    value: string;
    error: boolean;
}

export interface FormControlData {
    value: string;
    label: string;
}

export interface InputData {
    key: string
    i: number
    value: string
    error: boolean
}

export interface InitialStateObject {
    textInputsDisabled: boolean;
    wifiInputChecked: boolean;
    securityInputChecked: boolean;
    ipRadioInputValue: string;
    DNSradioInputValue: string;
    wirelessIpRadioInputValue: string;
    wirelessDNSradioInputValue: string;
    networkName: string;
    securityKeyForm: SecurityData;
    userIpLabels: UserLabel[];
    userWirelessIpLabels: UserLabel[];
    userDNSLabels: UserLabel[];
    userWirelessDNSLabels: UserLabel[];
    ipFormControlData: FormControlData[];
    wirelessIpFormControlData: FormControlData[];
    DNSformControlData: FormControlData[];
    wirelessDNSformControlData: FormControlData[];
}

const initialState = {
    textInputsDisabled: false,
    wifiInputChecked: false,
    securityInputChecked: false,
    ipRadioInputValue: "autoIp", 
    DNSradioInputValue: "autoDNS",
    wirelessIpRadioInputValue: "wirelessAutoIp", 
    wirelessDNSradioInputValue: "wirelessAutoDNS",
    networkName: "",
    securityKeyForm: {value: "", error: false},
    userIpLabels: [
        {label: "IP address:", required: true, value: "", wireless: false, id: "ip1", userForm: true, error: false}, 
        {label: "Subnet Mask:", required: true, value: "", wireless: false, id: "ip2", userForm: true, error: false }, 
        {label: "Default Gateway", required: false, value: "", wireless: false, id: "ip3", userForm: true, error: false}
    ],
    userWirelessIpLabels: [
        {label: "IP address:", required: true, value: "", wireless: true, id: "wirIp1", userForm: true, error: false}, 
        {label: "Subnet Mask:", required: true, value: "", wireless: true, id: "wirIp2", userForm: true, error: false}, 
        {label: "Default Gateway", required: false, value: "", wireless: true, id: "wirIp3", userForm: true, error: false}],
    userDNSLabels: [
        {label: "Preferred DNS server:", required: true, value: "", wireless: false, id: "DNS1", userForm: true, error: false}, 
        {label: "Alternative DNS server:", required: false, value: "", wireless: false, id: "DNS2", userForm: true, error: false},
    ],
    userWirelessDNSLabels: [
        {label: "Preferred DNS server:", required: true, value: "", wireless: true, id: "wirDNS1", userForm: true, error: false}, 
        {label: "Alternative DNS server:", required: false, value: "", wireless: true, id: "wirDNS2", userForm: true, error: false} ],
    ipFormControlData: [
        {value: "autoIp", label: "Obtain an IP Adress automathically (DHCP/BootP)"},
        {value: "userIp", label: "Use the following IP address"}
    ],
    wirelessIpFormControlData: [
        {value: "wirelessAutoIp", label: "Obtain an IP Adress automathically (DHCP/BootP)"},
        {value: "wirelessUserIp", label: "Use the following IP address"}
    ],
    DNSformControlData: [
        {value: "autoDNS", label: "Obtain DNS server adress automathically"},
        {value: "userDNS", label: "Use the following DS server address"}
    ],
    wirelessDNSformControlData: [
        {value: "wirelessAutoDNS", label: "Obtain DNS server adress automathically"},
        {value: "wirelessUserDNS", label: "Use the following DS server address"}
    ],
}

const formSlice = createSlice({
    name: "form",
    initialState, 
    reducers: {
        setRadioInputValue: (state: InitialStateObject, action: PayloadAction<string>) => {
            state.ipRadioInputValue = action.payload;
        },
        setDNSRadioInputValue: (state: InitialStateObject, action: PayloadAction<string>) => {
            state.DNSradioInputValue = action.payload;
        },
        setWirelessIpRadioInputValue: (state: InitialStateObject, action: PayloadAction<string>) => {
            state.wirelessIpRadioInputValue = action.payload;
        },
        setWirelessDNSRadioInputValue: (state: InitialStateObject, action: PayloadAction<string>) => {
            state.wirelessDNSradioInputValue = action.payload;
        },
        setInputsDisabled: (state: InitialStateObject, action: PayloadAction<boolean>) => {
            state.textInputsDisabled = action.payload;
        },
        setWifiInput: (state: InitialStateObject, action: PayloadAction<boolean>) => {
            state.wifiInputChecked = action.payload;
        }, 
        setSecurityInput: (state: InitialStateObject, action: PayloadAction<boolean>) => {
            state.securityInputChecked = action.payload;
        },
        setNetworkName: (state: InitialStateObject, action: PayloadAction<string>) => {
            state.networkName = action.payload;
        },
        setInputValue: (state: any, action: PayloadAction<InputData>) => {
            state[action.payload.key][action.payload.i].value = action.payload.value;
            state[action.payload.key][action.payload.i].error = action.payload.error;
        },
        setErrorValue: (state: InitialStateObject) => {
            state.userIpLabels.map((item: UserLabel) => item.error = false);
        },
        setSecurityKeyForm: (state: InitialStateObject, action: PayloadAction<SecurityData>) => {
            state.securityKeyForm.value = action.payload.value;
            state.securityKeyForm.error = action.payload.error;
        },
        reset: () => initialState,
        resetUserIpLabels: (state: InitialStateObject) => {
            state.userIpLabels = initialState.userIpLabels
        },
        resetUserDNSLabels: (state: InitialStateObject) => {
            state.userDNSLabels = initialState.userDNSLabels
        },
        resetUserWirelessDNSLabels: (state: InitialStateObject) => {
            state.userWirelessDNSLabels = initialState.userWirelessDNSLabels
        },
        resetUserWirelessIpLabels: (state: InitialStateObject) => {
            state.userWirelessIpLabels = initialState.userWirelessIpLabels
        },
        resetWifi: (state: InitialStateObject) => {
            state.securityInputChecked = initialState.securityInputChecked
            state.wirelessIpRadioInputValue = initialState.wirelessIpRadioInputValue
            state.wirelessDNSradioInputValue = initialState.wirelessDNSradioInputValue
            state.networkName = initialState.networkName
            state.userWirelessIpLabels = initialState.userWirelessIpLabels
            state.userWirelessDNSLabels = initialState.userWirelessDNSLabels
            state.securityKeyForm = initialState.securityKeyForm
        },
        resetSecurity: (state: InitialStateObject) => {
            state.securityKeyForm = initialState.securityKeyForm
        },
    }
})

export const {
    setInputsDisabled, 
    setRadioInputValue, 
    setDNSRadioInputValue, 
    setWirelessIpRadioInputValue, 
    setWirelessDNSRadioInputValue,
    setWifiInput,
    setSecurityInput,
    setNetworkName,
    setInputValue,
    setSecurityKeyForm,
    setErrorValue,
    reset,
    resetUserIpLabels,
    resetUserDNSLabels,
    resetUserWirelessDNSLabels,
    resetUserWirelessIpLabels,
    resetWifi,
    resetSecurity
} = formSlice.actions;


export const showFormData = (state: RootState) => state.form;
export default formSlice.reducer;