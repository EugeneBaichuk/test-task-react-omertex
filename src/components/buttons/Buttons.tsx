import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "./buttons.css";

export const Buttons = () => {
    return (
        <div className='form__buttons'>
            <Stack spacing={2} direction="row">
                <Button sx={{width: "100px", borderRadius: "50px"}} variant="contained">Save</Button>
                <Button sx={{width: "100px", borderRadius: "50px"}} className='form__button' variant="outlined">Cancel</Button>
            </Stack>
        </div>
    )
}
