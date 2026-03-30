import { StyleSheet, Text, View, TextInput, Pressable, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CheckBox from 'expo-checkbox';
import React, {useState} from 'react';


export default function App() {

const [nome,setNome] = useState('');
const [fone,setFone] = useState('');
const [endereco,setEndereco] = useState('');
const [email,setEmail] = useState('');
const [aceito,setAceito] = useState(true);
const [hobbie,setHobbie] = useState('');

  return (
    <View style={styles.container}>      
      <View style={styles.conteudo1}>
        <Pressable>
        <Image
            style={styles.imagem}
            source={require('./assets/img/cara.png')}
        />
        </Pressable>
      </View>
      <View style={styles.conteudo2}>
        <Text style={styles.título}>Dados Pessoais</Text>
        <Text style={styles.texto}>Nome</Text>
          <TextInput 
             style={styles.input}
             onChangeText={setNome}
             value={nome}
             placeholder='Digite aqui'
             keyboardType='numeric'
          />
          <Text
            style={styles.texto}
          >Telefone</Text>
        <TextInput 
           style={styles.input}
           onChangeText={setFone}
           value={fone}
           placeholder='Ex:(+55) 11 xxxxx-xxxx'
           keyboardType='numeric'
        />
         <Text
           style={styles.texto}
         >Endereço</Text>
          <TextInput 
             style={styles.input}
             onChangeText={setEndereco}
             value={endereco}
             placeholder='Digite aqui'
             keyboardType='numeric'
          />
           <Text
             style={styles.texto}
           >Email</Text>
          <TextInput 
             style={styles.input}
             onChangeText={setEmail}
             value={email}
             placeholder='Ex: exemplo@gmail.com'
             keyboardType='numeric'
          />
      </View>
      <View style={styles.conteudo3}>
          <Text
            style={styles.textoPicker}
          >Outras informações</Text>
          <Picker selectedValue={hobbie} onValueChange={(itemValue, itemIndex) => setHobbie(itemValue)}
          style={styles.inputPicker}>
              <Picker.Item label='Nenhum' value="Nenhum"/>
              <Picker.Item label='Leitura' value="Leitura" />
              <Picker.Item label='Artes Marciais' value="Artes Marciais" />
              <Picker.Item label='Esportes' value="Esportes"/>
              <Picker.Item label='Correr' value="Correr"/>
              <Picker.Item label='Cozinhar' value="Cozinhar"/>
              <Picker.Item label='Desenhar' value="Desenhar"/>
              <Picker.Item label='Outros' value="Outros"/>
          </Picker>
          <View style={styles.box}>
            <CheckBox value={aceito} onValueChange={setAceito}/>
            <Text
              style={styles.textoTermos}
            >Aceita os termos de serviço?</Text>
          </View>
      </View>
      <View style={styles.conteudo4}>
        <Text style={styles.textoResultados}>Nome: {nome}</Text>
        <Text style={styles.textoResultados}>Endereço: {endereco}</Text>
        <Text style={styles.textoResultados}>Telefone: {fone}</Text>
        <Text style={styles.textoResultados}>Email: {email}</Text>
        <Text style={styles.textoResultados}>Hobby: {hobbie}</Text>
        <Text style={styles.textoResultados}>Aceito:{aceito ==true?"👍":"👎"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  },
  conteudo1:{
    backgroundColor:'gray',
    flex:0.7,
    alignItems:"center"
  },
  conteudo2:{
    backgroundColor:'#f5f5f5',
    alignItems:"center",
    borderWidth:1,
    borderRadius:15,
    borderLeftWidth:10,
    borderRightWidth:10,
    borderTopWidth:5,
    borderBottomWidth:5,
    borderColor:'black',
    marginBottom:15,
    flex:2
  },
  conteudo3:{
    backgroundColor:'#f5f5f5',
    alignItems:"center",
    borderWidth:1,
    borderRadius:15,
    borderLeftWidth:10,
    borderRightWidth:10,
    borderTopWidth:5,
    borderBottomWidth:5,
    borderColor:'black',
    marginBottom:15,
    flex:1
  },
  conteudo4:{
    backgroundColor:'#f5f5f5',
    textAlign: "left",
    borderWidth:1,
    borderRadius:15,
    borderLeftWidth:10,
    borderRightWidth:10,
    borderTopWidth:5,
    borderBottomWidth:5,
    borderColor:'black',
    flex:1
  },
  box:{
    marginTop:30,
    flexDirection: 'row',
    padding: 6
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    marginBottom: 5,
    borderWidth:2,
    borderColor:'black',
    width:"90%",
    height: "50px"
  },
  inputPicker: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    marginTop: 4,
    borderWidth:2,
    borderColor:'black',
    width:"90%",
    height: "50px"
  },

  imagem:{
    borderRadius: "100px",
    borderWidth:2,
    marginTop:4
  },
  texto:{
    fontSize:18,
    marginBottom:5,
    fontStyle:"italic",
    fontWeight:"bold"
  },
  textoPicker:{
    fontSize:16,
    marginBottom:15,
    marginTop:5,
    fontStyle:"italic",
    fontWeight:"bold"
  },
  textoResultados:{
    fontSize:15,
    marginBottom:10,
    marginLeft:7,
    fontStyle:"italic",
    fontWeight:"bold"
  },
  textoTermos:{
    textAlign:'center',
    alignItems:"center",    
    fontSize:15,
    marginLeft:5,
    fontStyle:"italic",
    fontWeight:"bold"
  },
  título:{
    textAlign:'center',
    alignItems:"center",    
    fontSize:18,
    fontStyle:"italic",
    fontWeight:"bold",
    marginBottom:3,
    marginTop:9,
  },
});
