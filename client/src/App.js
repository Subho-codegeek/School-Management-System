import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent.js';
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import './App.css';
import useStyles from './styles.js';

function App() {

  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} varaint='h2' align='center'>
            Student Create & Show
          </Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container>
              <Grid items xs={12} sm={7}>
                <AppBar className={classes.appBar} position='static' color='inherit'>
                  <Student />
                </AppBar>
              </Grid>
              <Grid items xs={12} sm={4}>
                <AppBar className={classes.appBar} position='static' color='inherit'>
                  <Create />
                </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
