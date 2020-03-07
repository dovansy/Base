import React, { Component } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    ActivityIndicator
} from 'react-native'
import NavigationUtil from '../../navigation/NavigationUtil'
import i18 from '@i18';
import AsyncStorage from '@react-native-community/async-storage';
import { SCREEN_ROUTER } from '@app/constants/Constant';
// import { connect } from 'react-redux'

export default class AuthLoadingScreen extends Component {

    async componentDidMount() {
        token = await AsyncStorage.getItem('token')
        if (token != null) {
            NavigationUtil.navigate(SCREEN_ROUTER.HOME);
        } else {
            NavigationUtil.navigate(SCREEN_ROUTER.LOGIN);
        }

    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View>
                    <ActivityIndicator />
                    <Text>{i18.t('user')}</Text>
                </View>
            </SafeAreaView>
        )
    }



}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

// export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
