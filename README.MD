# Login React
En este proyecto se basa en un login/register elaborado ocn react y con nodejs.

## Instalacion

# Instalacion

### 1. Clonar el repositorio

```bash
git clone https://github.com/AoKuangg/Login-React.git
```

### 2. Instalar el proyecto y sus dependencias en la carpeta del Frontend y lanzar a produccion.
Para esto sigue los siguientes comandos

```bash
cd Frontend
```
```bash
npm i
```
Esto creara la carpeta dist, utilizada en el backend.
```bash
npm run build
```
### 3. Configura tus variables de entorno

```json
SERVER={"hostname":"", "port":}
ATLAS_CONNECTION={"user":"","password":"","database":"loginReact"}
JWT_KEY={""}
```
### 4. Base de datos
Entra en la carpeta src/db , en esta esta el archivo db.mongodb ejecuta todo el query que ahi se encuentra.
###  5. Despues utiliza estos comandos para que todo el servidor quede funcionando: 
```bash
cd Backend
```
Luego instala las dependencias 
```bash
npm i
```
Por ultimo ejecuta el servidor
```bash
npm run start
```

COn esto ya podrias utilizar el programa en su totalidad