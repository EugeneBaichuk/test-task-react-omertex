import {FC} from "react";
import Box from '@mui/material/Box';
import UserIpInputsItem from '../userTextInputsItem';

interface labelObj {
    label: string,
    required: boolean
}

type UserIpInputsProps = {
    userLabels: Array<labelObj>
    inputVal: string
    radioInputValue: string
}

export const UserIpInputs: FC<UserIpInputsProps> = ({userLabels, inputVal, radioInputValue}) => {
    const isDisabled = (radioInputValue === inputVal) ? false : true;

    return (
        <Box
        component="form"
        sx={{
            '& > :not(style)': { margin: "5px 20px 5px auto", width: '350px'},
        }}
        noValidate
        autoComplete="off"
        >
        {userLabels.map((label, i) => <div key={i}><UserIpInputsItem disabled={isDisabled} {...label}/></div>)}
        </Box>
    );
};

