pipeline {
    agent {
    docker {
        image 'node:20.9.0-alpine3.18'
    }

    stages {
        stage('One') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Two') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Three') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Files') {
            steps {
                sh 'ls -la'
            }
        }
    }
}