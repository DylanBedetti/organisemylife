import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked'
import { green } from '@material-ui/core/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { connect } from 'react-redux'
import { Fade } from '@material-ui/core'
import moment from 'moment'
import ItemPopover from './ItemPopover'
import ItemDueDate from './ItemDueDate'
import { editListItem } from '../../actions'

const useStyles = makeStyles(() => ({
  checkedButton: {
    color: green[500]
  }
}))

const IndividualListItem = (props) => {
  const {
    text, complete, listId, due, editListItem
  } = props
  const classes = useStyles()

  return (
    <Fade in={!complete} timeout={1000}>
      <ListItem role={undefined} dense>
        <ListItemIcon
          onClick={() => editListItem(listId, {
            complete: !complete,
            datecomplete: moment().unix()
          })}
        >
          <Checkbox
            edge='start'
            checked={complete}
            tabIndex={-1}
            disableRipple
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={
              <RadioButtonCheckedIcon className={classes.checkedButton} />
            }
          />
        </ListItemIcon>
        <ListItemText primary={text} secondary={<ItemDueDate due={due} />} />
        <ListItemSecondaryAction>
          <ItemPopover listId={listId}>
            <IconButton edge='end'>
              <MoreVertIcon />
            </IconButton>
          </ItemPopover>
        </ListItemSecondaryAction>
      </ListItem>
    </Fade>
  )
}

export default connect(null, { editListItem })(IndividualListItem)
