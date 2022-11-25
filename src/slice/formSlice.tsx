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
    data: {}
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
            state[action.payload.key][action.payload.i].error = action.payload.error;
        },
        setErrorValue: (state: any) => {
            state.userIpLabels.map((item: any) => item.error = false);
        },
        setSecurityKeyForm: (state: any, action) => {
            state.securityKeyForm.value = action.payload.value;
            state.securityKeyForm.error = action.payload.error;
        },
        setSubmitObj: (state: any) => {
            const ipRadioInputValue = (state.ipRadioInputValue === "autoIp") ? true: false;
            const DNSradioInputValue = (state.DNSradioInputValue === "autoDNS") ? true: false;
            const wirelessIpRadioInputValue = (state.wirelessIpRadioInputValue === "wirelessAutoIp") ? true: false;
            const wirelessDNSradioInputValue = (state.wirelessDNSradioInputValue === "wirelessAutoDNS") ? true: false;
            state.data = {
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
    setSubmitObj,
    setErrorValue
} = formSlice.actions;
export const showFormData = (state) => state.form;
export default formSlice.reducer;