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
    withCredentials([
        string(credentialsId: 'ssh_cloud', variable: 'SSH_CLOUD'),
        string(credentialsId: 'ssh_user', variable: 'SSH_USER'),
        string(credentialsId: 'ssh_host', variable: 'SSH_HOST')
    ]) {
        def remote = [:]
        remote.name = SSH_USER
        remote.host = SSH_HOST
        remote.user = SSH_USER
        remote.password = SSH_CLOUD
        remote.allowAnyHosts = true
        stage('Remote SSH') {
            sshPut remote: remote, from: 'dist/assets', into: '../usr/share/nginx/main/'
            sshPut remote: remote, from: 'dist/index.html', into: '../usr/share/nginx/main/'
            sshPut remote: remote, from: 'dist/icon.svg', into: '../usr/share/nginx/main/'
        }

    }

}