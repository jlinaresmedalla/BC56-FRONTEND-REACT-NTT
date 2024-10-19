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
│   └── location.ts   # Archivo para cargar distritos (segun requisitos de ppt)
│
├── App.ts            # Se dejó la base para implementar rutas en el futuro
│
└── main.ts           # Archivo principal para ejecucion de la aplicacion
```

## Criterios

### Semana 2 - React-implementacion

Para este entregable se consideró lo siguiente:

- El acceso al carrito será mediante el boton con icono de cart.
- Se agregaron componentes en base a un design system / atomic design.
- Se reestructuraron las carpetas para utilizar React.
- Se agregó el estado global al carrito, ya que persiste a través de las páginas.
- Los productos, categorias y distritos, que son data externa, decidí dejarlos en hooks que se usaran y ejecutaran solo cuando los módulos sean usados.
- Se agregaron todas las funcionalidades requeridas de este entregable.
