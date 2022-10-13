import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default function App() {
  const [number, setNumber] = useState("");
  const addNumber = (n) =>{
    if(number=="") setNumber(n);
    else setNumber(number + n);
  }
  
  function calculate(){
    let result = "";
     try{
      result = eval(number.replace('^','**'))
       if(!isFinite(result) || isNaN(result)){
         return "Error"
       }
   } catch(error){
       return "Error"
   }
   return String(result);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topCont}>
        <Text style = {styles.resultText}>{number}</Text>
      </View>
      <View style={styles.bottomCont}>
      <View style={styles.bottomRow}>
        <TouchableOpacity
          style = {styles.buttonCont}
          onPress = {() => setNumber(number.substring(0, number.length - 1))}
        >
            <Text style = {styles.redButtonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.buttonCont}
          onPress={() => addNumber("^")}
         
        >
            <Text style = {styles.functionTextColor}>xʸ</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.buttonCont}
          onPress = {() => setNumber(eval(number/100))}
        >
            <Text style = {styles.functionTextColor}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.buttonCont}
          onPress = {() => addNumber("/")}
        >
            <Text style = {styles.functionTextColor}>/</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.bottomRow}>
          <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => addNumber('7')}
           
        >
            <Text style = {styles.numberTextColor}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.buttonCont}
          onPress={() => addNumber("8")}
          
        >
            <Text style = {styles.numberTextColor}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.buttonCont}
          onPress={() => addNumber("9")}
         
        >
            <Text style = {styles.numberTextColor}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style = {styles.buttonCont}
          onPress={() => addNumber("*")}

          
        >
            <Text style = {styles.functionTextColor}>x</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.bottomRow}>
          <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => addNumber("4")}
            
        >
            <Text style = {styles.numberTextColor}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => addNumber("5")}
            
        >
            <Text style = {styles.numberTextColor}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => addNumber("6")}
            
        >
            <Text style = {styles.numberTextColor}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => addNumber("-")}
            
        >
            <Text style = {styles.functionTextColor}>-</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.bottomRow}>
        <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => addNumber("1")}
            
        >
            <Text style = {styles.numberTextColor}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => addNumber("2")}
            
        >
            <Text style = {styles.numberTextColor}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => addNumber("3")}
            
        >
            <Text style = {styles.numberTextColor}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => addNumber("+")}
            
        >
            <Text style = {styles.functionTextColor}>+</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.bottomRow}>
        <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => setNumber("")}
            
        >
            <Text style = {styles.redButtonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.buttonCont}
            onPress={() => addNumber("0")}
            
        >
            <Text style = {styles.numberTextColor}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.buttonCont}
            onPress = {() => addNumber(".")}
      
        >
            <Text style = {styles.functionTextColor}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.buttonCont}
            
            onPress = {() => setNumber(calculate(number))}
            
        >
            <Text style = {styles.greenButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}




const screen = Dimensions.get("window");// i left these here so I could make them circle buttons at anytime
const buttonWidth = screen.width / 4;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomCont: {
    width: '100%',
    flex: 2.5,
    backgroundColor: 'black',
  },
  topCont: {
    backgroundColor: 'black',
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
    padding: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  buttonCont: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',

  },
  numberTextColor: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    //fontFamily: 'Helvetica-Light',
  },
  functionTextColor: {
    color: '#0096FF',
    fontSize: 23,
    fontWeight: 'bold',
  },
  redButtonText: {
    color: '#FF0000',
    fontSize: 23,
    fontWeight: 'bold',
  },
  greenButtonText: {
    color: '#00FF00',
    fontSize: 23,
    fontWeight: 'bold',
  },
  resultText: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
  },

});
