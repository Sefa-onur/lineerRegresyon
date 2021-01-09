import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class App extends Component{
  state = {
    beta1:'',
    beta2:'',
    rkare:'',
    hatakareleri:''
  }
  onclick = (x,y) => {

    let xortalama = 0;
     x.map(item => {
        xortalama += Number(item)/x.length
     })

     let yortalama = 0;
     y.map(item => {
       yortalama += Number(item)/y.length
     })

     let xortfark = []
     x.filter((item) => {
      xortfark.push(item-xortalama)
     })

     let yortfark = []
     y.filter((item) => {
       yortfark.push(item - yortalama)
     })

     let xyçarpım = []
     for( var i = 0 ; i < x.length ; i ++ ) {
       xyçarpım.push(xortfark[i]*yortfark[i])
     }

     let xyçarpımtoplam = 0
     xyçarpım.map(item => {
      xyçarpımtoplam += Number(item)
     })

     let kare = []
     xortfark.map((item) => {
       kare.push(item*item)
     })

     let karetoplam = 0
     kare.map(item => {
       karetoplam += Number(item)
     })

     // beta2 değeri
     let beta2 = xyçarpımtoplam/karetoplam
     // beta1 değeri
     let beta1 = yortalama-beta2*xortalama
     
    let ykare = []
    y.map(item => {
      ykare.push(item*item)
    })

    let ykaretoplam = 0
    ykare.map(item => {
      ykaretoplam += Number(item)
    })

    // rkare değeri
    let toplamx = 0

    x.map(item => {
      toplamx += item
    })

    let toplamy = 0
    y.map(item => {
      toplamy += item
    })

    let rkare = beta1*beta1*(karetoplam-toplamx*toplamx/x.length)/ykaretoplam-toplamy*toplamy/x.length

    // hatakareleri değeri
    let hatakareleri = 0
    for(var i = 0; i < x.length; i++) {
      hatakareleri += (y[i]-beta1-beta2*x[i])*(y[i]-beta1-beta2*x[i])
    }

    this.setState({
      beta1:beta1.toFixed(2),
      beta2:beta2.toFixed(2),
      rkare:rkare.toFixed(2),
      hatakareleri:hatakareleri.toFixed(2)
    })
  }


  render() {
    const x = []
    const y = []
    return(
      <View style = {styles.View} >
        <View style = {styles.Header} >
          <Text style = {styles.HeaderText} >
            Lineer Regresyon
          </Text>
        </View>
        <Text>Bağımlı Değişkenler</Text>
        <View style = {styles.SubView} >
          <TextInput
          placeholder = '1.değer'
          style = {styles.Inputs}
          onChangeText = {text => x[0] = text}
          value = {x[0]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '2.değer'
          style = {styles.Inputs}
          onChangeText = {text => x[1] = text}
          value = {x[1]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '3.değer'
          style = {styles.Inputs}
          onChangeText = {text => x[2] = text}
          value = {x[2]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '4.değer'
          style = {styles.Inputs}
          onChangeText = {text => x[3] = text}
          value = {x[3]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '5.değer'
          style = {styles.Inputs}
          onChangeText = {text => x[4] = text}
          value = {x[4]}
          keyboardType = 'numeric'
          />
        </View>
        <View style = {styles.SubView} >
        <TextInput
          placeholder = '6.değer'
          style = {styles.Inputs}
          onChangeText = {text => x[5] = text}
          value = {x[5]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '7.değer'
          style = {styles.Inputs}
          onChangeText = {text => x[6] = text}
          value = {x[6]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '8.değer'
          style = {styles.Inputs}
          onChangeText = {text => x[7] = text}
          value = {x[7]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '9.değer'
          style = {styles.Inputs}
          onChangeText = {text => x[8] = text}
          value = {x[8]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '10.değer'
          style = {styles.Inputs}
          onChangeText = {text => x[9] = text}
          value = {x[9]}
          keyboardType = 'numeric'
          />
        </View>
        <Text>Bağımsız Değişkenler</Text>
        <View style = {styles.SubView} >
          <TextInput
          placeholder = '1.değer'
          style = {styles.Inputs}
          onChangeText = {text => y[0] = text}
          value = {y[0]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '2.değer'
          style = {styles.Inputs}
          onChangeText = {text => y[1] = text}
          value = {y[1]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '3.değer'
          style = {styles.Inputs}
          onChangeText = {text => y[2] = text}
          value = {y[2]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '4.değer'
          style = {styles.Inputs}
          onChangeText = {text => y[3] = text}
          value = {y[3]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '5.değer'
          style = {styles.Inputs}
          onChangeText = {text => y[4] = text}
          value = {y[4]}
          keyboardType = 'numeric'
          />
        </View>
        <View style = {styles.SubView} >
        <TextInput
          placeholder = '6.değer'
          style = {styles.Inputs}
          onChangeText = {text => y[5] = text}
          value = {y[5]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '7.değer'
          style = {styles.Inputs}
          onChangeText = {text => y[6] = text}
          value = {y[6]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '8.değer'
          style = {styles.Inputs}
          onChangeText = {text => y[7] = text}
          value = {y[7]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '9.değer'
          style = {styles.Inputs}
          onChangeText = {text => y[8] = text}
          value = {y[8]}
          keyboardType = 'numeric'
          />
          <TextInput
          placeholder = '10.değer'
          style = {styles.Inputs}
          onChangeText = {text => y[9] = text}
          value = {y[9]}
          keyboardType = 'numeric'
          />
        </View>
        <View style = {styles.ButtonView} >
        <TouchableOpacity onPress = {() => this.onclick(x,y) } style = {styles.Button} >
          <Text style = {styles.ButtonText} >Değerleri Hesapla</Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.Values} >
           <Text style = {styles.Texts} >
             Beta1:{this.state.beta1}
           </Text>
           <Text style = {styles.Texts}>
             Beta2:{this.state.beta2}
           </Text>
           <Text style = {styles.Texts}>
             Rkare:{this.state.rkare}
           </Text>
           <Text style = {styles.Texts}>
             Hata:{this.state.hatakareleri}
           </Text>
        </View>  
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  View:{
    flex:1
  },
  Header:{
    height:45,
    justifyContent:'center',
    alignItems:'center',
    elevation:5,
    backgroundColor:'white'
  },
  HeaderText:{
    fontWeight:'bold',
    fontSize:18,
    fontStyle:'italic'
  },
  Inputs:{
    borderWidth:1,
    width:60,
    margin:5,
    borderRadius:5,
  },
  SubView:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  ButtonView:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    margin:7,
    borderRadius:5
  },
  Button:{
    height:38,
    justifyContent:'center',
    alignItems:'center',
  },
  ButtonText:{
    fontStyle:'italic',
    fontSize:15
  },
  Values:{
    borderWidth:1,
    flexDirection:'row',
    height:38,
    alignItems:'center',
    margin:7,
    borderRadius:5
  },
  Texts:{
    flex:1
  }
})