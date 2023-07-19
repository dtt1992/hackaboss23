# Ejercicio 4

Crea una función que reciba un string e indique si es palíndromo o no (se lee igual al derecho y al revés)

No debe tener en cuenta mayúsculas/minúsculas ni espacios.

Para simplificar, asumieremos que el string no tendrá tildes ni signos de puntuación.

Ejemplo inputs:

```javascript
"Arriba la birra";
"Dabale arrroz a la zorra el abad";
"Hola mundo";
```

Ejemplo output:

```javascript
true;
true;
false;
```

**Pista**: no lo podrás resolver trabajando únicamente con strings

**Pasos:**

- Obtener una versión en minúsculas sin espacios
- Convertir a array
- Darle la vuelta
- Convertir a string
- Comparar con el "original" (en minusculas sin espacios)
