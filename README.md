# Implementación de Pipeline CI/CD con Seguridad y Monitoreo

## Introducción

Este proyecto implementa un pipeline completo de Integración Continua y Entrega Continua (CI/CD) para una aplicación web desarrollada con Node.js. El objetivo es demostrar la integración de herramientas del ecosistema DevOps que permiten automatizar el ciclo de vida del software, incluyendo análisis de calidad de código, detección de vulnerabilidades, despliegue automatizado y monitoreo del sistema.

La solución utiliza herramientas ampliamente adoptadas en la industria como GitHub Actions, Jenkins, SonarQube, Snyk, Docker, Kubernetes, Prometheus y Grafana.

El pipeline permite que cada cambio en el repositorio sea analizado, probado y desplegado automáticamente en un entorno de Kubernetes.

---

# Arquitectura del Pipeline DevOps

El flujo general de la arquitectura implementada es el siguiente:

Repositorio GitHub
│
▼
GitHub Actions (CI)
│
├── SonarQube (análisis de calidad de código)
└── Snyk (análisis de vulnerabilidades)
│
▼
Jenkins (CD)
│
▼
Docker Build
│
▼
Kubernetes (Minikube Deployment)
│
▼
Prometheus (recolección de métricas)
│
▼
Grafana (visualización de métricas)


Este flujo automatiza completamente la validación, construcción, despliegue y monitoreo de la aplicación.

---

# Herramientas Utilizadas

## GitHub

GitHub se utiliza como repositorio central del código fuente y como plataforma de integración con herramientas de automatización.

Funciones principales:

- Control de versiones del proyecto
- Gestión del código fuente
- Integración con pipelines CI/CD

Repositorio del proyecto:
https://github.com/jrojas-pena/Fundamentos-DevOps


---

## GitHub Actions

GitHub Actions implementa el proceso de Integración Continua (CI). Cada vez que se realiza un push al repositorio se ejecuta automáticamente un workflow.

El workflow realiza las siguientes tareas:

1. Descarga del código fuente
2. Instalación de dependencias
3. Análisis de calidad de código con SonarQube
4. Análisis de vulnerabilidades con Snyk

Archivo de configuración:
.github/workflows/ci.yml

### Evidencia del Pipeline CI

<img width="2504" height="1206" alt="image" src="https://github.com/user-attachments/assets/c0293ff9-ea04-4e85-bca1-468ca890aab0" />


---

## SonarQube

SonarQube es una herramienta de análisis estático que permite identificar problemas de calidad en el código.

Permite detectar:

- Code smells
- Bugs potenciales
- Vulnerabilidades de seguridad
- Problemas de mantenibilidad

El análisis se ejecuta automáticamente dentro del pipeline de GitHub Actions.

### Evidencia del análisis SonarQube

<img width="2163" height="1176" alt="image" src="https://github.com/user-attachments/assets/98be6fd0-44d3-4051-8d11-01817afec1ea" />

---

## Snyk

Snyk es una herramienta de seguridad que detecta vulnerabilidades en dependencias de software.

En este proyecto analiza:

- Dependencias definidas en `package.json`
- Vulnerabilidades conocidas en librerías
- Recomendaciones de actualización

### Evidencia del análisis de seguridad

<img width="2230" height="717" alt="image" src="https://github.com/user-attachments/assets/28192fe8-2f51-4625-8c75-1048354377f3" />


---

## Jenkins

Jenkins se utiliza para implementar el proceso de Entrega Continua (CD).

El pipeline de Jenkins realiza las siguientes tareas:

1. Clonar el repositorio
2. Instalar dependencias
3. Ejecutar pruebas automatizadas
4. Construir la imagen Docker
5. Desplegar la aplicación en Kubernetes

Archivo utilizado:
Jenkinsfile

### Evidencia del pipeline Jenkins

<img width="2534" height="1210" alt="image" src="https://github.com/user-attachments/assets/f7dabebf-0deb-45c4-bcee-f9df5c8cbfa8" />


---

# Monitoreo del Sistema

Para garantizar la observabilidad del sistema se implementó un stack de monitoreo basado en Prometheus y Grafana.

---

## Prometheus

Prometheus es una herramienta de monitoreo que recolecta métricas del sistema y de los contenedores ejecutándose en Kubernetes.

Permite medir:

- Uso de CPU
- Consumo de memoria
- Estado de los pods
- Estado de los nodos del cluster

Prometheus fue instalado mediante Helm utilizando el chart:

kube-prometheus-stack


---

## Grafana

Grafana permite visualizar las métricas recolectadas por Prometheus mediante dashboards interactivos.

Los dashboards permiten observar:

- Uso de CPU del cluster
- Consumo de memoria
- Estado de pods
- Rendimiento de contenedores

### Evidencia de dashboards

<img width="2149" height="1217" alt="image" src="https://github.com/user-attachments/assets/d95269d9-002b-40a5-a899-9cce7b6db7bc" />

<img width="2123" height="752" alt="image" src="https://github.com/user-attachments/assets/e4b6a6a5-b74e-46c6-bf26-12a0ed076155" />

<img width="2148" height="1119" alt="image" src="https://github.com/user-attachments/assets/68715210-8bba-4afa-8519-544920936a93" />

<img width="2130" height="1071" alt="image" src="https://github.com/user-attachments/assets/ed7011f1-be15-4b6a-952d-8104125384fa" />

<img width="2154" height="1136" alt="image" src="https://github.com/user-attachments/assets/a98a2648-9513-4deb-9c0a-c9c2b4c6cdaa" />

<img width="2141" height="1131" alt="image" src="https://github.com/user-attachments/assets/41597ed5-924a-4541-b40b-9ba3d8a6dced" />

<img width="2135" height="1095" alt="image" src="https://github.com/user-attachments/assets/2b54e185-e72b-49f2-bf9f-0f545cb91fce" />


---

# Flujo del Pipeline CI/CD

El pipeline completo funciona de la siguiente manera:

1. El desarrollador realiza cambios en el código.
2. Los cambios se envían al repositorio en GitHub.
3. GitHub Actions ejecuta el pipeline de CI.
4. Se ejecutan los análisis de SonarQube y Snyk.
5. Jenkins ejecuta el pipeline de CD.
6. Se construye la imagen Docker.
7. Kubernetes actualiza el Deployment de la aplicación.
8. Prometheus recolecta métricas del sistema.
9. Grafana visualiza las métricas en dashboards.

---

# Eficiencia Operativa

La implementación de un pipeline CI/CD permite mejorar la eficiencia operativa del desarrollo de software.

Beneficios principales:

- Automatización del proceso de integración y despliegue
- Identificación temprana de errores y vulnerabilidades
- Reducción de errores humanos
- Entrega más rápida de nuevas versiones
- Monitoreo continuo del sistema

---

# Conclusión

Este proyecto demuestra la integración de múltiples herramientas DevOps para construir un pipeline completo de CI/CD con capacidades de seguridad y monitoreo.

La combinación de GitHub Actions, Jenkins, Docker y Kubernetes permite automatizar el ciclo completo de desarrollo y despliegue. Adicionalmente, herramientas como SonarQube y Snyk permiten garantizar la calidad y seguridad del código, mientras que Prometheus y Grafana proporcionan visibilidad sobre el estado del sistema.

Este enfoque permite mejorar la confiabilidad del software, acelerar el proceso de entrega y mantener la estabilidad del sistema mediante monitoreo continuo.








