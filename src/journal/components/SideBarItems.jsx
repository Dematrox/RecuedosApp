import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";


export const SideBarItems = ({title = '', body = '', id, date , imageUrls = []}) => {

    const dispatch = useDispatch();
    const selectNote = () => {
        dispatch(setActiveNote({title, body, id, date, imageUrls}))
    }

    const newTitle = useMemo( () => {
        return title.length > 17 ? title.substring(0, 17) + '...' : title; 
    })
    const newBody = useMemo( () => {
        return body.length > 29 ? body.substring(0, 29) + '...' : body; 
    })

  return (
    <ListItem disablePadding> 
        <ListItemButton onClick={selectNote}>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ newTitle } />
                <ListItemText secondary={ newBody } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
