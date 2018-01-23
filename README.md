# debug-memory-leak

```sh
npm i
PORT=7001 node --inspect index.js
```

Open another terminal, enter ```public dir```, start HTTP server on port ```7002```  
take http-server npm as an example  
```sh
npm i -g http-server
cd public
http-server -p 7002
```

Since egg.js launchs server processes, so in the console you'll see more than one remote debugging ports, such as 9229/9230.
When connecting with Chrome devtools, choose the right one: app_worker.js.  

Visit http://${your-ip-or-host}/axios

```
refresh browser
click "Collect garbage" in devtools memory panel
take snapshot in devtools memory panel
```
Repeating the steps above some times, you will see the memory consumptions increase continuously.  

Try to edit ```app/controller/home.js``` with
* set ```cancelToken``` to: ```null```, global shared one, separated ones
* get ```result.html``` or ```result.json```

Maybe the results change according to different combinations.
