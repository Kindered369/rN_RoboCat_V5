import { View, StyleSheet, Image, Text, Button, TouchableHighlight } from 'react-native';
import button from '../assets/catball.png';
import { useState } from 'react';
import background from '../assets/floor.png';

const Main = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.view}>
            <Text>Clicks: {counter}</Text>
            <TouchableHighlight
                underlayColor={0}
                style={styles.highlight}
                onPress={() => setCounter(counter + 1)}
            >
                <Image style={styles.button} source={button} />
            </TouchableHighlight>
            <Button style={styles.reset} title='Reset' onPress={() => setCounter(0)} />
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 500,
        height: 500,
        alignItems: 'center'
    },
    reset: {
        backgroundColor: '#000',
        alignItems: 'center'
    }
})

export default Main;