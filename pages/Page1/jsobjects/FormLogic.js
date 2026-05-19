export default {
    getSchema: () => {
        return {
            "nombre": "Usuario Prueba",
            "email": "prueba@empresa.com",
            "departamento": ["IT", "Ventas", "Marketing", "RRHH"],
            "es_admin": false,
            "comentarios": ""
        };
    },
    onSubmit: () => {
        const formData = DynamicForm1.formData;
        showAlert("Datos enviados: " + JSON.stringify(formData), "success");
    }
}
