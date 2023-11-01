pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18'
            args '-u root'
        }
    }

    environment {
        CI = 'true'
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }

    stages {
        stage('Node version') {
            steps {
                sh 'node --version'
            }
        }
        
        stage('Build') {
            steps {
                sh 'corepack enable'
                sh 'yarn set version stable'
                sh 'yarn install'
            }
        }
        
        stage('Files') {
            steps {
                sh 'ls -la'
            }
        }
    }
}