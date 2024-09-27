document.addEventListener('DOMContentLoaded', function () {
    const dialogOverlay = document.getElementById('dialogOverlay');
    const dialogTitle = document.getElementById('dialogTitle');
    const dialogBody = document.getElementById('dialogBody');
    const closeDialogButton = document.getElementById('closeDialog');
    let activeDialog = null;

    const openDialog = (type) => {
        dialogTitle.textContent = type;
        dialogBody.innerHTML = '';
        switch (type) {
            case 'Acceso':
                dialogBody.innerHTML = `
                    <label for="dni">DNI</label>
                    <input type="text" id="dni" placeholder="Ingrese su número de DNI">
                    <button id="accesoAction">Verificar Acceso</button>
                `;
                document.getElementById('accesoAction').addEventListener('click', handleAcceso);
                break;
            case 'Generar QR':
                dialogBody.innerHTML = `
                    <div class="qr-placeholder"></div>
                    <button id="qrAction">Generar Nuevo QR</button>
                `;
                document.getElementById('qrAction').addEventListener('click', generateQR);
                break;
            case 'Registro':
                dialogBody.innerHTML = `
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" placeholder="Ingrese su nombre">
                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" placeholder="Ingrese su apellido">
                    <label for="dniRegistro">DNI</label>
                    <input type="text" id="dniRegistro" placeholder="Ingrese su DNI">
                    <label for="celular">Celular</label>
                    <input type="text" id="celular" placeholder="Ingrese su número de celular">
                    <button id="registroAction">Registrar Usuario</button>
                `;
                document.getElementById('registroAction').addEventListener('click', handleRegistro);
                break;
        }
        dialogOverlay.style.display = 'flex';
        activeDialog = type;
    };

    const closeDialog = () => {
        dialogOverlay.style.display = 'none';
        activeDialog = null;
    };

    document.getElementById('accesoButton').addEventListener('click', () => openDialog('Acceso'));
    document.getElementById('qrButton').addEventListener('click', () => openDialog('Generar QR'));
    document.getElementById('registroButton').addEventListener('click', () => openDialog('Registro'));
    closeDialogButton.addEventListener('click', closeDialog);

    const handleAcceso = () => {
        const dni = document.getElementById('dni').value;
        if (dni) {
            alert(`Verificando acceso para DNI: ${dni}`);
        } else {
            alert("Por favor, ingrese un DNI");
        }
    };

    const handleRegistro = () => {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const dni = document.getElementById('dniRegistro').value;
        const celular = document.getElementById('celular').value;

        if (nombre && apellido && dni && celular) {
            alert(`Registrando usuario: ${nombre} ${apellido}`);
        } else {
            alert("Por favor, complete todos los campos");
        }
    };

    const generateQR = () => {
        alert("Se ha generado un nuevo código QR");
    };
});
