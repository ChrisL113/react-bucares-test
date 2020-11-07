import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWord, fetchWords } from '../actions/wordsActions'
import {
  showErrorSnackbar,
  showSuccessSnackbar,
} from '../actions/notificationsActions'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))

const ListIndices = () => {
  const classes = useStyles()
  const words = useSelector(state => state.words.items)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchWords())
  }, [])

  const onDelete = (url, index) => {
    dispatch(deleteWord(url, index)).then(res => {
      if (res.success) {
        console.log(res, 'fdsjalfsajd')
        showSuccessSnackbar(res.msg)
      } else showErrorSnackbar(res.msg)
    })
  }

  return (
    <Grid item xs={12} md={6}>
      <Typography variant='h6' className={classes.title}>
        URL and words
      </Typography>
      <div className={classes.demo}>
        <List>
          {words
            ? words.map((obj, index) => (
                <ListItem key={obj.url}>
                  <ListItemText primary={obj.word} secondary={obj.url} />
                  <ListItemSecondaryAction>
                    <IconButton
                      onClick={() => {
                        onDelete(obj.url, index)
                      }}
                      edge='end'
                      aria-label='delete'
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            : null}
        </List>
      </div>
    </Grid>
  )
}
export default ListIndices
