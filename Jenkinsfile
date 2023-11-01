pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18'
        }
    }
    stages {
        stage('Node version') {
            steps {
                sh 'node --version'
            }
        }
        stage('Build') {
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh './scripts/setup.sh'
            }
        }
    }
}