import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    textInputsDisabled: false,
    wifiInputChecked: false,
    securityInputChecked: false,
    ipRadioInputValue: "autoIp", 
    DNSradioInputValue: "autoDNS",
    wirelessIpRadioInputValue: "wirelessAutoIp", 
    wirelessDNSradioInputValue: "wirelessAutoDNS",
    userIpLabels: [{label: "IP address:", required: true}, {label: "Subnet Mask:", required: true}, {label: "Default Gateway", required: false}],
    userDNSLabels: [{label: "Preferred DNS server:", required: true}, {label: "Alternative DNS server:", required: false} ],
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
        setRadioInputValue: (state, action) => {
            state.ipRadioInputValue = action.payload;
        },
        setDNSRadioInputValue: (state, action) => {
            state.DNSradioInputValue = action.payload;
        },
        setWirelessIpRadioInputValue: (state, action) => {
            state.wirelessIpRadioInputValue = action.payload;
        },
        setWirelessDNSRadioInputValue: (state, action) => {
            state.wirelessDNSradioInputValue = action.payload;
        },
        setInputsDisabled: (state, action) => {
            state.textInputsDisabled = action.payload;
        },
        setWifiInput: (state, action) => {
            state.wifiInputChecked = action.payload;
        }, 
        setSecurityInput: (state, action) => {
            state.securityInputChecked = action.payload;
        } 
    }
})

export const {
    setInputsDisabled, 
    setRadioInputValue, 
    setDNSRadioInputValue, 
    setWirelessIpRadioInputValue, 
    setWirelessDNSRadioInputValue,
    setWifiInput,
    setSecurityInput
} = formSlice.actions;
export const showFormData = (state) => state.form;
export default formSlice.reducer;