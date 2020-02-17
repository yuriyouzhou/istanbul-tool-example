# How to Generate Extradata Field in Genisis File for istanbul network

## 1. Provide node keys.
In this example, the keys are put under `./7node-nodekeys`.

## 2. Generate the node account based on the node keys.
Using scripts `./convert.js`. 

The following are the list of 7 node address based on node key:

```txt
# address list for 7 nodes (generated from nodekey):
# 0xd8dba507e85f116b1f7e231ca8525fc9008a6966
# 0x6571d97f340c8495b661a823f2c2145ca47d63c2
# 0xe36cbeb565b061217930767886474e3cde903ac5
# 0xf512a992f3fb749857d758ffda1330e590fa915e
# 0xb912de287f9b047b4228436e94b5b78e3ee16171
# 0x8157d4437104e3b8df4451a85f7b2438ef6699ff
# 0xb131288f355bc27090e542ae0be213c20350b767
```



## 3. Generate istanbul genersis file by using istanbul-tools
Using the following command to generate the extraData field using the first four node:

```shell
> ./bin/istanbul extra encode --config 4node-config.toml
< Encoded Istanbul extra-data: 0x0000000000000000000000000000000000000000000000000000000000000000f89af85494d8dba507e85f116b1f7e231ca8525fc9008a6966946571d97f340c8495b661a823f2c2145ca47d63c294e36cbeb565b061217930767886474e3cde903ac594f512a992f3fb749857d758ffda1330e590fa915eb8410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0
```



