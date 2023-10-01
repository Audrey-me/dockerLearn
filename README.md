# DockerLearn Application Setup Guide

This guide will walk you through setting up the **DockerLearn** application on an Amazon EC2 instance. 
**DockerLearn** is a sample application that demonstrates how to use Docker and Docker Compose to run a multi-container application. The application consists of a frontend, backend, MongoDB, and a web-based MongoDB client (mongo-express).

## Prerequisites

Before you begin, make sure you have the following:

- An Amazon Web Services (AWS) account.
- Basic knowledge of AWS, EC2, and security groups.
- An EC2 instance launched with a public IP address, and you have downloaded the associated `.pem` private key file.

## Step 1: SSH into Your EC2 Instance

1. Open your terminal.
2. Use the `ssh` command to connect to your EC2 instance using the public IP address and the private key file you downloaded:

```bash
ssh -i /path/to/your/private-key.pem ec2-user@your-instance-ip
```
<!-- Replace `/path/to/your/private-key.pem` with the actual path to your private key file and `your-instance-ip` with your EC2 instance's public IP address. -->

## Step 2: Install Docker, Docker Compose, and Git

### Update the package manager
```bash
sudo yum update -y
```

### install Docker
```bash
sudo amazon-linux-extras install docker -y
sudo service docker start
sudo usermod -a -G docker ec2-user
```

### install Docker Compose
```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

```
OR 
```bash
sudo dnf install docker
sudo systemctl start docker
sudo usermod -a -G docker ec2-user
```

### install Git
```bash
sudo yum install git -y
```

## Step 3: Clone the DockerLearn Repository

```bash
git clone https://github.com/Audrey-me/dockerLearn.git
```

## Step 4: Run Docker Compose

### Navigate to the dockerLearn directory:
```bash
cd dockerLearn
```

### Use Docker Compose to build and start the application:
```bash
docker-compose up -d
```
<!-- The -d flag runs the application in the background. -->

## Step 5: Configure Security Group

You need to configure your security group to allow traffic to the application ports. In this example, we will allow traffic on ports 8080 (frontend), 3000 (backend), and 8081 (mongo-express).

- Open the AWS Management Console.
- Go to the EC2 dashboard.
- Select your EC2 instance.
- Scroll down to the "Security groups" section and click on the linked security group.
- In the "Inbound rules" tab, click "Edit inbound rules."
- Add the following inbound rules:
    - Type: Custom TCP Rule, Port Range: 8080, Source: 0.0.0.0/0
    - Type: Custom TCP Rule, Port Range: 3000, Source: 0.0.0.0/0
    - Type: Custom TCP Rule, Port Range: 8081, Source: 0.0.0.0/0
- Make sure to adjust the source IP ranges based on your security requirements.

## Step 6: Access the Application

You can now access the application through your browser using the public IP address of your EC2 instance:

- Frontend: http://your-public-ip:8080
- Backend: http://your-public-ip:3000
- MongoDB Express (MongoDB client): http://your-public-ip:8081

## Step 7: Use the Application

You can now access the application through your browser using the public IP address of your EC2 instance:

- Frontend: http://your-public-ip:8080
- Backend: http://your-public-ip:3000
- MongoDB Express (MongoDB client): http://your-public-ip:8081
