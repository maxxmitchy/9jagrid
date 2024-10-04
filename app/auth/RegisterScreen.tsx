import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      marginBottom: 15,
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    loginText: {
      marginRight: 5,
    },
    loginLink: {
      color: theme.colors.primary,
    },
  });

  const handleRegister = () => {
    // Implement fake registration logic here
    console.log('Register with:', name, email, password);
    navigation.navigate('Main' as never);
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Register</ThemedText>
      <Input
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button onPress={handleRegister}>Register</Button>
      <View style={styles.loginContainer}>
        <ThemedText style={styles.loginText}>Already have an account?</ThemedText>
        <TouchableOpacity onPress={() => navigation.navigate('Login' as never)}>
          <ThemedText style={styles.loginLink}>Login</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}