// initial screen that user is brought to
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0C2340' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            source={require('../assets/images/PickupLogoReal.png')}
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
              onChangeText={username => setForm({ ...form, username })}
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
              onChangeText={password => setForm({ ...form, password })}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => Alert.alert('Successfully signed in!')}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{ marginTop: 'auto' }}
            onPress={() => {
              router.push('/signUp')
            }}
           >
            <Text style={styles.formFooter}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
