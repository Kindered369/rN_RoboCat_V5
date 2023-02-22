import { View, StyleSheet, Image, Text, Button, TouchableHighlight, ImageBackground } from 'react-native';
import button from '../assets/catball.png';
import button2 from '../assets/catballD.png';
import button3 from '../assets/catballDW.png';
import { useState, useEffect } from 'react';
import background from '../assets/floor.png';

const Main = () => {
    const [counter, setCounter] = useState(0);
    const [clicker, setClicker] = useState(button);

    useEffect(() => {
        if (counter >= 10 && counter < 20) {
            setClicker(button2)
        } else if (counter >= 20) {
            setClicker(button3)
        } else {
            setClicker(button)
        }
    }, [counter])

    return (
        <View style={styles.view}>
            <ImageBackground style={styles.view} source={background} resizeMode='cover'>
                <Text>Clicks: {counter}</Text>
                <TouchableHighlight
                    underlayColor={0}
                    style={styles.highlight}
                    onPress={() => setCounter(counter + 1)}
                >
                    <Image style={styles.button} source={clicker} />
                </TouchableHighlight>
                <Button style={styles.reset} title='Reset' onPress={() => setCounter(0)} />
            </ImageBackground>
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
        alignItems: 'center',
        color: 'green'
    }
})

export default Main;