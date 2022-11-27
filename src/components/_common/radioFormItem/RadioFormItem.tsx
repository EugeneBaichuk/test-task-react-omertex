
import {FC} from "react";
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector, useDispatch} from "react-redux";
import { showFormData, 
    resetUserIpLabels, 
    resetUserDNSLabels,
    resetUserWirelessDNSLabels,
    resetUserWirelessIpLabels 
} from "../../../slice/formSlice";
import {formControlDataObj} from "../../../types/Tupes";

/* 
*   Возвращает элемент группы радиокнопок
*   реализован сброс текстовых полей при их деактивации радиокнопкой, чтобы данные из неактивных полей
    не отправлялась на backend/(консоль)  
*/

export const RadioFormItem: FC<formControlDataObj> = ({value, label}) => {
    const {wifiInputChecked} = useSelector(showFormData);
    const dispatch = useDispatch();

    const disabled = ((value === "wirelessAutoIp" 
    || value === "wirelessUserIp" 
    || value === "wirelessUserDNS" 
    || value === "wirelessAutoDNS") && !wifiInputChecked) ? true : false; 

    const onResetFields = () => {
        switch (value) {
            case "autoIp": 
                dispatch(resetUserIpLabels())
                break;
            case "autoDNS": 
                dispatch(resetUserDNSLabels())
                break;
            case "wirelessAutoIp":
                dispatch(resetUserWirelessIpLabels())
                break;
            case "wirelessAutoDNS":  
                dispatch(resetUserWirelessDNSLabels())
                break;
        }
    } 

    return (
        <FormControlLabel onChange={onResetFields} disabled={disabled} value={value} label={label} control={<Radio />}/>
    )
}
