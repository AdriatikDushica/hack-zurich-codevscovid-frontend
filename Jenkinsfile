pipeline {
  agent {
    docker {
      image 'node:14-alpine'
    }

  }
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh 'CI=true npm run build'
          }
        }

        stage('Test') {
          steps {
            sh 'CI=true npm test'
          }
        }

      }
    }

  }
}