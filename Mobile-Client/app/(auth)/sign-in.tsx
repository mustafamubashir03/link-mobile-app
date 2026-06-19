import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ActivityIndicator, TextInput, Pressable, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Colors } from '@/constants/colors'
import { Ionicons } from '@expo/vector-icons'

const Signin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const [secureText, setSecureText] = useState(true)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'center',
                    padding: 24,
                }}
                    keyboardShouldPersistTaps="handled">
                    <View style={{ alignItems: "center", marginBottom: 48 }}>
                        <View style={{
                            width: 72,
                            height: 72,
                            borderRadius: 20,
                            backgroundColor: Colors.primaryDeep,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <Ionicons name='chatbubbles' size={36} color={'#ffffff'} />

                        </View>
                        <Text style={{
                            color: Colors.primaryDeep,
                            fontSize: 36,
                            fontWeight: 600,
                            marginBottom: 30
                        }}>LiNK</Text>
                        <Text style={{
                            color: Colors.textMuted,
                            fontSize: 20,
                            fontWeight: 600,
                        }}>Connect with your friends</Text>
                        <Text style={{
                            color: Colors.textMuted,
                            fontSize: 14,
                        }}>Sign in to your account</Text>
                    </View>
                    {
                        error && (
                            <Text style={{
                                color: Colors.error,
                                fontSize: 14,
                                marginBottom: 12,
                                backgroundColor: Colors.errorSubtle,
                                paddingVertical: 10,
                                borderRadius: 8,
                                textAlign: "center",
                            }}>{error}</Text>
                        )
                    }
                    <Text style={{ color: Colors.textSecondary, fontSize: 14, fontWeight: 500, marginBottom: 8 }}>Enter your Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="hello@gmail.com"
                        placeholderTextColor={Colors.textTertiary}
                        style={{
                            backgroundColor: Colors.surface,
                            borderWidth: 1,
                            borderColor: Colors.border,
                            marginBottom: 16,
                            borderRadius: 8,
                            padding: 12,
                            paddingHorizontal: 12,
                            fontSize: 16,
                        }}
                    />
                    <Text style={{ color: Colors.textSecondary, fontSize: 14, fontWeight: 500, marginBottom: 8 }}>Enter your Password</Text>
                    <View style={{
                        position: "relative"
                    }}>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder="********"
                            placeholderTextColor={Colors.textTertiary}
                            secureTextEntry={secureText}
                            style={{
                                backgroundColor: Colors.surface,
                                borderWidth: 1,
                                borderColor: Colors.border,
                                borderRadius: 8,
                                padding: 12,
                                paddingHorizontal: 12,
                                fontSize: 16,
                                color: Colors.textPrimary,
                            }}
                        />
                        <Pressable onPress={() => setSecureText(!secureText)} style={{
                            position: "absolute",
                            right: 12,
                            top: 0,
                            bottom: 0,
                            justifyContent: "center"
                        }}>
                            <Ionicons name={secureText ? "eye" : "eye-off"} size={20} color={Colors.textTertiary} />
                        </Pressable>
                    </View>
                    <Pressable style={{ backgroundColor: Colors.primaryLight, padding: 12, borderRadius: 8, flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 32 }} disabled={loading}>
                        {loading ? <ActivityIndicator size="small" color={Colors.background} /> : <Text style={{ color: Colors.background, fontSize: 16, fontWeight: 600 }}>Sign In</Text>}
                    </Pressable>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 24, gap: 4 }}>
                        <Text style={{ color: Colors.textMuted, fontSize: 14 }}>Don't have an account?</Text>
                        <Pressable>
                            <Text style={{ color: Colors.primaryLight, fontSize: 14, fontWeight: 600 }}>Sign Up</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Signin

const styles = StyleSheet.create({})