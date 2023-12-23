import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation, route })
{
    React.useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.post])
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button 
                title="Create post"
                onPress={() => 
                    navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'My Home Screen'}} />
            <Stack.Screen name='CreatePost' component={CreatePostScreen} initialParams={{ itemId: 42 }} />
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
