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
├── /actions          # Functionalidades y acciones
│
├── /api              # Manejo de los request al servidor
│
├── /assets           # Archivos estáticos (imágenes, iconos, etc)
│
├── /components       # Componentes reutilizables
│
├── /interfaces       # Interfaces y tipos
│
├── /styles           # Estilos en general
│
├── /utils            # Carpeta para métodos y/o constantes de ayuda
│   ├── /constants    # Constantes globales
│   ├── /helpers      # Métodos y funciones para responsabilidades específicas
│   └── /mappings     # Mappers para las respuestas del servidor
│
└── main.ts           # Archivo principal para ejecucion de la aplicacion
```

## Criterios

### Semana 2 - Typescript

Para este entregable se consideró lo siguiente:

- Se añadió estructura de carpetas partiendo de la carpeta principal /src
- Se hizo la migración de js a ts usando lo aprendido en clase.
- Se aplicó el patrón Mapper.
