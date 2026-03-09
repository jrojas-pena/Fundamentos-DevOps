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
            steps {
                sh '''
                  docker run --rm \
                  -v "$PWD":/workspace \
                  -w /workspace \
                  node:22-alpine \
                  sh -c "npm ci && npm test"
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t fundamentos-devops:2.0 .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl rollout restart deployment fundamentos-devops'
                sh 'kubectl rollout status deployment fundamentos-devops'
            }
        }
    }
}
