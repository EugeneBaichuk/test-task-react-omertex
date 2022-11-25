import {useState, useEffect} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./buttons.css";
import { useSelector, useDispatch} from "react-redux";
import {setSubmitObj, showFormData} from "../../slice/formSlice";


export const Buttons = () => {
    const [render, setRender] = useState(false);
    const {data} = useSelector(showFormData);

    const dispatch = useDispatch();
    const onSaveBtnClick = () => {
        dispatch(setSubmitObj());
        setRender(data => !data);
    }

    useEffect(() => {
        console.log(data);
    }, [render]);

    return (
        <div className='form__buttons'>
            <Stack spacing={2} direction="row">
                <Button onClick={onSaveBtnClick} sx={{width: "100px", borderRadius: "50px"}} variant="contained">Save</Button>
                <Button sx={{width: "100px", borderRadius: "50px"}} className='form__button' variant="outlined">Cancel</Button>
            </Stack>
        </div>
    )
}
