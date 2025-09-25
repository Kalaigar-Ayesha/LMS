pipeline {
    agent any

    tools {
        nodejs 'node18'
    }

    environment {
        IMAGE_NAME = "lms-frontend"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/Kalaigar-Ayesha/LMS.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint and Build') {
            steps {
                sh 'npm run lint || true'   // run lint, don't fail
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:${DOCKER_TAG} ."
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker stop lms-container || true'
                sh 'docker rm lms-container || true'
                sh "docker run -d --name lms-container -p 3000:80 ${IMAGE_NAME}:${DOCKER_TAG}"
            }
        }
    }

    post {
        success {
            echo '✅ Build and Deploy Successful!'
        }
        failure {
            echo '❌ Build failed.'
        }
    }
}
