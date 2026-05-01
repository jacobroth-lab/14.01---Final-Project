# CS208 Full Stack Final Project

- Name: Jacob Roth
- Github: https://github.com/jacobroth-lab
- Term: Spring 2026

# Project Details

This project aims to build on upon the request of building a page for Downtown Donuts that is trying to increase the amount of users and allows easy access to doordash and ubereats. This depends heavily on the sql database and needs the following steps in order to run this project.

# How to Install Database

To set up and install the database you need to run the `install_db.sh` script in the terminal. This script will install MariaDB and start the server running.

```bash
./setup_scripts/install_db.sh
```

- Switch to unix_socket authentication [Y/n] n
- Change the root password? [Y/n] Y
- Set the password to 12345
- Remove anonymous users? [Y/n] Y
- Disallow root login remotely? [Y/n] Y
- Remove test database and access to it? [Y/n] Y
- Reload privilege tables now? [Y/n] Y

# Creating Database Tables

Create the initial tables by running the following command:

```bash
sudo mysql -u root -p < ./setup_scripts/create_demo_table.sql
```

# Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

# Run the Application

Start the application using the following command:

```bash
npm start
```

# Access the Application

On Codespaces, you can access the application by forwarding port 3000. Open the
forwarded port in your browser to view the application.
