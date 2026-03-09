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


