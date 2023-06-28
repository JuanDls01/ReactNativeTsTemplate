import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../helpers/colors';
import {useNavigation} from '@react-navigation/native';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/icons/logo.png')}
      />
      <Text style={styles.title}>Email:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your email ..."
          placeholderTextColor={Colors.White}
          onChangeText={email => setEmail(email)}
        />
      </View>
      <Text style={styles.title}>Password:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password ..."
          placeholderTextColor={Colors.White}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('MainTabs')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PurpleDarker,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  image: {
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: Colors.Gray,
    borderRadius: 10,
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    color: Colors.White,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  title: {
    color: Colors.White,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  loginBtn: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: Colors.RedDark,
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 30,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.White,
  },
});

export default LoginScreen;
