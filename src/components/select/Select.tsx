import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import { useSelector, useDispatch} from "react-redux";
import { showFormData, setNetworkName } from "../../slice/formSlice";

/* Возвращает input "Wireless network name"*/

export const SelectAutoWidth = () => {
    const {wifiInputChecked, networkName} = useSelector(showFormData);
    const dispatch = useDispatch();
    const handleChange = (event: SelectChangeEvent) => {
        dispatch(setNetworkName(event.target.value));
    };

    const handleReplayClick = () => {
        dispatch(setNetworkName(''));
    } 

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
                        value={networkName}
                        onChange={handleChange}
                        autoWidth
                        label="Wireless network name"
                    >
                        <MenuItem sx={{width: "300px"}} value=""><em>None</em></MenuItem>
                        <MenuItem value={"network1"}>network name 1</MenuItem>
                        <MenuItem value={"network2"}>network name 2</MenuItem>
                        <MenuItem value={"network3"}>network name 3</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <IconButton onClick={handleReplayClick} disabled={disabled} style={{alignSelf: "center", margin: "0 5px"}} aria-label="fingerprint" color="primary"><ReplayIcon/></IconButton>
        </div>
    );
}