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
        },
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        },
        column: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    })

    return (
        <>
            <View>
                <Text>主轴方向</Text>
                <View>
                    <Text>flexDirection: 'row'（默认）</Text>
                    <View style={[styles.container, styles.row]}>
                        <Text style={[styles.item]}>刘备</Text>
                        <Text style={[styles.item]}>关羽</Text>
                        <Text style={[styles.item]}>曹操</Text>
                    </View>
                </View>

                <View>
                    <Text>flexDirection: 'column'（默认）</Text>
                    <View style={[styles.container, styles.column]}>
                        <Text style={[styles.item]}>刘备</Text>
                        <Text style={[styles.item]}>关羽</Text>
                        <Text style={[styles.item]}>曹操</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

