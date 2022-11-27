export interface formControlDataObj {
    value: string,
    label: string
}

export type RadioFormProps = {
    radioInputValue: string,
    formControlData: Array<formControlDataObj>
    onchange: any
}

export interface labelObj {
    label: string,
    required: boolean,
    value: string,
    wireless: boolean,
    id: string
    error: boolean
}

export type UserIpInputsProps = {
    userLabels: Array<labelObj>
    inputVal: string
    radioInputValue: string,
}

export type UserIpInputsItemProps = {
    label: string,
    required: boolean,
    radioInputDisabled: boolean,
    value: string,
    wireless: boolean,
    id: string,
    error: boolean,
    onValueChange: (id: string) => (e: any) => void
}

export interface userFormObj {
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

export interface InputData {
    key: keyof InitialStateObject
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
    userIpLabels: userFormObj[];
    userWirelessIpLabels: userFormObj[];
    userDNSLabels: userFormObj[];
    userWirelessDNSLabels: userFormObj[];
    ipFormControlData: formControlDataObj[];
    wirelessIpFormControlData: formControlDataObj[];
    DNSformControlData: formControlDataObj[];
    wirelessDNSformControlData: formControlDataObj[];
}