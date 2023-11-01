pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18'
            args '-u root'
        }
    }

    environment {
        VITE_SOME_KEY = 'VITE_SOME_KEY - value'
        CUSTOM_SOME_KEY = 'CUSTOM_SOME_KEY - value'
    }

    stages {
        stage('Node version and jenkins environment') {
            steps {
                sh 'node --version'
                echo "VITE_SOME_KEY is ${VITE_SOME_KEY}"
                echo "CUSTOM_SOME_KEY is ${CUSTOM_SOME_KEY}"
                sh 'printenv'
            }
        }

//        stage('install dependencies') {
//            steps {
//                sh 'corepack enable'
//                sh 'yarn set version stable'
//                sh 'yarn install'
//            }
//        }
//
//        stage('Build app') {
//            steps {
//                sh 'yarn build'
//            }
//        }

        stage('Files') {
            steps {
                sh 'echo VITE_SOME_KEY=${VITE_SOME_KEY} > .env'
                sh 'echo CUSTOM_SOME_KEY=${CUSTOM_SOME_KEY} >> .env'
                sh 'cat .env'
            }
        }
    }
}