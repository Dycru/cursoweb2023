import random
import time

# Definir los caracteres que aparecerán en la pantalla
caracteres = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=[]{}|;':\",./<>?"

# Función para generar un carácter aleatorio
def generar_caracter():
    return random.choice(caracteres)

# Función principal
def matrix_rain(filas, columnas):
    # Crear una lista de listas para almacenar los caracteres
    pantalla = []
    for i in range(filas):
        fila = []
        for j in range(columnas):
            fila.append(" ")
        pantalla.append(fila)

    # Loop principal
    while True:
        # Generar un nuevo carácter para cada columna de la primera fila
        for j in range(columnas):
            pantalla[0][j] = generar_caracter()

        # Desplazar los caracteres hacia abajo
        for i in range(filas-1):
            for j in range(columnas):
                pantalla[i+1][j] = pantalla[i][j]

        # Imprimir la pantalla
        for i in range(filas):
            for j in range(columnas):
                print(pantalla[i][j], end="")
            print()
        
        # Esperar un poco antes de continuar
        time.sleep(0.05)

# Ejecutar la función principal
matrix_rain(40, 80)

