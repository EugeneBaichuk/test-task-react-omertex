import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    textInputsDisabled: false,
    wifiInputChecked: false,
    securityInputChecked: false,
    ipRadioInputValue: "autoIp", 
    DNSradioInputValue: "autoDNS",
    wirelessIpRadioInputValue: "wirelessAutoIp", 
    wirelessDNSradioInputValue: "wirelessAutoDNS",
    networkName: "",
    userIpLabels: [
        {label: "IP address:", required: true, value: "", wireless: false, id: "ip1", userForm: true}, 
        {label: "Subnet Mask:", required: true, value: "", wireless: false, id: "ip2", userForm: true }, 
        {label: "Default Gateway", required: false, value: "", wireless: false, id: "ip3", userForm: true}
    ],
    userWirelessIpLabels: [
        {label: "IP address:", required: true, value: "", wireless: true, id: "wirIp1", userForm: true}, 
        {label: "Subnet Mask:", required: true, value: "", wireless: true, id: "wirIp2", userForm: true}, 
        {label: "Default Gateway", required: false, value: "", wireless: true, id: "wirIp3", userForm: true}],
    userDNSLabels: [
        {label: "Preferred DNS server:", required: true, value: "", wireless: false, id: "DNS1", userForm: true}, 
        {label: "Alternative DNS server:", required: false, value: "", wireless: false, id: "DNS2", userForm: true},
    ],
    userWirelessDNSLabels: [
        {label: "Preferred DNS server:", required: true, value: "", wireless: true, id: "wirDNS1", userForm: true}, 
        {label: "Alternative DNS server:", required: false, value: "", wireless: true, id: "wirDNS2", userForm: true} ],
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
        },
        setNetworkName: (state, action) => {
            state.networkName = action.payload;
        },
        setInputValue: (state: any, action) => {
            state[action.payload.key][action.payload.i].value = action.payload.value;
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
    setInputValue
} = formSlice.actions;
export const showFormData = (state) => state.form;
export default formSlice.reducer;