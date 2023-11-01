pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh './scripts/setup.sh'
            }
        }
    }
}