
<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Clientes
                    <RouterLink to="/clientes/create" class=" btn btn-primary float-end">
                        agregar
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Dirreccion</th>
                        <th>Telefono</th>
                        <th>RFC</th>
                        <th>CURP</th>
                        <th>Cp</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody v-if="clientes.length > 0">
                        <tr v-for="(cliente, index) in clientes" :key="index">
                            <td>{{ cliente.ID }}</td>
                            <td>{{ cliente.Nombre }}</td>
                            <td>{{ cliente.Apellido }}</td>
                            <td>{{ cliente.Direccion }}</td>
                            <td>{{ cliente.Telefono }}</td>
                            <td>{{ cliente.RFC }}</td>
                            <td>{{ cliente.CURP }}</td>
                            <td>{{ cliente.CP }}</td>
                            <td> 
                                <button class="btn btn-warning"> Editar</button>
                                &nbsp;
                                <button class="btn btn-danger" @click="deleteClientes(cliente.id )">Borrar</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="9" style="text-align: center;"> sin Clientes</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>


</template>

<script>
import axios from 'axios'
export default {
    name: "ClientesView",
    data() {
        return {
            clientes: [],
        }
    },
    mounted() {// cuando se carga la pagina
        this.getClientes();
    },
    methods: {
        getClientes() {
            axios.get('http://localhost:3000/api/clientes').then(res => {
                this.clientes = res.data;
            });
        },
        deleteClientes(iddelcclienteaborrar){
            axios.delete('http://localhost:3000/api/clientes/' + iddelcclienteaborrar).then(res=>{
                if(res.data.affectedRows > 0){
                    this.getClientes();//reclagre los datos
                }
            });
        }
    }
}
</script>