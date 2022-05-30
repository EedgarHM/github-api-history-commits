### Getting Started

____

There is the instructions to run this project locally.

### Prerequisites

To run this project you need to install the next things

* **npm**

* **nodejs**

* **git** 

  ````
  npm install npm@latest -g
  ````



You can install nodejs with npm if you go to the home page to node and download the latest version in the next link *https://nodejs.org/es/*

To install git you can go to the next link and download to your system *https://git-scm.com/*

### Project Installation

Below you find the instructions to run and download this project

1.- Clone de repo, open your IDE or your command console and execute the next code

````
git clone https://github.com/EedgarHM/github-api-history-commits.git
````

2.- This project has the next estructure
![image](https://user-images.githubusercontent.com/69503968/170905723-5adc7d36-326e-49e3-9aa4-c74212653528.png)
 * You need get in the first folder and execute **npm install** in your terminal
 * Get in the second folder and execute **npm install**
   * Example
   * ![image](https://user-images.githubusercontent.com/69503968/170906013-e03743a5-6ab3-4d5d-b558-536fce611b42.png)
3.- The backend project **back-history-commits** needs a token, you can get a token with the instrucctions in the section "Get Token from Github"

### Get Token from Github
To run the backend project you need a token, follow the next steps to get a token.
1.- Open your github account and go to Profile > Settings
  * ![image](https://user-images.githubusercontent.com/69503968/170906541-340eed14-79d1-4f70-a357-b56849a789ea.png)

2.- In the left menu, choice *Developer Settings* 
3.- In the next section, in the left menu choice *Personal Access Token * and rigth up choice *generate token*
![image](https://user-images.githubusercontent.com/69503968/170906815-fceca036-338b-4c42-89c3-dd535fa41749.png)
It needs your Github password to authenticate, put and continue to the next page 
4.- Put name to your token, and select your checkbox that you want.
![image](https://user-images.githubusercontent.com/69503968/170906957-6451dcf6-3cbf-4145-a6e8-8f4c7430be3c.png)

after, click in generate token
![image](https://user-images.githubusercontent.com/69503968/170907003-68621fdd-65ff-438c-8132-d89a28427177.png)

5.- Copy your token and save, we need this token to start our applicantion
![image](https://user-images.githubusercontent.com/69503968/170907096-1ab7c416-c113-4e9d-b67c-d2952b2e53cc.png)

### Run Project
1.- First one, you need open the folder *back-history-commits* in your visual studio code or your favorite IDE.
![image](https://user-images.githubusercontent.com/69503968/170907261-5b86b54d-b6b8-4796-8da2-1c3a48b65fbd.png)

2.- Open the next file in your IDE *config\globals.js*  and put your token instead of 'INSERT_HERE_YOUR_TOKEN'
![image](https://user-images.githubusercontent.com/69503968/170907574-63878883-acc6-437f-b6d1-8ecf294e94e4.png)

Here's an example: ![image](https://user-images.githubusercontent.com/69503968/170907677-c2e99e25-4e6f-43d7-b7eb-bc424d6399fc.png)

3.- Now we have the necesary to run the project, in your terminal get in the  *back-history-commits*  and run the next code *npm run dev* if you're right the terminal shows like : 
![image](https://user-images.githubusercontent.com/69503968/170907881-e2acb89a-6bfb-4ba0-b116-e09cb40616d7.png)
 if you have an error, repeat the installations steps, maybe you have a mistake.
 
 4.-  In your terminal get in the  *front-history-commits*  and run the next code *npm run dev* if you're right the terminal shows like : 
 ![image](https://user-images.githubusercontent.com/69503968/170908071-f7adb800-dc21-4516-a05b-59fea5df8fb8.png)

5.- we have everything installed, now you can go to *http://localhost:3000/* and testing the project. The simple view looks like : 
![image](https://user-images.githubusercontent.com/69503968/170908281-d9d40d43-7508-4515-bfa5-47ec0b1e3825.png)








