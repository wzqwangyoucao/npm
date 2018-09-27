require是nodejs中用于加载模块的
其加载机制以及加载文件的顺序如下

I:  eg:require('./module');
    没有进行后缀名的限定，require会自动进行添加后缀名

    1.按照js执行
    require('./module.js');

    2.按 JSON 文件解析
    require('./module.json');

    3.预编译好的 C++ 
    require('./module.node');

    4.载入目录module目录中的 package.json 中main指向的文件
    require('./module/默认文件入口.js');

    5.载入目录module中的index.js文件
    require('./module/index.js')

    否则抛出异常


II: eg:require('./module.js')
    是否该路径下有module.js文件，没有抛出异常

III: eg:require('/module.js')
    通过 / 开头：则以系统根目录开始寻找模块；


IIII: require('module')
    1.模块名字是系统模块则执行加载
    require(./node_modules/module) 能加载到模块 则执行加载
    
    2.沿着目录向上逐级执行require(上级目录/node_modules/module)，如果能加载到模块 则执行加载
