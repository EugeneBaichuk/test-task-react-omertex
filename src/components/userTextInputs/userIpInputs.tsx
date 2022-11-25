import {FC} from "react";
import Box from '@mui/material/Box';
import UserIpInputsItem from '../userTextInputsItem';
import { useSelector, useDispatch} from "react-redux";
import { setInputValue, showFormData } from "../../slice/formSlice";

interface labelObj {
    label: string,
    required: boolean,
    value: string,
    wireless: boolean,
    id: string
    error: boolean
}

type UserIpInputsProps = {
    userLabels: Array<labelObj>
    inputVal: string
    radioInputValue: string,
}

export const UserIpInputs: FC<UserIpInputsProps> = ({userLabels, inputVal, radioInputValue}) => {
    const formData = useSelector(showFormData);

    const userTextForms = () => {
        const forms = [];
        for (let key in formData) {
            formData[key].userForm && forms.push({[key]: formData[key]});
            if (typeof(formData[key][0]) === "object") {
                formData[key][0].userForm && forms.push({[key]: formData[key][0]})
            }
        }
        return forms;
    }

    const isDisabled = (radioInputValue === inputVal) ? false : true;
    const dispatch = useDispatch();

    const onValueChange = (id: string) => (e: any) => {
        let currentForm: any = [];
        userLabels.map((item, i) => {
            userTextForms().forEach(form => {
                for (let key in form) {
                    if (form[key].id === item.id) {
                        currentForm = Object.keys(form);
                    }
                }
            });
            if (item.id === id) {
                let error = e.target.value.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/) ? false: true; 
                error = (item.label === "IP address:" || item.label === "Subnet Mask:" || item.label === "Preferred DNS server:") ? error: false;
                dispatch(setInputValue({key: currentForm[0], value: e.target.value, error: error, i: i}))
            }
            return item;
        });
    }

    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { margin: "5px 20px 5px auto", width: '350px'},
        }}
        noValidate
        autoComplete="off"
        >
        {userLabels.map((label, i) => <div key={i}><UserIpInputsItem onValueChange={onValueChange} radioInputDisabled={isDisabled} {...label}/></div>)}
        </Box>
    );
};

