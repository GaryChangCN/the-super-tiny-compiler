'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 今天我们准备一起写个编译器。但是不是其他的一些编译器。。。是一个超级小巧的编译器！这个编译器小到
 * 如果你删除这个文件所有注释的话只剩不到200行代码
 *
 * 我们准备吧一些 类似于 lisp 语法的函数编译成类似于 c 语法的函数
 *
 * 如果你对他们其中一个或者全部了解，我下面将给你们一个简洁
 *
 * 如果我们有两个函数 `add` 和 `substract` 我们书写方式如下
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 是不是很简单
 *
 * 确切来说我们要编译的几部是完整的 lisp 或者 c 的语法，但是这个编译器还有有足够的语法去证明其是一个
 * 现代的编译器
 */

/**
 * 大部分编译器把编译过着三个主要步骤：解析、转换、生成代码
 *
 * 1. *解析* 把初始代码用更抽象的方式来表达
 *
 * 2. *转换* 把抽象的语法变成编译器想要的样子
 *
 * 3. *代码生成* 根据转换后的代码来生成新的代码
 */

/**
 * 解析过程
 * -------
 *
 * 解析过程通过分为两个阶段：词法分析和语法分析
 *
 * 1. *词法分析* 把初始代码分解成很多部分，每个 token 被用标记器或者词法分析器来标识
 *
 *    token 是一段由用来描述把语法分割成块后的小对象组成的数组。他可以是数字、标记、
 *    标点符号、操作符或者其他东西
 *
 * 2. 语法分析* 把 token 重新格式化成语法段互相之间的关系可以被表示的样子，可以理解为
 *    抽象语法树的中间态
 *
 *    抽象语法树（AST) 是一种已递归的方式来表示代码同时又能展示出代码的巨量信息。
 *
 * 例如下面的语法
 *
 *   (add 2 (subtract 4 2))
 *
 * Tokens 会类似于下面代码
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * 抽象语法树类似于以下代码
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * 转换
 * --------------
 *
 * 编译器的下一个阶段是转换。这阶段会再次改变把上一步得到的的抽象语法树，他可以操作相同的语言
 * 的抽象语法书或者把其翻译成一个完整的新语言
 *
 * 下面我们来看我们将如何转换一个抽象语法树
 *
 * 你可以已经注意到我们的抽象语法树看起来非常简单。其中每抽象语法树节点都有 type 属性。每个
 * 节点都声明了一个属性来描述这个独立的节点
 *
 * 我们现在有个类型为 NumberLiteral 的节点：
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * 或者有个类型为 CallExpression 的节点：
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...nested nodes go here...],
 *   }
 *
 * 当转换抽象语法树的时候，我们可以通过 添加/删除/替换 节点的属性来操作节点。
 * 我们可以添加新的节点，删除节点，或者我们我们通过当前抽象语法树来创建一个新的
 * 抽象语法树。
 *
 * 一旦我们选择好了要编译成目标语言，我们就要专注于创建一个针对这个目标语言的特殊的
 * 抽象语法树。
 *
 * 遍历
 * ---------
 *
 * 我了给这些节点创建个导航，我们需要使用深度优先遍历这个抽象语法树。
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * 所以，对于上面的抽象语法树，我们应该这样做：
 *
 *   1. Program - 从抽象语法树的最顶层开始
 *   2. CallExpression (add) - 移到 Program 的 body 的第一个元素上
 *   3. NumberLiteral (2) - 移动到 CallExpression's 的 params 第一个参数元素上
 *   4. CallExpression (subtract) - 移动到 CallExpression's 的第二个参数元素上
 *   5. NumberLiteral (4) - 移动到 CallExpression's 第一个参数元素上
 *   6. NumberLiteral (2) - 移动到 CallExpression's 第二个参数元素上
 *
 * 如果我们直接操作抽象语法树而不是单独创建一个抽象语法树,我们可能需要说明这里所有的首相概念。
 * 但是对于我们来说 “参观” 一遍这些节点就足够了。
 *
 * 这里我用 “参观” 这个词的原因是这里是一种代表操作对象结构的元素的一种方法
 *
 * 参观者
 * --------
 *
 * 这里我们有个基础的想法，创建一个 “参观者” 对象，其包含从不同节点类型传过来的方法
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 当我们遍历这个抽象语法树的时候，我们可以随时通过 “参观者” 调用方法无论何时我们 “进入” 
 * 相匹配的节点
 *
 * 为了使上述行为生效，我们需要传入 node 节点和 parent 节点的引用作为参数。
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * 然后我们还是需要有种方式来推出。设想一下我们的树结构是这样一种结构
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 当我们便利到最下面的时候，我们需要接触到最后的分支。当我们遍历完每个树的分支后
 * 我们需要从中退出。所以，向下遍历我们需要 “进入”，返回时候我们需要 “退出”。
 *
 *   -> Program (enter)
 *     -> CallExpression (enter)
 *       -> Number Literal (enter)
 *       <- Number Literal (exit)
 *       -> Call Expression (enter)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *          -> Number Literal (enter)
 *          <- Number Literal (exit)
 *       <- CallExpression (exit)
 *     <- CallExpression (exit)
 *   <- Program (exit)
 *
 * 为了支持以上，我们 “参观者” 最终结果如下：
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * 代码生成
 * ---------------
 *
 * 这个编译器最后一部分是代码生成。有些时候编译器会在转换的过程里面做这件事，但是大部门代码生成器
 * 仅仅意味着把我们的抽象语法树编程最终代码
 *
 * 代码生成器可以通过很多种方式来工作，一些编译器会重复使用早前的 “token” ，另一些会生成一个代码
 * 片段来代表这段代码，然后可以线性的打印出这些节点，但是这里我可以告诉大家，我们会使用我们刚刚创建
 * 的抽象语法树来生成代码
 *
 * 我们的代码生成器会有效的 “打印” 抽象语法树上所有不同类型的节点，同时也会递归打印出这些代码变为
 * 字符串。
 */

