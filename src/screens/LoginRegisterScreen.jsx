
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function LoginRegisterScreen() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🏔️</Text>
      </View>

      {/* Header */}
      <Text style={styles.title}>
        {isRegister ? 'Create Account' : 'Welcome Back'}
      </Text>

      <Text style={styles.subtitle}>
        {isRegister
          ? 'Create your account and start exploring new trails.'
          : 'Sign in to continue your hiking adventure.'}
      </Text>

      {/* Form */}
      <View style={styles.form}>

        {/* Name */}
        {isRegister && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Full Name</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#9AA39B"
              autoCapitalize="words"
            />
          </View>
        )}

        {/* Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#9AA39B"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        {/* Password */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#9AA39B"
            secureTextEntry
          />
        </View>

        {/* Confirm Password */}
        {isRegister && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirm Password</Text>

            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              placeholderTextColor="#9AA39B"
              secureTextEntry
            />
          </View>
        )}

        {/* Forgot Password */}
        {!isRegister && (
          <TouchableOpacity
            style={styles.forgotButton}
            activeOpacity={0.7}
          >
            <Text style={styles.forgotText}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        )}

        {/* Main Button */}
        <TouchableOpacity
          style={styles.mainButton}
          activeOpacity={0.8}
        >
          <Text style={styles.mainButtonText}>
            {isRegister ? 'Create Account' : 'Login'}
          </Text>
        </TouchableOpacity>

      </View>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Switch Login / Register */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>
          {isRegister
            ? 'Already have an account?'
            : "Don't have an account?"}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setIsRegister(!isRegister)}
        >
          <Text style={styles.switchButton}>
            {isRegister ? ' Login' : ' Register'}
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8F4',
  },

  content: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 40,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 14,
  },

  logo: {
    fontSize: 62,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#23412D',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#7B857D',
    textAlign: 'center',
    paddingHorizontal: 15,
    marginBottom: 30,
  },

  form: {
    width: '100%',
  },

  inputGroup: {
    marginBottom: 17,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#354238',
    marginBottom: 8,
  },

  input: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE3DD',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#25352A',
  },

  forgotButton: {
    alignSelf: 'flex-end',
    marginTop: -4,
    marginBottom: 20,
  },

  forgotText: {
    color: '#3E7B4D',
    fontSize: 14,
    fontWeight: '600',
  },

  mainButton: {
    height: 55,
    borderRadius: 14,
    backgroundColor: '#3E7B4D',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    elevation: 3,
  },

  mainButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#DCE3DD',
  },

  dividerText: {
    marginHorizontal: 14,
    fontSize: 12,
    fontWeight: '600',
    color: '#9AA39B',
  },

  googleButton: {
    height: 54,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE3DD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleIcon: {
    fontSize: 18,
    fontWeight: '800',
    color: '#4285F4',
    marginRight: 10,
  },

  googleText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#354238',
  },

  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  switchText: {
    fontSize: 14,
    color: '#7B857D',
  },

  switchButton: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3E7B4D',
  },
});
