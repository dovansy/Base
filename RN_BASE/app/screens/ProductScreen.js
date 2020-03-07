import React, { Component } from 'react'
import { 
    View, Text, ActivityIndicator, 
    StyleSheet, ScrollView,
    ImageBackground, TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import DaiiChiHeader from '@app/components/DaiiChiHeader'
import { requestProduct } from '@action';
import NavigationUtil from '@app/navigation/NavigationUtil';
import { SCREEN_ROUTER } from '@app/constants/Constant';

class ProductScreen extends Component {

    async componentDidMount() {
        this.props.requestProduct();
    }

    render() {
        const { productState } = this.props
        if (productState.isLoading)
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
        if (productState.error)
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
            <View>
                <DaiiChiHeader
                    title="Sản phẩm"
                />
                <ScrollView>
                    {/* {this._listCategoryBlock()} */}
                    {productState.data.data.map(item => {
                        return this._categoryItem(item)
                    })}
                </ScrollView>
            </View>
        )
    }
    
    _categoryItem(item) {
        return (
            <View style={styles.block_category_main}>
                <ImageBackground source={{
                    uri: item.image
                }} style={styles.image_category} />
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity
                            onPress={() => {
                               NavigationUtil.navigate(SCREEN_ROUTER.LIST_PRODUCT)
                            }}>
                            <View style={styles.block_name_category}>
                                <Text style={styles.txt_name_category}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.txt_descreption_category}>{item.description}</Text>
                        </View>
                    </View>
                </View>
            </View>)
    }

}

const mapStateToProps = (state) => ({
    productState: state.productReducer,
})

const mapDispatchToProps = {
    requestProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen)


const styles = StyleSheet.create({
    block_name_category: {
        borderColor: 'white',
        borderWidth: 1.5,
        marginTop: 71,
        marginLeft: 24,
        width: 180,
        height: 39,
        paddingVertical: 5
    },
    txt_descreption_category: {
        marginLeft: 24,
        marginTop: 12,
        fontSize: 12,
        fontFamily: 'Roboto',
        color: 'white'
    },
    txt_name_category: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: 'white',
        textAlign: 'center'
    },
    image_category: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    block_category_main: {
        marginTop: 4,
        marginBottom: 2,
        width: '100%',
        height: 195,
    },
})