/**
 * 之后，我们就可以开始了，熊这个编译器的每个部分开始。
 *
 * 事实上，不是所有的编译器都和我这里叙述的编译器类似。每个编译器都有不同的目的，所以他们可能有
 * 比我叙述的编译器拥有更多的步骤。
 *
 * 但是现在你可以战歌一个更高的角度来概括一个编译器会长什么样。
 *
 * 我已经标书这么多了，现在你准备好去写一个自己的编译器了吧？
 *
 * 开个玩笑，我还是会在这里和你一起完成这个编译器的 :P
 *
 * 所以，我们开始吧。。。
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 * ============================================================================
 */

/**
 * 我们开始解析过程的第一阶段，使用 tokenizer 词法分析。
 *
 * 这一步要做的是字符串变成每项由 token 组成的数组
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// 我们从接受一个名为 input 的字符串开始，之后将设置两个东西
function tokenizer(input) {

  // `current` 变量用来追踪我们现在在代码中的的位置，类似于光标
  let current = 0;

  // `tokens` 数组用来存贮我们的 token
  let tokens = [];

  // 我们从创建一个 while 循环开始，然后按着我们需要的长度来递增 current 变量
  //
  // 我们这样做的原因是 current 增加可能是多次的并且由于我们 token 的长度是任意的，所以
  // 其增加的长度也是任意的。
  while (current < input.length) {

    // 我们同事来存贮 input 字符串的当前值
    let char = input[current];

    // 首先要租的事情是检查圆括号，之后将会被用到 `CallExpression` 中。
    // 我们要检查是不是有左边开括号
    if (char === '(') {

      // 如果是的，我们会把一个有 key 为 type 值为 paren 和 key 为 value 值为 (
      // 的对象推入到 tokens 中
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // 之后递增 `current`
      current++;

      // 然后进入下次循环
      continue;
    }

    // 之后我们要寻找右括号，然后重复上文的动作
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // 移动后我们将检查空格及空白字符串，若匹配到则不作任何处理，光标继续后移
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 之后的 token 类型是 number 。这和我们刚刚处理的不同，因为我们需要截取一个整个 number 
    // 来作为 token
    //
    //   (add 123 456)
    //        ^^^ ^^^
    //        Only two separate tokens
    //
    // 所以我们重新创建一个循环，当遇到第一个 number 是婚后
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // 我们创建一个 value 字符串来储存字符
      let value = '';

      // 之后我们创建一个循环来把连续的 number 储存在 value 中并增加 current 的值
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 之后我们把 number 类型的 token 储存起来
      tokens.push({ type: 'number', value });

      // 再进行下一次循环
      continue;
    }

    // 我们同样支持用双引号包裹的字符串
    //
    //   (concat "foo" "bar")
    //            ^^^   ^^^ string tokens
    //
    // 我们先开始检查左边的双引号
    if (char === '"') {
      // 使用 value 变量来创建字符串 token
      let value = '';

      char = input[++current];

      // 之后我们会储存每个字符直到下一个双引号
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      char = input[++current];

      // 把字符串 token 储存起来
      tokens.push({ type: 'string', value });

      continue;
    }

    // 最后一中 token 类型是命名 token，其实是作为 lisp 函数名的
    //
    //   (add 2 4)
    //    ^^^
    //    Name token
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // 我们讲再次循环每个单词然后把他们储存到 value 中
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 把 name 类型保存起来，之后进入下次循环
      tokens.push({ type: 'name', value });

      continue;
    }

    // 最后如果没有匹配到任何特征，则会抛出错误
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // 最后，返回这个 tokens 数组
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                   解析器!!!
 * ============================================================================
 */

