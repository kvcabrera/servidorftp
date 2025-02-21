//boton despegable de menu

document.querySelector('.dropdown-btn').addEventListener('click', function () {
  const menu = document.querySelector('.dropdown-content');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

//mostrar ventana de ayuda

function mostrarVentana() {
  Swal.fire({
    title: '¡Ayuda!',
    text: 'Si necesitas asistencia con la configuración de tu servidor FTP, contáctanos para recibir soporte técnico al correo: miservidorftp@gmail.com',
    icon: 'info',
    confirmButtonText: 'Cerrar',
	 confirmButtonColor: '#253552',
  });
}

//enviar msj contacto

function enviarmsj() {
  Swal.fire({
    title: 'Contacto',
    html: `
            <form id="contactForm">
                <div class="swal2-input-container">
                    <input type="text" id="nombre" class="swal2-input" placeholder="Tu nombre" required>
                </div>
                <div class="swal2-input-container">
                    <input type="email" id="correo" class="swal2-input" placeholder="Tu correo" required>
                </div>
                <div class="swal2-input-container">
                    <textarea id="mensaje" class="swal2-textarea" placeholder="Tu mensaje..." required></textarea>
                </div>
            </form>
        `,
    focusConfirm: false,
    preConfirm: () => {
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const mensaje = document.getElementById('mensaje').value;

      if (!nombre || !correo || !mensaje) {
        Swal.showValidationMessage('Por favor, completa todos los campos');
        return false;
      }

      return {
        nombre,
        correo,
        mensaje
      };
    },
    confirmButtonText: 'Enviar',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
	  confirmButtonColor: '#253552', 
    		cancelButtonColor: '#d33'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
                    title: '¡Mensaje enviado!',
                    text: 'Pronto nos contactaremos contigo.',
                    icon: 'success',
                    confirmButtonColor: '#253552'
                });
    } else {
      Swal.fire({
                    title: 'Formulario cancelado',
                    icon: 'error',
                    confirmButtonColor: '#ba282e'
                });
    }
  });
	
}

// Adjuntar archivo

document.getElementById('uploadIcon').addEventListener('click', () => {
        Swal.fire({
            title: 'Si deseas compartir información sobre servidores FTP',
            html: `
                <label for="fileInput" style="cursor: pointer;">
                    <span> ¡Selecciona un archivo dando clic aquí!</span>
                </label>
                <input type="file" id="fileInput" style="display: none;" />
                <div id="fileName" style="margin-top: 10px;"></div>
            `,
            showCancelButton: true,
            confirmButtonText: 'Subir',
			confirmButtonColor: '#253552', 
    		cancelButtonColor: '#ba282e', 
			cancelButtonText: 'Cancelar',
			
            preConfirm: () => {
                const fileInput = document.getElementById('fileInput');
                if (!fileInput.files.length) {
                    Swal.showValidationMessage('Por favor selecciona un archivo válido');
                }
                return fileInput.files[0];
            }
        }).then((result) => {
    if (result.isConfirmed) {
        const file = result.value;
        console.log('Archivo seleccionado:', file.name);
        Swal.fire({
            title: '¡Envío exitoso!',
            text: `Tu archivo ${file.name} ha sido enviado con éxito`,
            icon: 'success',
            confirmButtonColor: '#253552' 
        });
    }
});

        
        document.getElementById('fileInput').addEventListener('change', (event) => {
            const fileName = event.target.files[0]?.name || 'Ningún archivo seleccionado';
            document.getElementById('fileName').textContent = fileName;
        });
    });

			
	