pipeline {
    agent any
    environment {
        registry = "docker.io"
     // dockerImage = "itsfarhanpatel/image-2"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/itsFarhanPatel/TaskRepo.git'
            }
        }
        stage('Build & Tag Docker Image'){
            steps{
                script {
                   withDockerRegistry(credentialsId: 'docker-credentials', toolName: 'docker') {
                            sh "docker build -t itsfarhanpatel/my-image:latest ."
                    }
               }
            }
        }
        stage('Push Docker Image'){
            steps{
                script {
                   withDockerRegistry(credentialsId: 'docker-credentials', toolName: 'docker') {
                            sh "docker push itsfarhanpatel/my-image:latest"
                    }
               }
            }
        }
        stage('Deploy Docker Container') {
            steps {
                    sh 'docker run -d -p 3000:3000 itsfarhanpatel/my-image:latest'
                }
            }
    }        
}    
