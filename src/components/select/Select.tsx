import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import { useSelector} from "react-redux";
import { showFormData } from "../../slice/formSlice";


export const SelectAutoWidth = () => {
    const {
        wifiInputChecked
    } = useSelector(showFormData);
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const disabled = !wifiInputChecked ? true : false; 
    return (
        <div style={{width: "fit-content", margin: "0 20px 0 auto", display: "flex"}}>
            <div>
                <FormControl sx={{ minWidth: 300 }}>
                    <InputLabel disabled={disabled} required id="demo-simple-select-autowidth-label">Wireless network name</InputLabel>
                    <Select
                        disabled={disabled}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        label="Wireless network name"
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={"network1"}>network1</MenuItem>
                        <MenuItem value={"network2"}>network2</MenuItem>
                        <MenuItem value={"network3"}>network3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <IconButton disabled={disabled} style={{alignSelf: "center", margin: "0 5px"}} aria-label="fingerprint" color="primary"><ReplayIcon/></IconButton>
        </div>
    );
}