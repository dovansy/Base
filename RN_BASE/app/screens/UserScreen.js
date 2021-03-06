import React, { Component } from 'react'
import {
    View, Text, ActivityIndicator,
    TouchableOpacity, StyleSheet,
    SafeAreaView, Image
} from 'react-native'
import { connect } from 'react-redux'
import DaiiChiHeader from '@app/components/DaiiChiHeader'
import { requestUser } from '@action'
import NavigationUtil from '@app/navigation/NavigationUtil'
import { SCREEN_ROUTER } from '@app/constants/Constant'
import R from '@R';

class UserScreen extends Component {

    componentDidMount() {
        this.props.requestUser()
    }
    render() {
        //const { userInfoState } = this.props
        return (
            <View style={styles.container}>
                <DaiiChiHeader
                    title="Tài khoản"
                />
                {this._renderBody()}
            </View>
        )
    }

    _renderBody() {
        const { userInfoState } = this.props
        if (userInfoState.isLoading)
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ActivityIndicator
                        size='large'
                        color='red'
                    />
                </View>
            )
        if (userInfoState.error)
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text>Đã có lỗi xảy ra !</Text>
                </View>
            )
        return (
            <SafeAreaView style={styles.container}>
                {/* Block User info */}
                <View style={styles.user_info}>
                    <Image style={styles.profile_ficture}
                        source={{
                            uri: userInfoState.data.data.urlAvatar
                        }}
                    />
                    <View style={styles.block_thongtin}>
                        <View style={styles.text_block_name}>
                            <Text style={styles.text_hoten}>{userInfoState.data.data.customerName}</Text>
                            <Text style={styles.text_daily}>{userInfoState.data.data.rankName}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                NavigationUtil.navigate(SCREEN_ROUTER.UPDATE_USER_INFO)
                            }}>
                            <Text style={styles.text_chinhsua}> Chỉnh sửa thông tin</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                {/* Block Content User 1 */}
                <View style={styles.content_block_1} >
                    {this._getFuncBlock("Đơn hàng", R.images.ic_donhang)}
                    {this._getFuncBlock("Cửa hàng", R.images.ic_cuahang)}
                    {this._getFuncBlock("Lịch sử giao dịch", R.images.ic_lichsu)}
                    {this._getFuncBlock("Trở thành đại lý", R.images.ic_daily)}
                    {this._getFuncBlock("Thông tin bảo hành", R.images.ic_baohanh)}
                    {this._getFuncBlock("Thông tin DaiiChi", R.images.ic_infoApp)}
                    {this._getFuncBlock("Đăng xuất", R.images.ic_dangxuat, true)}
                </View>
                {/* Block Content User 2 */}
                <View style={styles.content_block_2}>
                    <View style={styles.block_score}>
                        <Text style={styles.txt_score}>Điểm tích lũy: </Text>
                        <Text style={styles.num_score}>{userInfoState.data.data.point}</Text>
                    </View>
                    <Image style={styles.img_rank} source={R.images.ic_group} />
                </View>
            </SafeAreaView>
        )
    }

    // ham tra ve 1 view ( function block)
    // ham _ chi su dung trong component ban than, khong dung ra ngoai, local
    _getFuncBlock(title, imagePath, isLast = false) {
        return (
            <View>
                <View style={styles.content_block_func}>
                    <Image style={styles.img_func} source={imagePath} />
                    <Text style={styles.txt_func}> {title}</Text>
                    <Image style={styles.path} source={R.images.ic_path} />
                </View>
                {!isLast && <View style={styles.line}></View>}
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    userInfoState: state.userInfoReducer,
})

const mapDispatchToProps = {
    requestUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserScreen)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF'
    },
    // user info
    user_info: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    profile_ficture: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginLeft: 25,
        marginVertical: 12,
        marginRight: 11
    },
    block_thongtin: {
        flex: 1,
        justifyContent: 'center',
    },
    text_block_name: {
        width: '100%',
        flexDirection: 'row',
    },
    text_hoten: {
        flex: 1,
        fontSize: 18,
        color: '#000000',
        marginBottom: 5,
        fontFamily: 'Roboto-Medium'
    },
    text_daily: {
        textAlignVertical: "center",
        textAlign: 'center',
        backgroundColor: '#EA4335',
        marginRight: 10,
        paddingHorizontal: 9,
        paddingVertical: 3,
        fontSize: 17,
        borderRadius: 10,
        overflow: 'hidden',
        color: 'white',
        fontFamily: 'Roboto-Regular'
    },
    text_chinhsua: {
        fontSize: 14,
        color: '#707070',
        fontFamily: 'Roboto-Regular'
    },
    //block content view 1
    content_block_1: {
        flexDirection: 'column',
        marginBottom: 9,
        marginTop: 5,
        backgroundColor: 'white'
    },
    content_block_func: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 27,
        marginVertical: 12,
        alignItems: 'center'
    },
    img_func: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    },
    txt_func: {
        marginLeft: 17,
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        flex: 1
    },
    path: {
        width: 10,
        height: 18
    },
    line: {
        height: 0.5,
        marginLeft: 30,
        marginRight: 27,
        backgroundColor: '#8B8B8B'
    },
    //block content view 2
    content_block_2: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    block_score: {
        marginTop: 6,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    txt_score: {
        fontSize: 14,
        fontFamily: 'Roboto',
        color: '#EA4335'
    },
    num_score: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#EA4335'
    },
    img_rank: {
        marginTop: 18,
        marginRight: 52,
        marginLeft: 43,
        width: 298,
        height: 20,
    }
});