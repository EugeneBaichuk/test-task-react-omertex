import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./buttons.css";

export const Buttons = () => {
    return (
        <div className='form__buttons'>
            <Stack spacing={2} direction="row">
                <Button sx={{borderRadius: "50px"}} variant="contained">Contained</Button>
                <Button sx={{borderRadius: "50px"}} className='form__button' variant="outlined">Outlined</Button>
            </Stack>
        </div>
    )
}
