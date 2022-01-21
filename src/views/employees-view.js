import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import EmployInput from "../components/employ-input";
import { EmployList } from "../components/employ-list";



export const EmployeesView = () => {
    const [empList, setEmpList] = useState([])
    const [key, setKey] = useState(0)
    const childRef = useRef()


    const changeDataEmp = (usuario) => {
        console.log(usuario)
        let a = empList.findIndex((empleado) => usuario.key == empleado.key)
        empList.splice(a, 1, usuario)
        setEmpList([...empList])
    }

    const saveEmp = (usuario) => {
        if (usuario.isEditing) {
            changeDataEmp(usuario)
        } else {
            usuario.key = key
            setKey(key + 1)
            setEmpList([...empList, usuario])
            clear()
        }
    }

    const edit = (usuario) => {
        fref.current.fillFields(usuario)
    }

    const clear = () => {
        fref.current.clearFields()
    }


    const deleteEmp = (usuario) => {
        if (usuario.isEditing) {
            clear()
        }
        let a = empList.findIndex((empleado) => usuario.key == empleado.key)
        empList.splice(a, 1)
        setEmpList([...empList])
    }

    const fref = useRef()

    const desactivateUser = (usuario) => {
        usuario.isActive = !usuario.isActive
        let a = empList.findIndex((empleado) => usuario.key == empleado.key)
        empList.splice(a, 1, usuario)
        setEmpList([...empList])
    }

    //<Button onClick={() => fref.current.setFromOutside}></Button>

    return (
        <>
            <View style={styles.container}>
                <EmployInput
                    save={saveEmp}
                    ref={fref}
                />
                <EmployList
                    desactivateUser={desactivateUser}
                    data={empList}
                    edit={edit}
                    deleteEmp={deleteEmp}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'gray',
        flex: 1
    }
})