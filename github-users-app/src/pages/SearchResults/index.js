import React from 'react'
import useUsers from '../../hooks/useUsers'
import ListOfUsers from '../../components/ListOfUsers'
import SearchBar from '../../components/SearchBar'
import Typography from '@material-ui/core/Typography'
import Logo from '../../components/Logo'
import PageLoader from '../../components/PageLoader'

const SearchResults = ({ params: { keyword } }) => {
  const { loading, users } = useUsers({ keyword })

  return (
    <div className="container">
      <Logo />
      <SearchBar />

      <Typography gutterBottom variant="h6" component="h2">
        Lista de usuarios
      </Typography>
      {loading ? <PageLoader /> : <ListOfUsers users={users} />}
    </div>
  )
}

export default SearchResults
