## Cerberus
![](https://cdn-icons-png.flaticon.com/128/1430/1430151.png)
----------

#### Before installation

###### You must have installed on your machine :
- nodeJS version > 14 
- npm latest version
- latest java jdk
- latest chrome browser
- latest docker engine

#### How to run test  ?
----------

This test framework is based on **codeceptJS**, to better understand all the project you can read the official documentation on https://codecept.io/

######  Install dependencies
```bash
npm install
```

######  Run specific test
```bash
./node_modules/.bin/codeceptjs run --grep @basic --steps
```
The **grep** argument run a test with a specific tag, in the above example @basic

By default codeptJS run the test on your chrome browser and manage selenium and chrome driver library. In order to work you need : 
- java jdk
- latest chrome version (version > 103)

Howerver if you don't want to run selenium on your computer, you can easily use selenium docker instead. (See below run test in docker)

####  Run test in docker
----------

```bash
docker-compose -f docker-compose-selenium.yml up
```
To **start** the docker server

```bash
SELENIUM_PORT=4445 ./node_modules/.bin/codeceptjs run --grep @basic --steps
```
To **run test** with selenium, just change the selenium port environment variable

If you want to start the docker server with several chrome nodes, you need to remove **ports** section from **chrome** service in **docker-compose-selenium.yml** , then :

```bash
docker-compose -f docker-compose-selenium.yml up --scale chrome=<number>

```
to start the docker server with **number** of chrome nodes

```bash
docker-compose -f docker-compose-selenium.yml stop
```
To **stop** the docker server

####  Project configuration
----------

The configuration file of the projet.
* **codecept.conf.js**

By default the main conf file **'codecept.conf.js'** is used but we can specify an other.

The heart of codeceptJS is **helper**, it's the place where we add the global logic of test, and extend driver functionality. You can find all important information in this file. We have two helper in this project :
- **web_helper.js** (for web test)

####  Test report and screenshot
----------

Test result are printed in the console by default, but we can configure other reporting tool in codeceptJS conf.
>Default report files are stored in output folder.
- Each time a test fail, a screenshot is saved in 'output' directory

```bash
./node_modules/.bin/codeceptjs run --reporter mocha-junit-reporter
```
To run test with junit report

####  Page object model
----------

Based on cucumber best practice, the framework use gherkin file to write test. We also use page object model to organize test.
- All gherkin files are in 'features' directory
- All steps files are in 'steps' directory
- All pages files are in 'pages' directory