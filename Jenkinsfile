pipeline {
  agent {
    docker {
      image 'node:14-alpine'
    }

  }
  stages {
    stage('Dependencies') {
      steps {
        sh 'npm i'
      }
    }

  }
}