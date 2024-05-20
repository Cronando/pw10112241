<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Agregar Clientes</h4>
                <div  v-if="mensaje == 1" class="alert alert-success" role = "alert">
                    Datos guardados con exito
                </div>
            </div>
            <div class="card-body">
                <Form :validation-schema="validationSchema" @submit="onTodoBien">
                    <div class="md-3">
                        ID 
                        <Field name="id" id="id" class="form-control" type="text" v-model="model.cliente.id" />
                        <ErrorMessage name="id" />
                    </div>
                    <div class="md-3">
                        Nombre 
                        <Field name="nombre" id="nombre" class="form-control" type="text" v-model="model.cliente.nombre" />
                        <ErrorMessage name="nombre" />
                    </div>
                    <div class="md-3">
                        Apellidos 
                        <Field name="apellido" id="apellido" class="form-control" type="text" v-model="model.cliente.apellido" />
                        <ErrorMessage name="apellido" />
                    </div>
                    <div class="md-3">
                        Direccion 
                        <Field name="direccion" id="direccion" class="form-control" type="text" v-model="model.cliente.direccion" />
                        <ErrorMessage name="direccion" />
                    </div>
                    <div class="md-3">
                        Telefono 
                        <Field name="delefono" id="telefono" class="form-control" type="text" v-model="model.cliente.telefono" />
                        <ErrorMessage name="telefono" />
                    </div>
                    <div class="md-3">
                        RFC 
                        <Field name="rfc" id="rfc" class="form-control" type="text" v-model="model.cliente.rfc" />
                        <ErrorMessage name="rfc" />
                    </div>
                    <div class="md-3">
                        CURP 
                        <Field name="curp" id="curp" class="form-control" type="text" v-model="model.cliente.curp" />
                        <ErrorMessage name="curp" />
                    </div>
                    <div class="md-3">
                        CP
                        <Field name="cp" id="cp" class="form-control" type="text" v-model="model.cliente.cp" />
                        <ErrorMessage name="cp" />
                    </div>
                    <p></p>
                    <div class="md-3">
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </div>
                </Form>              
            </div>
        </div>


    </div>

</template>

<script>
import axios from 'axios';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

export default {
    name: "ClientesCreate",
    components: { Field, Form, ErrorMessage},
    data() {
        const validationSchema = toTypedSchema(
            zod.object({
                id: zod.string({message: 'Campo Requerido'}).min(1) ,
                nombre: zod.string({message: 'Campo Requerido'}).min(1) ,
                apellido: zod.string({message: 'Campo Requerido'}).min(1) ,
                direccion: zod.string({message: 'Campo Requerido'}).min(1) ,
                telefono: zod.string({message: 'Campo Requerido'}).min(1) ,
                rfc: zod.string({message: 'Campo Requerido'}).min(1) ,
                curp: zod.string({message: 'Campo Requerido'}).min(1) ,
                cp: zod.string({message: 'Campo Requerido'}).min(1) ,
            })
        )
        return {
            validationSchema,
            mensaje: 0,
            model: {
                cliente: {
                    id: '',
                    nombre: '',
                    apellido: '',
                    direccion: '',
                    telefono: '',
                    rfc: '',
                    curp: '',
                    cp: ''
                }
            }
        }
    },
    methods: {
        onTodoBien(){
          alert('Todo validado!');  
        },
        guardarCliente() {
            axios.post('http://localhost:3000/api/clientes', 
            this.model.cliente).then(res => {
                if (res.data.affectedRows == 1) {// si inesetamos 1 registros
                    //limpiar el cuadro de textos
                    this.model.cliente = {
                        id: '',
                        nombre: '',
                        apellido: '',
                        direccion: '',
                        telefono: '',
                        rfc: '',
                        curp: '',
                        cp: ''
                    }
                    this.mensaje = 1;
                }
            });
        }
    }
}
</script>