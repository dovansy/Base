import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import NavigationUtil from '../../navigation/NavigationUtil';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '@app/constants/Theme';
import reactotron from '@app/debug/ReactotronConfig';
import { requestLogin } from '@api'
import { LOGIN_TYPE, SCREEN_ROUTER } from '@app/constants/Constant';
import R from '@app/assets/R';
import async from '@react-native-community/async-storage'
import { connect } from 'react-redux'
import { userNameChange, passWordChange, loginSucces } from '@action'
import AsyncStorage from '@react-native-community/async-storage';


class LoginScreen extends Component {

    state = {
        username: '0123456789',
        password: '0123456789'
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TextInput style={style.txtInput}
                    placeholder={R.strings.account}
                    value={this.state.username}
                    onChangeText={(inputText) => {
                        this.setState({
                            ...this.state,
                            username: inputText
                        })
                    }}>
                </TextInput>
                <TextInput style={style.txtInput}
                    secureTextEntry={true}
                    value={this.state.password}
                    placeholder={R.strings.password}
                    onChangeText={(inputText) => {
                        this.setState({
                            ...this.state,
                            password: inputText
                        })
                    }}>
                </TextInput>
                <TouchableOpacity
                    onPress={async () => {
                        try {
                            //this.props.login()
                            res = await requestLogin({
                                value: this.props.userState.username,
                                password: this.props.userState.password,
                                type: LOGIN_TYPE.USERNAME
                            })
                            await AsyncStorage.setItem('token', res.data.token)
                            this.props.loginSucces(res.data)
                            NavigationUtil.navigate(SCREEN_ROUTER.MAIN)

                        } catch (error) {

                        }
                    }}>
                    <Text>
                        Đăng Nhập
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

// dung reducer nao  thi lien ket voi thang day ( ten nam trong file index, thu muc reducer)
const mapStateToProps = (state) => ({
    userState: state.userReducer
})
// dung action nao thi import o tren va khai bao o day
// ten action trong file index , thu muc action
const mapDispatchToProps = {
    userNameChange, passWordChange, loginSucces
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


const style = StyleSheet.create({
    txtInput: {
        width: '90%',
        height: 50,
        backgroundColor: 'gray',
        marginTop: 20
    }
})













/* <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}}>

    <TextInput style={style.txtInput}
        placeholder={R.strings.account}
        value={this.props.userState.username}
        onChangeText={(inputText) => {
            this.setState({
                ...this.state,
                username: inputText
            })
        }}>
    </TextInput>
    <TextInput style={style.txtInput}
        secureTextEntry={true}
        value={this.state.password}
        placeholder={R.strings.password}
        onChangeText={(inputText) => {
            this.setState({
                ...this.state,
                password: inputText
            })
        }}>
    </TextInput>

    <TouchableOpacity
        onPress={async () => {
            reactotron.log(this.state.username, this.state.password)
            try {
                res = await requestLogin({
                    value: this.state.username,
                    password: this.state.password,
                    type: LOGIN_TYPE.USERNAME
                })
                NavigationUtil.navigate(SCREEN_ROUTER.MAIN)
            } catch (error) {
                alert(JSON.stringify(error))
            }
        }}>
        <Text>
            Đăng Nhập
        </Text>
    </TouchableOpacity>
</View> */
