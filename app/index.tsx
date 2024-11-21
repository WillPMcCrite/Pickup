import React, {useState} from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from 'react-native';

export default function Index() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#0C2340'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            source={require('../assets/images/Bball.jpg')}
            style={styles.headerImg}
          />
          <Text style={styles.title}>
            Ball up top!
          </Text>
          <Text style={styles.subtitle}>
            Make a name for yourself at your local courts
          </Text>
        </View>

        <View style={styles.form}>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Username</Text>

            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.inputControl}
              placeholder="ExampleUsername24"
              placeholderTextColor="#6b7280"
              value={form.username}
              onChangeText={username => setForm({...form,username})}
              />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              secureTextEntry
              style={styles.inputControl}
              placeholder="********"
              placeholderTextColor="#6b7280"
              value={form.password}
              onChangeText={password => setForm({...form,password})}
              />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => {
              Alert.alert('Successfully signed in!');
            }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{marginTop: 'auto'}}
            onPress={() => {
            //Handle onPress
          }}>
            <Text style={styles.formFooter}>Don't have an account? Sign up</Text>
          </TouchableOpacity>



        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  header: {
    marginVertical: 20,
  },
  headerImg: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 15
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#DD550C',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  input: {
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#929292',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
     fontWeight: '500',
     color: '#222',
  },
  form: {
    marginBottom: 24,
    flex: 1,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#929292',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  btn: {
    backgroundColor: '#075eec',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#075eec',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff'
  },
});
