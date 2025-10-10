
import {View, Text, StyleSheet, Button} from 'react-native'


export default function AboutScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>Tela sobre</Text>
            <View style={styles.botao}>
            <Button title='Ir para Home' onPress={() => navigation.navigate('Home')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        width: '60%',
        marginVertical: '20',
    }
})