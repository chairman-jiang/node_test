module.exports = {
  apps : [{
    name: 'testpm2',
    script: 'index.js',
    watch: true,
    "env": {
      "NODE_ENV": "development"
    },
    "env_production" : {
       "NODE_ENV": "production"
    }
  }],

  deploy : {
    production : {
      user : 'contos',
      host : '49.232.100.47',
      ref  : 'origin/master',
      repo : 'git@github.com:chairman-jiang/node_test.git',
      path : '/var/project/nodejs_test',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
