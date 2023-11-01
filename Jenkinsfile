pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18'
//            args '-u root'
        }
    }

//    environment {
//        CI = 'true'
//        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
//    }

    stages {
        stage('Node version') {
            steps {
                sh 'node --version'
            }
        }

        stage('install dependencies') {
            steps {
                sh 'corepack enable'
                sh 'yarn set version stable'
                sh 'yarn install'
            }
        }

        stage('Build app') {
            steps {
                sh 'yarn build'
            }
        }

        stage('Files') {
            steps {
                sh 'ls -la'
            }
        }
    }
}