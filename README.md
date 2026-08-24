# Task Manager API

API RESTful para la gestión de tareas con autenticación JWT.

## 🚀 Enlaces

- **API en producción:** https://task-app-backend-jugn.onrender.com
- **Documentación Swagger:** https://task-app-backend-jugn.onrender.com/api-docs
- **Repositorio:** https://github.com/tu-usuario/task-app-backend

## 📚 Documentación de la API

La API está documentada con Swagger/OpenAPI 3.0.0.

- **Interfaz interactiva:** [https://task-app-backend-jugn.onrender.com/api-docs](https://task-app-backend-jugn.onrender.com/api-docs)
- **Especificación JSON:** [https://task-app-backend-jugn.onrender.com/api-docs.json](https://task-app-backend-jugn.onrender.com/api-docs.json)

## 🔧 Tecnologías

- Node.js
- Express
- MySQL
- JWT para autenticación
- Swagger/OpenAPI para documentación

## 📋 Endpoints principales

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/auth/register` | Registrar un nuevo usuario |
| POST | `/api/auth/login` | Iniciar sesión |
| GET | `/api/tasks` | Obtener todas las tareas |
| POST | `/api/tasks` | Crear una nueva tarea |
| PUT | `/api/tasks/:id` | Actualizar una tarea |
| DELETE | `/api/tasks/:id` | Eliminar una tarea |

## 🔐 Autenticación

La API utiliza JWT (JSON Web Tokens) para autenticación.

1. Registrarse en `/api/auth/register`
2. Iniciar sesión en `/api/auth/login` para obtener el token
3. Incluir el token en el header `Authorization: Bearer <token>`

## 📦 Instalación local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/task-app-backend.git

# Instalar dependencias
npm install

# Configurar variables de entorno (copiar .env.example a .env)
cp .env.example .env

# Ejecutar en desarrollo
npm run dev

# Ejecutar en producción
npm start
