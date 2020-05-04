(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{326:function(s,a,n){"use strict";n.r(a);var e=n(33),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"es6-이후의-문법"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6-이후의-문법"}},[s._v("#")]),s._v(" ES6 이후의 문법")]),s._v(" "),n("p",[s._v("ES6(ECMAScript 표준의 6번째 에디션)에 새로운 기능들이 엄청 추가되었다!"),n("br"),s._v("\n모르고 쓰는 내용이 많아서 정리를 해보려 한다.")]),s._v(" "),n("h3",{attrs:{id:"_1-변수-선언-let-const"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-변수-선언-let-const"}},[s._v("#")]),s._v(" 1. 변수 선언 (let, const)")]),s._v(" "),n("p",[s._v("ES5에서 변수를 선언할 수 있는 키워드는 "),n("code",[s._v("var")]),s._v(" 였다."),n("br"),s._v("\n세 키워드에 차이점을 알아보자.")]),s._v(" "),n("p",[n("strong",[s._v("값의 변경이 필요한 경우 let")]),s._v("을 사용하고 "),n("strong",[s._v("변화가 필요없는 상수로 사용 될 경우 const")]),s._v("로 선언한다.")]),s._v(" "),n("ul",[n("li",[s._v("var는 변수 선언할 때 사용한 이름으로 다시 선언할 수 있다.")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('var temp = "v_v";\nconsole.log(temp); // v_v\nvar temp = "o_o";\nconsole.log(temp); // o_o\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("let, const는 사용한 이름으로 다시 선언할 수 없다."),n("br"),s._v("\n또, const는 변수를 선언할 때 초기값이 없으면 에러가 발생한다.")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('let temp = "은지";\nlet temp = "짱";\n// Uncaught SyntaxError: Identifier \'temp\' has already been declared\n\nconst temp2;\n// Uncaught SyntaxError: Missing initializer in const declaration\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_2-기본-매개-변수-default-parameter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-기본-매개-변수-default-parameter"}},[s._v("#")]),s._v(" 2. 기본 매개 변수 (Default Parameter)")]),s._v(" "),n("p",[s._v("함수 매개변수에 기본값을 지정해 줄 수 있다.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("function test(num = 10, id = 80, name = '은지') {\n...\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_3-템플릿-리터럴-template-literal"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-템플릿-리터럴-template-literal"}},[s._v("#")]),s._v(" 3. 템플릿 리터럴 (Template literal)")]),s._v(" "),n("p",[s._v("문자열 안에 "),n("code",[s._v("${NAME}")]),s._v(" 이라는 구문을 사용해서 간단히 처리할 수 있다.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const first_name = "shim";\nconst last_name = "eunji";\n\nconsole.log(`제 이름은 ${first_name} ${last_name} 입니다`);\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_4-비구조화-할당-destructuring-assignment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-비구조화-할당-destructuring-assignment"}},[s._v("#")]),s._v(" 4. 비구조화 할당 (Destructuring Assignment)")]),s._v(" "),n("p",[s._v("객체안에 필드를 손쉽게 꺼내 변수로 대입할 수 있는 문법이다.")]),s._v(" "),n("h4",{attrs:{id:"es5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es5"}},[s._v("#")]),s._v(" ES5")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('var data = {\n    name : "eunji",\n    age : 22\n}\n\nvar name = data.name;\nvar age = data.age;\n\nconsole.log(name, age);\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h4",{attrs:{id:"es6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[s._v("#")]),s._v(" ES6")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const data = {\n    name : "eunji",\n    age : 22\n}\n\nlet {name, age} = data;\n\n// 배열에서의 사용\nconst languages = ["Javascript", "Python", "Java", "C#"];\nconst [first, second, third] = languages;\n\nconsole.log(first, second, third);\n//Javascript Python Java\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("필요한 필드만 추출하여 별도의 변수로 대입하는 방식이다.")]),s._v(" "),n("h3",{attrs:{id:"_5-향상된-객체-리터럴-enhanced-object-literals"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-향상된-객체-리터럴-enhanced-object-literals"}},[s._v("#")]),s._v(" 5. 향상된 객체 리터럴 (Enhanced Object Literals)")]),s._v(" "),n("h4",{attrs:{id:"es5-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es5-2"}},[s._v("#")]),s._v(" ES5")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('var name = "eunji"\'\nvar age = 22\n\nvar data = {\n    name : name.\n    age : age,\n    getName : function() {\n        return this.name\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h4",{attrs:{id:"es6-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es6-2"}},[s._v("#")]),s._v(" ES6")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const name = "eunji"\'\nconst age = 22;\n\nconst data = {\n    name,\n    age, \n    getName() {\n        return this.name\n    }\n};\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("변수명으로 속성 이름을 지정할 수 있다. "),n("code",[s._v("name : name")]),s._v(" 대신 "),n("code",[s._v("name")]),n("br"),s._v(" "),n("code",[s._v("function")]),s._v(" 키워드가 없어져 간결하게 쓸 수 있다.")]),s._v(" "),n("h3",{attrs:{id:"_6-화살표-함수-arrow-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-화살표-함수-arrow-functions"}},[s._v("#")]),s._v(" 6. 화살표 함수 (Arrow Functions)")]),s._v(" "),n("p",[s._v("함수를 선언할 때 "),n("code",[s._v("function")]),s._v(" 키워드를 사용했다. ES6부터는 화살표 함수 문법을 지원한다.\n화살표 함수는 항상 익명 함수이며, "),n("code",[s._v("this")]),s._v("의 값을 현재 문맥에 바인딩 시킨다.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('const user = () => {\n    console.log("user Function");\n}\nuser();\n\nconst sum = (a,b) => (a+b)\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("파라미터를 1개만 받을 때는 괄호를 생략할 수 있고,"),n("br"),s._v("\n간단한 표현식을 반환할 때는 리턴을 생략할 수 있다.")]),s._v(" "),n("h3",{attrs:{id:"_7-전개-연산자-spread-operator"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-전개-연산자-spread-operator"}},[s._v("#")]),s._v(" 7. 전개 연산자 (spread operator)")]),s._v(" "),n("p",[s._v("점 새개 "),n("code",[s._v("(...)")]),s._v(" 로 이루어져 있는 연산자다.")]),s._v(" "),n("h4",{attrs:{id:"배열의-내용-조합"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#배열의-내용-조합"}},[s._v("#")]),s._v(" 배열의 내용 조합")]),s._v(" "),n("p",[s._v("기존 "),n("code",[s._v("concat")]),s._v(" 메서드를 사용한 코드를 훨씬 간결하게 작성할 수 있다.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("const a = [1,2,3];\nconst b = [4,5];\n\nconst c = [...a, ...b];\n\nconsole.log(c); // [1,2,3,4,5]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_8-클래스-classes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-클래스-classes"}},[s._v("#")]),s._v(" 8. 클래스 (Classes)")]),s._v(" "),n("p",[s._v("기존 프로토타입(prototype) 기반보다 명확하게 클래스를 정의할 수 있다.")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('class Animal {\n    constructor(name, age) {\n        this.name = name\n        this.age = age\n    }\n\n    get name() {\n        return this.name\n    }\n\n    set name(name) {\n        this.name = name\n    }\n\n    print() {\n        console.log(`Name : ${this.name}`)\n    }\n}\n\nlet animal = new Animal("토끼", 5);\nanimal.print();\nanimal.setName("줄무늬가 있는 토끼");\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);