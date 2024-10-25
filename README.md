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
├── /__mocks__        # Mocks reutilizables para los tests
│
├── /__tests__        # Test archivo app
│
├── /actions          # Acciones para el manejo de estados globales
│
├── /api              # Manejo de los request al servidor
│
├── /assets           # Archivos estáticos (imágenes, iconos, etc)
│
├── /components       # Componentes reutilizables
│
├── /contexts         # Configuracion de contextos, reducers y providers para la app.
│
├── /helpers          # Métodos y funciones para responsabilidades específicas
│
├── /hooks            # Functionalidades y acciones
│
├── /interfaces       # Interfaces y tipos
│
├── /mappings         # Mappers para dar formato a la data
│
├── /pages            # Paginas con sus respectivos modulos y/o secciones.
│
├── /routes           # Rutas de la aplicación
│
├── /styles           # Estilos en general
│
├── /utils            # Carpeta para métodos y/o constantes de ayuda
│   └── location.json # Archivo para cargar distritos (segun requisitos de ppt)
│
├── App.ts            # Se dejó la base para implementar rutas en el futuro
│
└── main.ts           # Archivo principal para ejecucion de la aplicacion
```

## Criterios

### Semana 4 - Pruebas Unitarias

Para este entregable se consideró lo siguiente:

- Realizar el coverage del proyecto.
- Implementar mocks.
- Cubrir la mayor parte de funcionalidades y componentes.
