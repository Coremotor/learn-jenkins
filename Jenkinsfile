pipeline {
    agent {
        docker {
            image 'node:20.9.0-alpine3.18'
            args '-u root'
        }
    }

    environment {
        VITE_SOME_KEY = credentials('vite_some_key')
        VITE_TOKEN = credentials('vite_token')
        CUSTOM_SOME_KEY = 'CUSTOM_SOME_KEY - value'

    }

    stages {
        stage('Node version') {
            steps {
                sh 'node --version'
            }
        }

        stage('install dependencies') {
            steps {
                sh "chmod +x ./scripts/setup.sh"
                sh './scripts/setup.sh'
            }
        }

        stage('Build app') {
            steps {
                sh 'yarn build'
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
        remote.password = SSH_CLOUD
        remote.allowAnyHosts = true
        stage('Remote SSH') {
            sshPut remote: remote, from: 'dist/assets', into: '../usr/share/nginx/main/'
            sshPut remote: remote, from: 'dist/index.html', into: '../usr/share/nginx/main/'
            sshPut remote: remote, from: 'dist/icon.svg', into: '../usr/share/nginx/main/'
        }

    }

}