<h1 align="center">
 Client Reminder
</h1>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 🚀 Technologies

Technologies that this application uses:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind](tailwindcss.com)
- [TRPC](https://trpc.io/)

## 💻 Getting started - Setting up your environment.

1. Clone the files.
2. Use 'npm install' in the console in order to install the dependencies.
3. Create an `.env` file in the root of the project and add the following as `key = value`: (You may find an example of this in the file .env.example)
PORT=
DB_USER=""
DB_HOST=""
DB_NAME=""
DB_PASSWORD=""
DB_PORT=

4. Set up your postgreSQL database:

Setting up your postgreSQL database doesn't have to be hard, first things first, install postgreSQL locally on your machine:

You may follow the steps written below for installation, or watch this youtube video by Socritca, which will lead you to the same result:
https://youtu.be/fZQI7nBu32M?si=xVqp0KFgMKI-94dj


- Navigate to: https://www.postgresql.org/
- Click "Download"
- Click your operating system
- Click "Download the installer"
- Download the latest build
- During installation you will be prompted with a "Select Componets" box, uncheck PGadmin4, we will install this seperately.

Once you have postgreSQL installed, you need to install a tool called PGadmin4
- Navigate to: https://www.pgadmin.org/download/
- Select your operating system
- Download the latest build (Not the current maintainer)
  
Once you have both of these successfully installed postgreSQL locally and the tool PGadmin4:
- Open PGadmin4
- Navigate to the left-hand side and drop "servers"
- Drop "PostgreSQL 16"
- Right click "Databases" and click "create" to create your local database.
- Name it "client-reminder"
- Right click your new database and select "query tool"
- Navigate to your codebase to the file postgresql > schema.sql -- Copy and paste this query into the blank box in PGadmin4
- Click the "Run" button (It looks like a play button)
- You should have successfully created a table for your database.
- To check your new table, navigate in PGadmin4 to your database > schemas > public > table
- Use the PSQL prompt to change the postgres user password. I used this tutorial https://phoenixnap.com/kb/postgres-create-user

5. Lets talk required environment variables, and break each one down:
PORT: This is the port your local server will run on, you may choose any port you wish. Do not put the port number as a string, only a number.
DB_USER: During setup you may have been prompted to pick a user, typically this is just "postgres". 
DB_HOST: Typically this is just "localhost".
DB_NAME: Here goes what you named the database, in this case "client-reminder"
DB_PASSWORD: Here goes your password you set for PGadmin4
DB_PORT: By default the postgres port is 5432, you may have used a different port when prompted during setup. 

6. You may now start the project in development mode by using the command: npm run dev, if you successfully connected to the database a success message will show in your terminal.

**Follow the steps below if you would like to work on an issue**

```bash
0. Leave a comment on the issue you would like to work on 

1. Fork the original repository (top right corner next to watch and star buttons)

2. Under the dropdown menu from the button "code" copy the HTTPS link (from your forked repository) 'https://github.com/(your username)/client-reminder.git'

3. In the place you want to clone the project, use git clone (your https link here)

4. Once you have the project open in VSCODE use 'git remote add upstream  https://github.com/ChrisMunozCodes/client-reminder.git' in the terminal, this will track the main repository 

5. You can now use 'git fetch upstream' in the terminal to see a list of the different branches.

6. Use 'git checkout -b branch-name' replace branch-name with your branch. This will create a new branch for you to work within

7.. You can now use git add . & git commit -m '' 

8. Use 'git push -u origin a-descriptive-branch-name' replace a-descriptive-branch-name with your branch name (this will push all your code)

9. Now go back to your github and a button will appear that prompts you to make a pull request
```

# Things to add (Wish list)

---
