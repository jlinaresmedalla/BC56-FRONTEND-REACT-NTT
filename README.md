# Bootcamp BS56

## Instrucciones

Para visualizar la página deberá tener las siguientes consideraciones:

- Tener instalado Node v20.17.0
- Clonar respositorio
- Ejecutar los siguientes comandos en orden:

```bash
npm install
```

```bash
npm run dev
```

- Luego abrir http://localhost:5173/ en tu navegador.

## Estructura de carpetas

```bash
/src
│
├── /api              # Manejo de los request al servidor
│
├── /assets           # Archivos estáticos (imágenes, iconos, etc)
│
├── /components       # Componentes reutilizables
│
├── /hooks            # Functionalidades y acciones
│
├── /interfaces       # Interfaces y tipos
│
├── /pages            # Paginas con sus respectivos modulos y/o secciones.
│
├── /providers        # Configuracion de contextos y providers para la app.
│
├── /styles           # Estilos en general
│
├── /utils            # Carpeta para métodos y/o constantes de ayuda
│   ├── /constants    # Constantes globales
│   ├── /helpers      # Métodos y funciones para responsabilidades específicas
│   └── /mappings     # Mappers para las respuestas del servidor
│
├── App.ts            # Se dejó la base para implementar rutas en el futuro
│
└── main.ts           # Archivo principal para ejecucion de la aplicacion
```

## Criterios

### Semana 2 - React-fundamentos

Para este entregable se consideró lo siguiente:

- Se reestructuraron las carpetas para utilizar React.
- Se configuró eslint y prettier como base para un código organizado y facilitar el desarrollo.
- Se añadió un store para el manejo de diferentes contextos, en este caso para el contador del cart, dejando la base para añadir las siguientes funcionalidades.
- Se añadió librería de iconos.
- Las pagínas contienes subcarpetas que son los modulos que se mostraran en la página, los cuales contienen sus propios estilos y tipos. Esto para evitar que componentes estaticos como el banner no sea afectado por los rerenders a causa de los estados en marketplace.
