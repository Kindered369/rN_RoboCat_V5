import { ScrollView, Image, Text } from 'react-native';
import { Card } from 'react-native-elements';
import pic1 from '../assets/catball1.png';


const HomeScreen = () => {
    return (
        <ScrollView>
            <Card>
                <Text>Ready?</Text>
                <Image src={pic1} alt='green floor' />
            </Card>
        </ScrollView>
    )
};

export default HomeScreen;