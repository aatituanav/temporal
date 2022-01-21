import React, { useState, forwardRef, useImperativeHandle } from "react";
import { ScrollView, StyleSheet, View, SafeAreaView } from "react-native";
import { Input, Icon, Text, Button } from 'react-native-elements';

const EmployInput = ({ save }, ref) => {
    const [empName, setEmpName] = useState('')
    const [empSurname, setEmpSurname] = useState('')
    const [empEmail, setEmpEmail] = useState('')
    const [age, setAge] = useState('')
    const [isActive, setIsActive] = useState(null)
    const [isEditing, setIsEditing] = useState(false)
    const [key, setKey] = useState('')



    const setEmp = () => {
        return {
            name: empName,
            surname: empSurname,
            email: empEmail,
            age,
            isActive: isEditing ? isActive : true,
            isEditing,
            key
        }
    }

    const fillFields = (emp) => {
        setIsEditing(true)
        setEmpName(emp.name)
        setEmpSurname(emp.surname)
        setEmpEmail(emp.email)
        setAge(emp.age)
        setIsActive(emp.isActive)
        setKey(emp.key)
    }
    const clearFields = () => {
        setIsEditing(false)
        setEmpName('')
        setEmpSurname('')
        setEmpEmail('')
        setAge('')
        setIsActive(null)
        setKey('')
    }

    useImperativeHandle(ref, () => ({
        fillFields: fillFields,
        clearFields: clearFields
    }), [])


    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>

                {isActive != undefined ? (<Text style={[isActive ? { color: 'green' } : { color: 'red' }, styles.activeText]}>{isActive ? "Usuario Activo" : "Usuario Inactivo"}</Text>) : null}
                <Text>Nombres</Text>
                <Input value={empName} onChangeText={setEmpName} placeholder="Ingrese Nombres" />
                <Text>Apellidos</Text>
                <Input value={empSurname} onChangeText={setEmpSurname} placeholder="Ingrese Apellidos" />
                <Text>Correo</Text>
                <Input value={empEmail} onChangeText={setEmpEmail} placeholder="Ingrese e-mail" />
                <Text>Edad</Text>
                <Input value={age} onChangeText={setAge} placeholder="Ingrese edad" keyboardType='numeric' />
                <Button buttonStyle={styles.button} title="Guardar" onPress={() => save(setEmp())} />
                <Button buttonStyle={styles.button} title="Limpiar" onPress={() => clearFields()} />

            </ScrollView>

        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    container: {
        //   backgroundColor: 'bisque',
        flex: 1,
        padding: 30,
    },
    button: {
        padding: 20,
        marginTop: 20
    },
    activeText: {
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    }
})

export default forwardRef(EmployInput)