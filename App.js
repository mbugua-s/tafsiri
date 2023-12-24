import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation, route })
{
 
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button 
                title="Go to profile"
                onPress={() => 
                    navigation.navigate('Profile', { name: 'Custom profile header'})}
            />
        </View>
    );
}

function CreatePostScreen({ route, navigation }) {
    // Get the params

    const [postText, setPostText] = React.useState('')

    return (
        <>
            <TextInput
                multiline
                placeholder="Whats on your mind?"
                style={{ height: 200, padding: 10, backgroundColor: 'white' }}
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Done"
                onPress={() => {
                    navigation.navigate({
                        name: 'Home',
                        params: { post: postText },
                        merge: true
                    })
                }}
            ></Button>
        </>
    )
}

function ProfileScreen({ navigation })
{
    return (
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Profile Screen</Text>
            <Button title = "Update title" onPress={() => navigation.setOptions({title: 'Updated!'})}></Button>
        </View>
    )
}

function LogoTitle() 
{
    return (
        <Image style={{ width: 50, height: 50 }}
            source = {require('./app/assets/icon.png')}
        />
    )
}

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}
            >
                <Stack.Screen
                    name='Home' 
                    component={HomeScreen}
                    options={{
                        headerTitle: (props) => <LogoTitle {...props} />                      
                    }} />
                <Stack.Screen name='Profile' component={ProfileScreen} options = {({route}) => ({title: route.params.name})} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
