import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link,Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 445,
    justifyContent: "center",
    margin: "20px auto",
    [theme.breakpoints.down('xs')]: {
        maxWidth: "300px"
    },

  },
  media: {
    height: "240px",
  },
}));

function ProjectCard({name, description, stack, image, link, repo, repoServer}) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    {/* <CardMedia
                    className={classes.media}
                    image={image}
                    title="App image"
                    /> */}
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p">
                        Tech stack: {stack}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <Link href={link} target='_blank' >Link  </Link>
                    </Button>
                    <Button size="small" color="primary">
                        <Link href={repo} target='_blank' >Repo  </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ProjectCard
