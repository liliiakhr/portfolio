import React from 'react';
import { useTheme, makeStyles } from "@material-ui/core/styles";
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
import Background from '../assets/Image.png';
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
    },
    tablet: {
        maxWidth: "450px",
        [theme.breakpoints.down('xs')]: {
            maxWidth: "300px"
        },
    }
  }));

function Main() {
    const classes = useStyles();
    const theme = useTheme();

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
        color: "#FEEFEC",
		minHeight: "100vh",
		display: "flex",
        flexDirection: "column",
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
                    <h1>About</h1>
                    <p>This is about me!</p> 
                    <hr style={{ width:"100px"}}/>
                    <h2>Tech skills</h2>
                    <ul>
                        <li> <i class="fab fa-react"></i> React</li>
                        <li>Javascript</li> 
                        <li>NodeJS</li>
                        <li>HTML5</li>
                        <li>Canvas</li>
                        <li>CSS</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Express</li>
                        <li>Axios</li>
                        <li>SQL</li>
                        <li>Tableau</li>
                        <li>Bootstrap</li>
                        <li>Jira</li>
                        <li>Agile</li>
                        <li>Pair Programming</li> 
                        
                    </ul>
                    
                    <h2>Soft skills</h2>
                    <ul>
                        <li>Team work</li>
                        <li>Attention to detail</li>
                        <li>Eagerness to learn</li>
                        <li>Great communication</li>
                        <li>Teamwork & Independenc</li>
                    </ul>
                    <hr style={{ width:"100px"}}/>
                    <h2>Languages</h2>
                    <ul>
                        <li>English (fluent)</li>
                        <li>Spanish (fluent)</li>
                        <li>Russian (fluent)</li>
                        <li>Ukrainian (fluent)</li>
                        <li>German (intermediate)</li>
                        <li>Portuguese (intermediate)</li>
                        <li>Polish (intermediate)</li>
                    </ul>
                    <hr style={{ width:"100px"}}/>
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
                        <div ><img className={classes.tablet} src={kolabImg}></img></div>
                        <ProjectCard name="Kolab" description="Full-stack responsive social media app, where people can join groups, create posts,
                        comment, like&dislike them, chat and video chat." 
                        stack="React | NodeJs | MongoDB | HTML & CSS | SocketIO | MaterialUI" 
                        image={kolabImg} link="https://kolab-app.herokuapp.com/" repo="https://github.com/liliiakhr/kolab-client" 
                        repoServer="https://github.com/liliiakhr/kolab-server"/>     
                </Grid>
                <Grid className={classes.grid} item xs={12} md={6} lg={6} justifyContent="center" alignItems="center"  >
                        <div><img className={classes.tablet} src={codeScapeImg}></img></div>
                        <ProjectCard name="Codescape" description="Full-stack responsive web app that allows users to save snippets of code for future reference.
                        CodeScape enables users to share snippets, like or dislike them, find friends and explore the work of other developers." 
                        stack="NodeJs | ExpressJs | MongoDB | HTML | CSS | Axios" 
                        image={codeScapeImg} link="https://code-scape.herokuapp.com/" repo="https://github.com/Kalande/CodeScape" />
                </Grid>
                <Grid className={classes.grid}  item xs={12} md={6} lg={6} justifyContent="center" alignItems="center"  >
                <div><img className={classes.tablet} src={game}></img></div>
                        <ProjectCard name="Into the Wild" 
                        description="Interactive JavaScript game  developed with Canvas 2D. Character is animated using Sprites.
                        Users controls the moves of a character, needs to collect points and avoid collusion with obstacles. 
                        Game has 2 levels." 
                        stack= "HTML | CSS | Canvas | JavaScript" 
                        image={game} link="https://liliiakhr.github.io/into-the-wild/" repo="https://github.com/liliiakhr/into-the-wild" 
                        />
                </Grid>
                <Grid className={classes.grid}  item xs={12} md={6} lg={6} justifyContent="center" alignItems="center"  >                  
                <div><img className={classes.tablet} src={weather}></img></div>
                        <ProjectCard name="Weather App" description="Weather app, created using public API to retrieve real-time weather data." 
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
