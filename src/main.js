'use strict';
 
require('electron-reload')(__dirname);

const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {

    //create new window

    mainWindow = new BrowserWindow({});

    //load html to app

    mainWindow.loadURL(url.format({

        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true

    }));
    
    mainWindow.maximize();

    //mainWindow.openDevTools();

    //set menu
    //Menu.setApplicationMenu(null);

});

