import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import { useLocation } from 'wouter'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '50%',
    margin: '100px auto',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

const SearchBar = () => {
  const classes = useStyles()
  const [keyword, setKeyword] = useState('')
  const [path, setPath] = useLocation()

  const handleSubmit = e => {
    e.preventDefault()
    //We are going to go another path
    setPath(`/search/${keyword}`)
  }
  const handleChange = e => {
    setKeyword(e.target.value)
  }

  return (
    <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
      <InputBase
        className={classes.input}
        value={keyword}
        onChange={handleChange}
        placeholder="Buscar un usuario"
        inputProps={{ 'aria-label': 'Buscar un usuario' }}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <i className="fas fa-search"></i>
      </IconButton>
    </Paper>
  )
}

export default SearchBar
