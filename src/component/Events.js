import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

const EventList = ({ data, setData }) => {


    const deleteEvent = (eventi) => {
        setData(oldValues => {
            return oldValues.filter(eventDetails => eventDetails.eventName !== eventi.eventName)
        })
    }



    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', align: 'left' }}
            aria-label="contacts"
        >
            {data && data.map((eventi) => (
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText primary={eventi.eventName} secondary={`${eventi.eventTimeFrom} :  ${eventi.eventTimeTo} `}  >
                        </ListItemText>
                        <DeleteIcon onClick={() => deleteEvent(eventi)} />
                    </ListItemButton>
                </ListItem>
            ))
            }

        </List>
    );
}


export default EventList;