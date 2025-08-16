        // ========== FUNCIONES PARA EVENTOS ==========

        // EVENTO 1: ONCHANGE - Cambiar color de fondo
        function cambiarColorFondo() {
            const select = document.getElementById('colorSelect');
            const colorBox = document.getElementById('colorBox');
            const color = select.value;
            
            if (color) {
                colorBox.style.backgroundColor = color;
            } else {
                colorBox.style.backgroundColor = '#007bff';
            }
        }

        // EVENTO 2: ONSUBMIT - Validar formulario
        function validarFormulario(event) {
            event.preventDefault(); // Evitar el envío real del formulario
            
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const resultado = document.getElementById('resultadoForm');
            
            if (!nombre) {
                resultado.innerHTML = 'Error: El nombre es obligatorio';
                resultado.style.backgroundColor = '#f8d7da';
                resultado.style.color = '#721c24';
                return false;
            }
            
            if (!email) {
                resultado.innerHTML = 'Error: El email es obligatorio';
                resultado.style.backgroundColor = '#f8d7da';
                resultado.style.color = '#721c24';
                return false;
            }
            
            if (!email.includes('@')) {
                resultado.innerHTML = 'Error: El email debe contener @';
                resultado.style.backgroundColor = '#f8d7da';
                resultado.style.color = '#721c24';
                return false;
            }
            
            resultado.innerHTML = `Formulario válido - Nombre: ${nombre}, Email: ${email}`;
            resultado.style.backgroundColor = '#d4edda';
            resultado.style.color = '#155724';
            
            return true;
        }

        // EVENTO 3: ONRESIZE - Actualizar tamaño de ventana
        function actualizarTamano() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            document.getElementById('windowWidth').textContent = width;
            document.getElementById('windowHeight').textContent = height;
        }

        // ========== EJERCICIOS CON ESTRUCTURAS DE CONTROL ==========

        // EJERCICIO 1: IF/ELSE - Calculadora de notas
        function calcularCalificacion() {
            const notaInput = document.getElementById('notaInput');
            const resultado = document.getElementById('resultadoNota');
            const nota = parseInt(notaInput.value);
            
            if (isNaN(nota) || nota < 0 || nota > 100) {
                resultado.innerHTML = 'Error: Ingresa una nota válida entre 0 y 100';
                return;
            }
            
            let calificacion, descripcion;
            
            if (nota >= 90) {
                calificacion = 'Excelente';
                descripcion = 'Rendimiento sobresaliente';
            } else if (nota >= 80) {
                calificacion = 'Muy Bueno';
                descripcion = 'Rendimiento muy satisfactorio';
            } else if (nota >= 70) {
                calificacion = 'Bueno';
                descripcion = 'Rendimiento satisfactorio';
            } else if (nota >= 60) {
                calificacion = 'Regular';
                descripcion = 'Rendimiento aceptable';
            } else {
                calificacion = 'Insuficiente';
                descripcion = 'Necesita mejorar';
            }
            
            resultado.innerHTML = `
                Nota: ${nota}/100<br>
                Calificación: <strong>${calificacion}</strong><br>
                Descripción: ${descripcion}
            `;
        }

        // EJERCICIO 2: SWITCH - Días del mes
        function calcularDiasMes() {
            const mesSelect = document.getElementById('mesSelect');
            const resultado = document.getElementById('resultadoDias');
            const mes = parseInt(mesSelect.value);
            
            if (!mes) {
                resultado.innerHTML = 'Error: Selecciona un mes';
                return;
            }
            
            let dias, nombreMes;
            
            switch (mes) {
                case 1:
                    nombreMes = 'Enero';
                    dias = 31;
                    break;
                case 2:
                    nombreMes = 'Febrero';
                    dias = '28 (29 en año bisiesto)';
                    break;
                case 3:
                    nombreMes = 'Marzo';
                    dias = 31;
                    break;
                case 4:
                    nombreMes = 'Abril';
                    dias = 30;
                    break;
                case 5:
                    nombreMes = 'Mayo';
                    dias = 31;
                    break;
                case 6:
                    nombreMes = 'Junio';
                    dias = 30;
                    break;
                case 7:
                    nombreMes = 'Julio';
                    dias = 31;
                    break;
                case 8:
                    nombreMes = 'Agosto';
                    dias = 31;
                    break;
                case 9:
                    nombreMes = 'Septiembre';
                    dias = 30;
                    break;
                case 10:
                    nombreMes = 'Octubre';
                    dias = 31;
                    break;
                case 11:
                    nombreMes = 'Noviembre';
                    dias = 30;
                    break;
                case 12:
                    nombreMes = 'Diciembre';
                    dias = 31;
                    break;
                default:
                    nombreMes = 'Desconocido';
                    dias = 0;
            }
            
            resultado.innerHTML = `
                Mes seleccionado: <strong>${nombreMes}</strong><br>
                Número de días: <strong>${dias}</strong>
            `;
        }

        // EJERCICIO 3: FOR LOOP - Números pares
        function mostrarPares() {
            const numeroInput = document.getElementById('numeroLimite');
            const resultado = document.getElementById('resultadoPares');
            const limite = parseInt(numeroInput.value);
            
            if (isNaN(limite) || limite < 2 || limite > 50) {
                resultado.innerHTML = 'Error: Ingresa un número válido entre 2 y 50';
                return;
            }
            
            let pares = [];
            
            for (let i = 2; i <= limite; i += 2) {
                pares.push(i);
            }
            
            resultado.innerHTML = `
                Números pares desde 2 hasta ${limite}:<br>
                <strong>${pares.join(', ')}</strong><br>
                Total de números pares: <strong>${pares.length}</strong>
            `;
        }

        // ========== INICIALIZACIÓN ==========
        
        // Configurar el evento onresize y mostrar tamaño inicial
        window.onresize = actualizarTamano;
        
        // Mostrar tamaño inicial al cargar la página
        window.onload = function() {
            actualizarTamano();
            console.log('Página cargada - Eventos y estructuras de control activos');
        };
