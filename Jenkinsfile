pipeline {
    agent any

    environment {
        IMAGE_NAME = "fundamentos-devops"
        IMAGE_TAG = "2.0"
        DEPLOYMENT = "fundamentos-devops"
        CONTAINER = "fundamentos-devops"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/jrojas-pena/Fundamentos-DevOps.git'
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:22-alpine'
                    reuseNode true
                }
            }
            steps {
                sh 'npm ci'
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'minikube image build -t fundamentos-devops:2.0 .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl set image deployment/fundamentos-devops fundamentos-devops=fundamentos-devops:2.0'
                sh 'kubectl rollout status deployment/fundamentos-devops'
            }
        }
    }
}
