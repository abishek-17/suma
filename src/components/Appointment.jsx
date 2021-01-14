import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {savep} from '../store/patientdata/actions'
import {connect} from "react-redux"
import { Paper } from '@material-ui/core';
class Appointment
 extends Component {
  state = {  
    pat:{firstName:"",lastName:"",phonenumber:"",email:"",Stime:"07:30",Etime:"07:30",Cheifcomplaint:""}
  }
  handler=()=>{
    this.props.savep(this.state.pat)
  }
  handledata=({target})=>{
    console.log(target.value,target.name)
    this.setState({[target.name]:target.value})
  }
  render() { 
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Typography component="h1" variant="h5">
          Fill The Details
        </Typography>
        <form className="form" noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                fullWidth
                id="firstName"
                label="First Name"
                value ={this.state.pat.firstName}
                onChange={this.handledata}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value ={this.state.pat.lastName}
                onChange={this.handledata}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="phonenumber"
                label="Phone Number"
                name="phonenumber"
                autoComplete="phonenumber"
                value ={this.state.pat.phonenumber}
                onChange={this.handledata}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value ={this.state.pat.email}
                onChange={this.handledata}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                 id="time"
                 label="Start Time"
                 type="time"
                 name="Stime"
                 defaultValue="07:30"
               // className={classes.textField}
                InputLabelProps={{shrink: true,}}
                inputProps={{step: 300,}}
                value ={this.state.pat.Stime}
                onChange={this.handledata}
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                 id="time"
                 label="End time"
                 type="time"
                 name="Etime"
                 defaultValue="07:30"
                //className={classes.textField}
                InputLabelProps={{shrink: true,}}
                inputProps={{step: 300,}}
                value ={this.state.pat.Etime}
                onChange={this.handledata}
            />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="Cheifcomplaint"
                label="Cheif complaint"
                name="Cheifcomplaint"
                autoComplete="Cheifcomplaint"
                value ={this.state.pat.Cheifcomplaint}
                onChange={this.handledata}
              />
            </Grid>
          </Grid>
          <Button
            onClick={this.handler}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submit"
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );;
  }
}
const mapStateToProps = (state) => {
  const { data} = state;
  return { data };
};


const mapDispatchToProps = (dispatch) => ({
  savep: (data) => dispatch(savep(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
