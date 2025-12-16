module.exports = {
  apps: [
    {
      name: "docs_7",
      script: "npm",
      args: "run start",
      cwd: "/var/www/docs_7_next",
      env: {
        NODE_ENV: "production",
        PORT: 3001
      }
    }
  ]
};