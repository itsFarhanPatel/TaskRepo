pipeline {
    agent any
    environment {
        registry = "docker.io"
        dockerImage = "itsfarhanpatel/image-2"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/itsFarhanPatel/TaskRepo.git'
            }
        }

        stage('Build Docker image') {
            steps {
                script {
                    dockerImage = docker.build("${registry}/${dockerImage}")
                }
            }
        }

        stage('Push Docker image') {
            steps {
                script {
                    docker.withRegistry('', 'docker-credentials') {
                        dockerImage.push('latest')
                    }
                }
            }
        }

       stage('Deploy Docker Container') {
            steps {
                    sh 'docker run -d -p 3000:3000 itsfarhanpatel/image-2 '
                }
            }
        }
}
