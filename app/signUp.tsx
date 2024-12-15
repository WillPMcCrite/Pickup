// Sign-up page for the app
import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import styles from './styles';



export default function signUp() {
    const [form, setForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
      });

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.light.background}}>
            <View style={styles.container}>
                <View style={styles.header}>
                     {/* The Image below is the logo */}
                    <Image
                        source={require('../assets/images/PickupLogoReal.png')}
                        style={styles.headerImg}
                    />
                    <Text style={styles.title}>
                        Sign up
                    </Text>
                </View>

                <View style={styles.form}>
                    {/* This begins the sign-up form */}
                    <View style={styles.input}>
                        {/* User enters username */}
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
                        {/* User enters password */}
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

                    <View style={styles.input}>
                        {/* User confirms password */}
                        <Text style={styles.inputLabel}>Confirm password</Text>
                        <TextInput
                            secureTextEntry
                            style={styles.inputControl}
                            placeholder="********"
                            placeholderTextColor="#6b7280"
                            value={form.confirmPassword}
                            onChangeText={confirmPassword => setForm({ ...form, confirmPassword })}
                        />
                    </View>

                    <View style={styles.formAction}>
                        {/* Button used to sign up */}
                        <TouchableOpacity onPress={() => Alert.alert('Successfully signed up!')}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Sign up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}