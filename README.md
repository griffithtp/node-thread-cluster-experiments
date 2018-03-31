NodeJS experiments
===
This is an experimental repository to play with threads, get some understanding of some of NodeJS internals, base modules, event loop, and cluster options.

NodeJS relies on V8 engine and libuv
V8 used to interpret and execute JS
libuv used for accessing filesystem and some aspect of concurrency

## Threads
Unit of instructions waiting to be executed by cpu.
Scheduling controlled by OS which also defined the order of threads to be executed.
By default, NodeJS ThreadPool has 4 threads managed by libuv.

`$ node threads.js`

## NodeJS cluster
Cluster manager responsible for creating Worker instances
Each cluster has its own thread pool, default to 4 threads

`$ node index_cluster.js`

## pm2
```
$ npm install -g pm2

$ pm2 start index_classic.js -i 0
$ pm2 list
$ pm2 monit
$ pm2 delete index_classic.js
```

## Webworker-threads module
```
$ npm i —save webworker-threads
$ node index.js
```
