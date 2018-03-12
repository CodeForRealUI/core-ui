import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Spinner from 'src/shared/Spinner';
import { Paper, TextField, Grid, Checkbox, FormGroup, FormControlLabel } from 'material-ui';
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className="sign-in-container">
        <Paper zDepth={1} className="sign-in-box">
          <h1>Sign In</h1>
          <FormGroup row>
            <TextField id="email" fullWidth label="Email"/>
          </FormGroup>
          <FormGroup row>
            <TextField id="password" type="password" fullWidth label="Password"/>
          </FormGroup>
          <FormGroup row>
            <FormControlLabel
              label="Remember me"
              control={
                <Checkbox color="primary" />
              }
            />
            <div><Link to="/forgot-password">Forgot your password?</Link></div>
          </FormGroup>
        </Paper>
    </div>
  );
  // return (
  //   <div className="sign-in-container">
  //       <Paper zDepth={1} className="sign-in-box">
  //         <Grid container spacing={24}>
  //           <Grid xs={12}> 
  //             <h1>Sign In</h1>
  //           </Grid>
  //           <Grid xs={12}>
  //             <TextField id="email" fullWidth label="Email"/>
  //           </Grid>
  //           <Grid xs={12}>
  //             <TextField id="password" type="password" fullWidth label="Password"/>
  //             <Grid xs={6}><Checkbox label="Remember me" color="primary"/></Grid>
  //             <Grid xs={6}>Forgot your password?</Grid>
  //           </Grid>
  //         </Grid>
  //       </Paper>
  //   </div>
  // );
}

SignIn.propTypes = {
};

export default (SignIn);
