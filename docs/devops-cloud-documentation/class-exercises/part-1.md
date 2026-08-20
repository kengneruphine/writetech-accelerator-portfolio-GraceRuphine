# How to deploy an app to a server
This guide describe how to setup an application on a Window server

## Prerequisities

- Use a Window-based server
  
## Steps to follow
1. Login to the server using ssh. For example  
  ```bash
    ssh user@ip
  ``` 
  **Make sure you have your password and key ready**  

2. Create a folder for your files using ```mkdir folder name```
3. Copy the files from your local device to the server using any of these options
   - Use the command ```scp``` or ```rsync```
   - Drag the files to the server if you are using vscode or similar editors. 
   - Zip the files on your local machine and unzip them on the server
4. Set permissions to prevent the server from blocking the running files. 
   Run the command ```chmod 777``` or ```chown``` if setting permission does not work
5. Install dependencies:
   - For Node: run ```npm install``` or ```yarn install```
   - For Python: run ```pip``` or ```pip3```
   - For PHP: run ``` composer```
6. Start the server
   - For Node: run ```node app.js``` or ```pm2 start```
   - For Python: run ```flask run``` or ```gunicorn```
   - For PHP: run ```php artisan serve```
7. Check the logs if you get errors


