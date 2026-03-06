# 🛒 Nexus Commerce & Fleet Telemetry System

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)

Una plataforma de e-commerce completa (Frontend + BaaS) con un enfoque extremo en la **seguridad de datos**, **arquitectura multi-tenant** y **trazabilidad en tiempo real**.

Este proyecto no es solo un carrito de compras tradicional; incluye una integración directa con un sistema de telemetría de flota independiente que simula el recorrido logístico de los pedidos a través de una ruta física real (Toledo - Peligros), demostrando capacidad para orquestar microservicios y experiencias de usuario (UX) asíncronas.

## ✨ Características Principales y Decisiones de Arquitectura

### 🛡️ 1. Seguridad Avanzada y Aislamiento de Datos (RLS)

El proyecto implementa el estándar más alto de seguridad de Supabase mediante **Autenticación Anónima**.

- **El Problema:** Permitir a los reclutadores/usuarios probar la plataforma sin la fricción de crear una cuenta, garantizando al mismo tiempo que es criptográficamente imposible que un usuario acceda a los pedidos o datos personales de otro.
- **La Solución:** Implementación de `signInAnonymously()` bajo el capó. Esto permite aplicar políticas estrictas de **Row Level Security (RLS)** a nivel de base de datos (`auth.uid() = user_id`), protegiendo la tabla de pedidos y evitando vulnerabilidades de inyección o lectura no autorizada desde el cliente. El catálogo de productos mantiene un RLS de solo lectura (`SELECT`).

### 📡 2. Actualizaciones en Tiempo Real (Websockets)

- El estado del pedido ("Generando factura", "En camino", "Entregado") se actualiza en tiempo real en la interfaz del usuario.
- Al estar respaldado por la Autenticación Anónima, los canales de `Supabase Realtime` se suscriben de forma segura, evitando la filtración de datos a través de websockets públicos y eliminando la necesidad de hacer _Short Polling_ (ahorrando recursos del servidor).

### 🚚 3. Integración Multi-Tenant de Telemetría (Role-Based UI)

Cada pedido generado en el e-commerce crea una instancia única en el **Panel de Flota**.

- A través de enlaces dinámicos (`?tracking_id=UUID`), el sistema de telemetría adapta su interfaz (Role-Based UI) pasando de un panel de administrador a una vista de cliente (Read-Only).
- Simula latencias de red y trayectos basados en coordenadas geográficas precisas, mapeando restricciones del mundo físico en una experiencia digital.

### 🧹 4. Clean Code y Patrones de Diseño

- **Validación de Formularios:** Uso de `react-hook-form` combinado con `Zod` schemas para validaciones complejas de cliente, minimizando los re-renderizados de React.
- **Separación de Responsabilidades:** Componentización estricta, Custom Hooks (`useOrders`, `useCart`) para aislar la lógica de negocio de la UI, y uso de CSS Semántico / BEM sin mezclar estilos en línea en el JSX.

---

## 🛠️ Stack Tecnológico

- **Frontend:** React.js, Vite
- **Backend as a Service (BaaS):** Supabase (PostgreSQL, Auth, Edge Functions, Realtime)
- **Validación y Estado:** React Hook Form, Zod
- **Estilos:** CSS puro (Metodología BEM)
- **Mapas (Telemetría):** Leaflet, React-Leaflet
- **Infraestructura Edge:** Cloudflare Workers (Manejo de pings de telemetría y Rate Limiting)

---

## 🚀 Instalación y Despliegue Local

Si deseas probar el proyecto en tu entorno local:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/nexus-commerce.git](https://github.com/tu-usuario/nexus-commerce.git)
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno:
   ```bash
   cp .env.example .env
   ```
   Edita el archivo `.env` con tus credenciales de Supabase.
4. Ejecuta la aplicación:
   ```bash
   npm run dev
   ```

👨‍💻 Autor

Desarrollado para demostrar habilidades en arquitectura frontend, seguridad de bases de datos y diseño de producto enfocado en la experiencia del usuario final.
