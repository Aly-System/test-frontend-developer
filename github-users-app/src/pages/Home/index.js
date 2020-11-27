import React from 'react'
import ListOfUsers from '../../components/ListOfUsers'
import useUsers from '../../hooks/useUsers'
import Typography from '@material-ui/core/Typography'
import SearchBar from '../../components/SearchBar'
import Logo from '../../components/Logo'

const Home = () => {
  const { loading, users } = useUsers()

  return (
    <div className="container">
      <Logo />
      <SearchBar />
      <Typography gutterBottom variant="h6" component="h2">
        Ultima busqueda
      </Typography>
      <ListOfUsers users={users} />
    </div>
  )
}

export default Home
