import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedText } from '@/components/ThemedText';
import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function LoginScreen() {
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
    forgotPassword: {
      alignSelf: 'flex-end',
      marginBottom: 20,
    },
    forgotPasswordText: {
      color: theme.colors.primary,
    },
    registerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    registerText: {
      marginRight: 5,
    },
    registerLink: {
      color: theme.colors.primary,
    },
  });

  const handleLogin = () => {
    // Implement fake login logic here
    console.log('Login with:', email, password);
    navigation.navigate('Main' as never);
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Login</ThemedText>
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
      <TouchableOpacity style={styles.forgotPassword}>
        <ThemedText style={styles.forgotPasswordText}>Forgot Password?</ThemedText>
      </TouchableOpacity>
      <Button onPress={handleLogin}>Login</Button>
      <View style={styles.registerContainer}>
        <ThemedText style={styles.registerText}>Don't have an account?</ThemedText>
        <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}>
          <ThemedText style={styles.registerLink}>Register</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}