1. En la v3 Validación Mejorada:

- Uso trim() directamente al obtener el valor del input (nameAmigo). Esto evita que se agreguen nombres con espacios en blanco al principio o al final.

- Si el input está vacío, se muestra un mensaje de alerta.

2. Limpieza del Input:

- Después de agregar un amigo, el campo de input se limpia automáticamente para facilitar la entrada del siguiente nombre.

3. Uso de forEach:

- En la función verAmigos, reemplacé el bucle for con forEach para mejorar la legibilidad y simplificar el código.

4. Manejo de Errores en el Sorteo:

- En la función sortearAmigo, agregué una validación para evitar errores si no hay amigos en la lista. Si la lista está vacía, se muestra un mensaje de alerta.

5. Mensaje de Resultado Mejorado:

- Al mostrar el amigo sorteado, se añade un texto descriptivo (Amigo sorteado:) para que sea más claro.