/**
 * 解析器是把刚刚得到的 token 数组解析成抽象语法树
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// 好了，我们这里定义一个 parser 函数，接受 tokens 数组
function parser(tokens) {

  // 我们再次用一个 current 变量当作指针
  let current = 0;

  // 但是这次我们用递归来代替 while 循环，所以这里我们定义了一个 walk 函数
  function walk() {

    // 早函数内部我们根据 current 指针未知来获取 token
    let token = tokens[current];

    // 现在开始把不同类型的 token 分割成不同的代码片段
    // 从 number 类型的 token 开始
    //
    // 我们检测是否有 number 类型的 token
    if (token.type === 'number') {

      // 如果检测到， 则把 current 加 1
      current++;

      // 之后我们会返回一个新的抽象语法树节点，类型为 NumberLiteral 值为 token 的值
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // 同 number 类型， string 类型会返回一个类型为 StringLiteral 新的抽象语法树节点
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // 之后我们需要寻找 CallExpressions 类型，所以我们从能匹配到左括号且类型为 paren 开始
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      // 我们将会往后移动 current 指针来跳过 括号
      token = tokens[++current];

      // 我们创建一个类型为 CallExpressions 的基础节点，之后我们将其 name 字段设置成当前 token
      // 的 value 值
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // 之后再次移动 current 指针来跳过 name token
      token = tokens[++current];

      // 现在我们希望循环每个 token 从左括号开始到右括号来作为 CallExpressions 的参数
      //
      // 现在我们进入递归之中，为了防止无限的递归调用，我们需要一个结束的标志点
      //
      // 为了解释上述，来看我们的 Lisp 代码，你可以看到 add 函数的参数是一个 number 类型和
      // 一个 CallExpressions ，并且其有自己的返回值
      //
      //   (add 2 (subtract 4 2))
      //
      // 你还会注意到我们的 tokens 数组会有很多右括号类型的 token
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //     { type: 'paren',  value: ')'        }, <<< Closing parenthesis
      //   ]
      //
      // 我们将递归调用 walk 函数来移动 current 指针直到遍历完所有的 CallExpressions

      // 所以我们创建一个 while循环，从左括号开始，直到匹配到第一个右括号才会结束
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // 我们调用 walk 函数，其会返回一个节点，我们会将这个节点推入到 node.params 中
        node.params.push(walk());
        token = tokens[current];
      }

      // 最后我们会移动 current 指针一直到右括号
      current++;

      // And return the node.
      return node;
    }

    // 同样的，如果我们没有匹配到任何类型我们也会抛出错误
    throw new TypeError(token.type);
  }

  // 现在我们开始创建抽象语法树，其会有一个类型为 program 的根节点
  let ast = {
    type: 'Program',
    body: [],
  };

  // 之后我们启动 walk 函数，把值推入到 ast 的body 中
  //
  // 之所以在 while 循环内部做这些事情，是因为有的函数不是嵌套的，可能是线性的
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // 在解析器的最后我们将返回这个抽象语法树
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * 现在我们已经得到了抽象语法树，但是我们系统能在一个 visitor 中获取到任意一个节点。我们需要
 * 一个方法当匹配到想要的节点时候会触发这个方法
 *
 *   traverse(ast, {
 *     Program(node, parent) {
 *       // ...
 *     },
 *
 *     CallExpression(node, parent) {
 *       // ...
 *     },
 *
 *     NumberLiteral(node, parent) {
 *       // ...
 *     },
 *   });
 */

