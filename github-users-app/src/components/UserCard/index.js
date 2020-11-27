import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'wouter'

const useStyles = makeStyles({
  media: {
    height: 140,
  },
})

const UserCard = ({ id, login, avatar_url }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Link to={`/user/${login}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={avatar_url}
            title={login}
          />
          <CardContent>
            <Typography variant="body1" component="h3">
              <i className="fas fa-id-badge"></i>
              {id}
            </Typography>
            <Typography variant="subtitle1" component="h4">
              <i className="fab fa-github"></i>
              {login}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

export default UserCard
