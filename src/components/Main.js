import React from 'react';
import Animation from './Animation';
import girl from '../assets/girl.json';
import Typist from 'react-typist';
import kolabImg from '../assets/kolab.png';
import codeScapeImg from '../assets/codescape.png';
import game from '../assets/game.png';
import weather from '../assets/weather.png';

import {
	Link,
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	MenuItem,
	Menu,
	Avatar,
	Grid,
	Paper,
	Card,
	CardHeader,
	CardContent,
	CardMedia,
	Button,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Background from '../assets/Image.png';
import MenuIcon from '@material-ui/icons/Menu';
import ProjectCard from './ProjectCard';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    link: {
        color:"black",
        textDecoration:"none"
    },
    grid: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
  }));

function Main() {
    const classes = useStyles();



    const welcomeSection = {
		backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
    const animationSection = {
		backgroundColor: "#52505E",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
    const aboutSection = {
		backgroundColor: "#52505E",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};
    const projectsSection = {
		backgroundColor: "#FDE7E1",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
        padding: "20px",
	};
    const contactSection = {
		backgroundColor: "#FDE7E1",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};





    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: '#94B4B2', boxShadow: 'none'}}>
                <Toolbar>
                    <Button>
                        <Link className={classes.link} href="#about">
                            ABOUT 
                        </Link>
                    </Button>
                    <Button>
                        <Link className={classes.link} href="#projects">
                            PROJECTS
                        </Link>
                    </Button>
                    <Button>
                        <Link className={classes.link} href="#contact">
                            CONTACT
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>

            <Grid className="welcomeSection" style={welcomeSection}>
                <Typist>
                    Hi!
                    <br/>
                    My name is Liliia Khrystiuk
                    <br/>
                    I am a Full-Stack Developer
                    <br/>
                    Welcome to my page!
                </Typist>
            </Grid>





            <Grid container id="about">
                <Grid item xs={12} sm={6} className="aboutSection" style={aboutSection} >
                    Hi!
                    <br/>
                    This is about me!
                </Grid>
                <Grid item xs={12} sm={6} className="animationSection" style={animationSection} >
                    <div>
                        <Animation width={300} height={300} animation={girl}/>
                    </div>
                </Grid>
            </Grid>


{/* name, description, stack, image, link, repo, repoServer */}

            <Grid spacing={2} container className="projectsSection" style={projectsSection} id="projects" >

                <Grid className={classes.grid} item xs={12} md={6} lg={6} justifyContent="center" alignItems="center" >
                        <div><img src={kolabImg}></img></div>
                        <ProjectCard name="Kolab" description="Full-stack app" 
                        stack="React | NodeJs | MongoDB | HTML & CSS | SocketIO | MaterialUI" 
                        image={kolabImg} link="https://kolab-app.herokuapp.com/" repo="https://github.com/liliiakhr/kolab-client" 
                        repoServer="https://github.com/liliiakhr/kolab-server"/>     
                </Grid>
                <Grid className={classes.grid} item xs={12} md={6} lg={6} justifyContent="center" alignItems="center"  >
                        <div><img src={codeScapeImg}></img></div>
                        <ProjectCard name="Codescape" description="Full-stack app" 
                        stack="NodeJs | ExpressJs | MongoDB | HTML | CSS | Axios" 
                        image={codeScapeImg} link="https://code-scape.herokuapp.com/" repo="https://github.com/Kalande/CodeScape" />
                </Grid>
                <Grid className={classes.grid}  item xs={12} md={6} lg={6} justifyContent="center" alignItems="center"  >
                        <ProjectCard name="Into the Wild" 
                        description="Developed an interactive JavaScript game after first 3 weeks of the bootcamp with Canvas 2D. 
                        Character is animated using Sprites.
                        Users controls the moves of a character, needs to collect points and avoid collusion with obstacles. 
                        Game has 2 levels." 
                        stack= "HTML | CSS | Canvas | JavaScript" 
                        image={game} link="https://liliiakhr.github.io/into-the-wild/" repo="https://github.com/liliiakhr/into-the-wild" 
                        />
                </Grid>
                <Grid className={classes.grid}  item xs={12} md={6} lg={6} justifyContent="center" alignItems="center"  >                  
                        <ProjectCard name="Weather App" description="Full-stack app" 
                        stack="HTML | CSS | JavaScript | Axios" 
                        image={weather} link="https://gracious-heyrovsky-c7ef31.netlify.app/" repo="https://github.com/liliiakhr/weather-app" 
                        /> 
                </Grid>

            </Grid>



            {/* <Grid className="contactSection" style={contactSection} id="contact" >
                Contacts
                <div>
                </div>
            </Grid> */}
        </div>

    )
}

export default Main