// 所以我们定义了 一个 traverser 函数，其接受 ast 和 visitor 两个参数，
// 在函数内部内有两个函数
function traverser(ast, visitor) {

  // traverseArray 函数允许我们遍历完整个数组，并调用接下来定义的 traverseNode 函数
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode` 接受 node 参数 和 node 的 parent 参数，所以我们可以把两者传给 visitor
  function traverseNode(node, parent) {

    // 我们从 visitor 存在的方法开始（node 的类型）类作为 methods 变量
    let methods = visitor[node.type];

    // 其如果存在并且存在 enter 方法，则调用这个方法，并把 node 和 parent 作为参数传入
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // 之后我们讲根据不同的节点类型类做不同的事情
    switch (node.type) {

      // 在开始的网时候，我我们最顶层的是一个名为 Program 的对象，其有一个body属性来储存 
      // nodes 数组，我们调用 traverseArray 函数来把其传入进该数组
      //
      // （记住 traverseArray 函数会调用 traverseNode 函数，所以我们可以递归来遍历整个树）
      case 'Program':
        traverseArray(node.body, node);
        break;

      // 之后我们对 CallExpression 类型做相同的事情，并且返回其 参数
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // 在这里， NumberLiteral 类型和 StringLiteral 类型没有后代元素，所以不做处理
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // 同样的，没有匹配到节点类型，则会抛出错误
      default:
        throw new TypeError(node.type);
    }

    // 如果其还存在 exit 方法，我们则调用该方法并把 node 和 parent 当参数传入
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // 最后我们调用 tarverserNode 函数并传入 ast 树作为 node 参数，之所以没有 parent 参数，
  // 是因为我们从最顶层开始
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                                    转换器!!!
 * ============================================================================
 */

/**
 * 下一步，转换器，我们的转换器将通过把抽象语法树和 visitor 作为 traverse 函数参数来产生一个
 * 新的抽象语法树
 *
 * ----------------------------------------------------------------------------
 *   原始 AST                          |   转换后的 AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  (sorry the other one is longer.)  |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// 所以我们的转换器接受 lisp 的抽象语法树
function transformer(ast) {

  // 我们像以前一样创建一个有 Program 节点的新 ast
  let newAst = {
    type: 'Program',
    body: [],
  };

  // 之后我会使用一点 hack的方法，我们将使用一个名为 context 的属性在我们的父节点上然后我们可以
  // 把节点放到其父元素的的 context 上。按正常的方法，你可以把这步做的更好，但是我们的目的是把事情
  // 做的简单
  //
  // 仅仅需要记住 context 只是在新的 ast 树中对老的 ast 的引用
  ast._context = newAst.body;

  // 开始调用我们之前创建的 traverser 函数
  traverser(ast, {

    // 第一个 visitor 方法接受任何 NumberLiteral
    NumberLiteral: {
      // 我们将在 enter 方法中获取他
      enter(node, parent) {
        // 我们讲创建一个同样名为 NumberLiteral 的新街点然后推送到父元素的 context 中
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // 之后我们有 StringLiteral
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // 之后是 CallExpression
    CallExpression: {
      enter(node, parent) {

        // 我们创建一个名为 CallExpression 的新节点，其有嵌套的 Identifier
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // 之后我们将定义新的 context在原始的 CallExpression 节点，其代表着
        // expression 的参数列表，所以我们可以把新 expression 添加进参数列表
        node._context = expression.arguments;

        // 之后我们会检查父元素是不是 CallExpression
        // 如果不是的话。。。
        if (parent.type !== 'CallExpression') {

          // 我们将会用 ExpressionStatement 把 CallExpression 节点包裹起来
          // 这样做的原因是最 js 顶层的 CallExpression 时隔真实的语法声明 
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // 最后我们把 CallExpression （或 ExpressionStatement ） 推入到父元素的 context中
        parent._context.push(expression);
      },
    }
  });

  // 最后我们把这个新的抽象语法树返回即可
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            代码生成器!!!!
 * ============================================================================
 */

/**
 * 现在，让我们进入最后一步：代码生成器
 *
 * 我们的代码生成器将会递归调用自己来以正确的字符串形式打印出树的每个节点
 */

function codeGenerator(node) {

  // 我们根据节点的类型来操作
  switch (node.type) {

    // 如果遇到了 Program 节点，我们将会对其 body 中每个节点来使用代码生成器函数
    // 来输出目标代码，最后是把代码换行
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // 对于 ExpressionStatement 我们会调用代码生成器在嵌套的语法端上，并在末尾加上分号
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...因为我们希望代码能显示的好看一点)
      );

    // 对于 CallExpression 我们将会打印出其 callee 和左括号，我们讲遍历参数列表，并把每项传入到
    // 代码生成器中，并用逗号分割，最后加上右括号
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // 对于标识符，我们只需要返回其 name 即可
    case 'Identifier':
      return node.name;

    // 对于 NumberLiteral 我们只需要返回其值即可
    case 'NumberLiteral':
      return node.value;

    // 对于 StringLiteral 我们要在两端加上双引号
    case 'StringLiteral':
      return '"' + node.value + '"';

    // 最后如果我们没有匹配到任何一项，则抛出异常
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!编译器!!!!!!!!
 * ============================================================================
 */

/**
 * 完工！我们创建好了我们的编译器函数，现在我们把上述过程列出来
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // 简单的输出就好了
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!结束了!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// 现在，仅仅导出所有东西
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
