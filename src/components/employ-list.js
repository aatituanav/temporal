import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ListItem, Button, Icon } from "react-native-elements";


export const EmployList = ({ data, desactivateUser, edit, deleteEmp }) => {


    const empView = (obj) => {

        return (
            <ListItem.Swipeable containerStyle={obj.item.isActive ? { backgroundColor: '#CBFFD2' } : { backgroundColor: '#FFCBCB' }}
                bottomDivider
                leftContent={
                    <Button
                        title="Editar"
                        icon={{ name: 'info', color: 'white' }}
                        buttonStyle={{ minHeight: '100%' }}
                        onPress={() => { edit(obj.item) }}
                    />
                }
                rightContent={
                    <Button
                        title="Borrar"
                        icon={{ name: 'delete', color: 'white' }}
                        buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                        onPress={() => { deleteEmp(obj.item) }}
                    />
                }>
                <Icon
                    name='user-circle'
                    type='font-awesome'
                    color='#517fa4'
                />
                <ListItem.Content>
                    <ListItem.Subtitle>{obj.item.name}</ListItem.Subtitle>
                    <ListItem.Subtitle>{obj.item.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Content>
                    <ListItem.Title>Edad</ListItem.Title>
                    <ListItem.Subtitle>{obj.item.age}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.CheckBox
                    checked={obj.item.isActive}
                    onIconPress={() => { desactivateUser(obj.item) }}
                />
                <ListItem.Chevron />
            </ListItem.Swipeable>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={empView}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'antiquewhite',
        flex: 1,
        padding: 10,
    }
})