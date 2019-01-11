import { View } from 'react-native';
import React, { Component } from 'react';
import { InputLabel, CustomButton } from '../../components';
import { loginFormRedux } from '../../redux'
import { connect } from 'react-redux';

import styles from './styles';

class Home extends Component {

  state = {
    email: '',
    password: ''
  }

  render() {
    return (
      <View style={ styles.container }>
        <InputLabel
          label='Email'
          inputStyles={ styles.inputLabel }
          valuechange={ (text) => { 
            this.setState({email: text})         
          }}
        ></InputLabel>
        <InputLabel
          label='Password'
          inputStyles={ [styles.inputLabel, { marginVertical: 20 }] }
          valuechange={ (text) => { 
            this.setState({password: text})
          }}
        ></InputLabel>
        <CustomButton
          text='Persist'
          bgcolor='#aa8fdb'
          bordercolor='#aa8fdb'
          style={ { padding: 15 } }
          onclick={ ()=> {
            const {dispatch} = this.props;
            const {loginFormActionCreators} = loginFormRedux;
            const { saveEmail, savePassword } = loginFormActionCreators

            dispatch(saveEmail(this.state.email));
            dispatch(savePassword(this.state.password));
          }}
        ></CustomButton>
      </View>
    )
  }

}

export default connect((state) => {
  return {
    loginForm: state.loginForm
  }
})(Home);