pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18'
            args '-u root:root'
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
                sh "chmod +x -R ${env.WORKSPACE}"
                sh './scripts/setup.sh'
            }
        }
    }
}