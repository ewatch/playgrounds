import { createApp } from 'vue'
import App from './App.vue'
// AWS Stuff
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports.js'

// Configure the AWS Amplify backend
Amplify.configure(aws_exports)

createApp(App).mount('#app')
