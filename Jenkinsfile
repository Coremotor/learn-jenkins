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
//        SSH_CLOUD = credentials('ssh_cloud')
    }

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
                sh 'echo VITE_SOME_KEY=${VITE_SOME_KEY} > .env'
                sh 'echo CUSTOM_SOME_KEY=${CUSTOM_SOME_KEY} >> .env'
                sh 'yarn build'
                sh 'rm .env'
            }
        }

        stage('Files') {
            steps {
                sh 'ls -la ./dist'
            }
        }
    }
}

node {
    withCredentials([string(credentialsId: 'ssh_cloud', variable: 'SSH_CLOUD')]) {
        def remote = [:]
        remote.name = 'root'
        remote.host = '185.182.110.169'
        remote.user = 'root'
        remote.password = '$SSH_CLOUD'
        remote.allowAnyHosts = true
        stage('Remote SSH') {
            sshPut remote: remote, from: 'dist/assets', into: '../usr/share/nginx/html/.', override: true
            sshPut remote: remote, from: 'dist/index.html', into: '../usr/share/nginx/html/.', override: true
        }

    }

}