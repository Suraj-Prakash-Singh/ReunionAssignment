import { Box, Drawer, Button, IconButton, TextField, MenuItem} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import MultipleSelectChip from "./MultiSelect"
import { useState } from 'react';
import DateRangeSelect from './DateRangeSelect';

const SideBarFilter = ({ open, table, columns, setShowFilterSideBar }) => {
    const [textInput, setTextInput] = useState('');
    const [catInput, setCatInput] = useState('');
    function toggleBar(){
        setShowFilterSideBar();
    }

    return (
        <Drawer anchor="right" open={true}>
            <Box sx={{width: '25vw'}} p={2}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', alignContent:'center'}}>
                    <h2>Filtering Options</h2>
                    <CancelIcon onClick={toggleBar}/>
                </Box>
                <Box sx={{width: 'auto', height: 'auto', display: 'flex', flexDirection:'column'}}>
                    <Box sx={{width: '100%', display: 'flex', flexDirection:'column', justifyContent:'center', backgroundColor:'#e5e4e2', my:1, p:1, borderRadius:'5px'}}>
                        <Box sx={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
                            <h1>Name</h1>
                            <RestartAltIcon onClick={(e) => setTextInput('')}/>
                        </Box>
                        <TextField size='small' sx={{backgroundColor: 'white'}} value={textInput} id='name' onChange={(e) => setTextInput(e.target.value)}></TextField>
                    </Box>
                    <Box sx={{width: '100%', display: 'flex', flexDirection:'column', justifyContent:'center', backgroundColor:'#e5e4e2', my:1, p:1, borderRadius:'5px'}}>
                        <Box sx={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
                            <h1>Category</h1>
                            <RestartAltIcon onClick={(e) => setTextInput('')}/>
                        </Box>
                        <TextField select size='small' sx={{backgroundColor: 'white'}} id='name' placeholder="hello" value={catInput} onChange={(e) => setCatInput(e.target.value)}>
                            <MenuItem value="value">Cat One</MenuItem>
                            <MenuItem value="value">Cat Two</MenuItem>
                        </TextField>
                    </Box>
                    <Box sx={{width: '100%', display: 'flex', flexDirection:'column', justifyContent:'center', backgroundColor:'#e5e4e2', my:1, p:1, borderRadius:'5px'}}>
                        <Box sx={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
                            <h1>Sucategory</h1>
                            <RestartAltIcon onClick={(e) => setTextInput('')}/>
                        </Box>
                        {/* <TextField select size='small' sx={{backgroundColor: 'white'}} id='name' placeholder="hello" value={catInput} onChange={(e) => setCatInput(e.target.value)}>
                            <MenuItem value="value">Cat One</MenuItem>
                            <MenuItem value="value">Cat Two</MenuItem>
                        </TextField> */}
                        <MultipleSelectChip/>
                    </Box>               
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center'}}>
                    <Button sx={{width: '100%', backgroundColor: "white", color:"black", border: "1px solid blue", marginBottom:1, marginTop:4}} variant="contained" color="primary"
                        >
                        Clear Filters
                    </Button>
                </Box>
            </Box>
        </Drawer>
    )
}


export default SideBarFilter;