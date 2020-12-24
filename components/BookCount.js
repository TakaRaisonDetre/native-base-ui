

import React, { Component } from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'

const BookCount =({title, count })=>(
        <View style={{flex:1, alignItems:'center' , justifyContent:'center'}}>
           <Text style={{fontSize:18}}>{title}</Text>
           <Text>{count}</Text>
         </View>
)
export default BookCount


BookCount.propTypes ={
    count:PropTypes.number.isRequired,
    title:PropTypes.string
}

BookCount.defaultProps = {
    title:'Title'
}