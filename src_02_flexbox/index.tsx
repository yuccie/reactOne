import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function MyIndex() {
    const styles = StyleSheet.create({
        container: {
            height: 200,
            with: 300,
            borderColor: '#ccc',
            borderWidth: 1,
        },
        item: {
            fontSize: 24,
            padding: 10
        }
    })

    return (
        <>
            <View>
                <Text>主轴方向</Text>
                <View>
                    <Text>flexDirection: 'column'（默认）</Text>
                    <View style={styles.container}>
                        <Text style={[styles.item]}>刘备</Text>
                        <Text style={[styles.item]}>关羽</Text>
                        <Text style={[styles.item]}>曹操</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

