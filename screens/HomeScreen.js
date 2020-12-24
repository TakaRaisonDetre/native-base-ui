import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, FlatList } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import BookCount from '../components/BookCount'
import CustomActionButton from '../components/CustomActionButton'
import colors from '../assets/colors'

class  HomeScreen extends React.Component {

  constructor(){
    super();
    this.state={
      totalCount:0,
      readingCount:0,
      readCount: 0,
      isAddNewBookVisible:false,
      textInputData:'',
      books:[]
    };
  }

  showAddNewBook =()=>{

    this.setState({isAddNewBookVisible:true})
  }

  hideAddNewBook =()=>{
    this.setState({isAddNewBookVisible:false})
  }
  
    addBook=(book)=>{
      this.setState(
        (state, props)=>({
        books:[...state.books, book],
        totalCount: state.totalCount +1,
        readingCount:state.readingCount+1 
      }), ()=>{
        console.log(this.state.books)
      })
   }

   markAsRead =(selectedBook, index)=>{
    let newList = this.state.books.filter(book=>book!==selectedBook)
    
    this.setState(prevState =>({
      books: newList,
      readingCount : prevState.readingCount -1 ,
      readCount: prevState.readCount +1 
    }))
}

   renderItem=(item, index)=>(
     <View style={styles.listItemContainer}>
       <View style={styles.listItemTitleContainer}><Text>{item}</Text></View>
      
        <CustomActionButton 
        style={styles.markAsReadButton}
        onPress={()=>this.markAsRead(item, index)}>
        <Text style={styles.markAsReadButtonText}>Mark as Read</Text>
               
        </CustomActionButton>
   
     </View>
   )


 render(){

  return (
    <View style={styles.container}>
      <SafeAreaView />
           <View style={styles.header}>
             <Text　
             style={styles.headerTitle}
             >応募者アプリ</Text>
           </View>
          
           <View style={styles.container}>
            
            {this.state.isAddNewBookVisible && (
                <View style={styles.textInputContainer}>
                <TextInput
                onChangeText = {text=>this.setState({textInputData:text})}
                style={styles.textInput}
                placeholder='Enter Book Name'
                placeholderTextColor='grey'
                ></TextInput>

                 <CustomActionButton 
                 onPress={()=>this.addBook(this.state.textInputData)}
                 style={styles.checkmarkButton}>
                 <Ionicons name='ios-checkmark' color="white" size={30}/>
                 </CustomActionButton>

                 <CustomActionButton 
                  onPress={this.hideAddNewBook}
                 style={{backgroundColor: '#deada5'}}>
                 <Ionicons name='ios-close' color="white" size={30}/>
                 </CustomActionButton>

            
                  </View>
                 
            )} 
        
           <FlatList
           data={this.state.books}
           renderItem ={({item}, index)=>this.renderItem(item, index)}
           keyExtractor={(item, index)=> index.toString()}
           ListEmptyComponent={
             <View style={styles.listEmptyComponent}>
             <Text style={styles.listEmptyComponentText}>Not Reading Any books</Text>
             </View>
           }
           />
          
           <CustomActionButton
           position='right'
           style={styles.addNewBookButton}
           onPress={this.showAddNewBook}
           >
         <Text style={styles.addNewBookButtonText}>+</Text>
           </CustomActionButton>

  
           </View>
         
           <View style={styles.footer}>

              <BookCount  title="Total" count={this.state.totalCount}/>
              <BookCount  title="Reading" count={this.state.readingCount}/>
              <BookCount  title="Read" count={this.state.readCount}/>
           
            
           </View>
          
    <SafeAreaView />
    </View>
       
     );
 }
  
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header : {
    height:70,
    borderBottomWidth:0.5,
    borderBottomColor: colors.borderColor,
    alignItems:'center',
    justifyContent:'center'
  },
  headerTitle:{
    fontSize:24
  },
  textInputContainer:{
    height:50,
    flexDirection:'row'
  }, 
  textInput:{
    flex:1,
    backgroundColor:colors.bgTextInput,
    paddingLeft:5
  },
  checkmarkButton: {
    backgroundColor: colors.bgSuccess,
  },
  listItemContainer:{
    height:50,
    flexDirection:'row'
  },
  listItemTitleContainer:{
    flex:1,
    justifyContent:'center',
    paddingLeft:5
  },
  listEmptyComponent:{
    marginTop:50,
    alignItems:'center'
  },
  listEmptyComponentText :{
    fontWeight:'bold'
  },
  markAsReadButton:{
    width:100,
    backgroundColor:colors.bgSuccess,
  },
  markAsReadButtonText:{
    fontWeight:'bold',
    color:'white'
  },
  addNewBookButton: {
    backgroundColor: colors.bgPrimary, 
    borderRadius:25
  },
  addNewBookButtonText:{
    color:'white',
    fontSize:30
  },
  footer:{
    height:70,
    borderTopWidth:0.5,
    borderTopColor: colors.borderColor,
   flexDirection:'row'
  }
});
