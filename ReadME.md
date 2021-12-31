###  Front-end Technologies

- HTML
- CSS
- JavaScript
- Bootstrap  framework
- Angular  framework
- ReactJs	

### Backend Technologies

- Node.js
	- express.js
	- nodemoon
	- cors
	- dotenv
- PHP
- C#
- Java
- Python

###  Databases

- MongoDb
- Mysql
- SQLite
- Firebase
- Postgressql
- Oracle

+ VCS  ( Source code Management)
	-   Distributed VCS
		- Git, Mercurial
	-   Remote (Central) VCS
		- Github, Bitbucket


###   Git

- git  init
- git add filename 
- git add filename1 filename5 filename100
- git add . or git add --all
- git status
- Do git configurations (set user.name and user.email)
- commit data with commit message
- Push thecode into Github


### HTML5

- Hyper Text Markup Language
- Semantic Elements
	- header
	- section
	- article
	- aside
	- footer
	- table

- Block Level Elements
	- h1 to h6
	- p
	- div
	- all semantic elements
	- Text will start from newline

- Inline Elements
	- span
	- img
	- a
	- nav
	- form
	- input
	- textarea
	- legend
	- sup
	- sub
	- ul
	- ol


Task :
======

- Audio
- Video
- canvas
- progress
- datalist
- meter
- select


### CSS

+ Cascading Style sheets
+ Types of CSS
	- Inline CSS
	- Internal CSS
	- External CSS

+ Syntax of CSS

```
selector {
	css properties
}
```

#### Selectors

+ Simple selectors
	- Universal selector (*)
	- By Element Name
	- Grouping selector (,)
	- Class selector (.)
	- Id selector (#)

+ Combinators
	+ Descendant selector ( )
	+ Child selector (>)
	+ Adjacent sibling selector (+)
	+ General sibling selector (~)
+ Pseudo class selector
+ Pseudo element selector
+ Attribute selector


### Box Modal

+  margin
+  border
+  padding
	- padding :10px (for alladjacent sides)
	- padding :10px 30px (10px for top & bottom;30px for left&right)
	- padding :10px 300px 50px (10px for top;300px for left&Right; 50px for bottom)
	- padding : 10px 30px 4px 50x (top,right,bottom,left)
+  width
-  1rem:16px



+ display
	- none
	- inline
	- block
	- inline-block
+ position
	- static
	- relative
	- absolute
	- fixed
	- sticky
+ algin-content
+ align-items
+ align-self


### Animations
### Responsive Web Design
#### Flex-box

- display
	- flex
		- flex-wrap
		- justify-content
		- flex-direction
		- flex-flow
Task2:
======

- Index.html
- Register.html
- Login.html

###  Media Quries

- Extra small devices (Mobiles )
	- max-width:600px
- Small devices (Large Phones)
	- min-width:600px
	-   768
- Medium Devices (small laptops)
	- min-width:768px
- Large Devices (Large laptops or desktops)
	- min-width:992px
- Extra Large Devices ()
	- min-width:1200px


```
@media only screen (min-width:320px) and (max-width:500px){
	CSS Code
}
```

### Bootstrap 4.6

- It is a CSS framework
Task3:
======

	- Navbar with Responsive

- module (collections of functions and classes )
- package (collections of modules)
- library (collection of packages)
- framework (collections of library)
 + module --> Package   --> Library --> Framework

 + Type of Modes
	- offline
	- online
		- CDN links

+ background-color - bg
+ text-white

+ Margin in Bootstrap (m-* (0-5))
	- 0  --> 0rem
	- 1  -->0.25rem (4px)
	- 2  --> 0.5rem (8px)
	- 3  --> 1rem (16px)
	- 4  --> 1.5rem (24px)
	- 5  --> 3rem (48px)
	- m (margin in all directions)
	- ml-5 (margin-left)
	- mt (margin-top)
	- mb (margin-bottom)
	- mr (margin-right)
+ Paading (padding-left --> pl-5)

+ colors
	- primary
	- secondary
	- info
	- success
	- warning
	- danger
	- light
	- dark
	- white

+ We can use color classes for
	-  Buttons (btn btn-primary)
	-  text  (text-white)
	-  background (bg-secondary)
	-  alerts (alert alert-primary)

+ Grid System
	-   col-sm-12
	- sm (small devices)
	- md (medium devices)
	- lg (large devices)
	- xl (Extra large devices)
+ Modal
+ Table


####  JavaScript

+ In 1995 `Brenden Eich` introdcued JavaScript (ES-262)
+ JavaScript loosely toupled and dynamic language
+ It is a text-based programming language and we can use in client-side and server-side (Node.js) for dynamic web applications
- ECMA-Script (ES-6)
	- let & const
	- map()
	- arrow function
	- classes
	- spread operator
	- rest parameter
+ Datatypes
	- Number
	- BigInt (2^53-1)
	- String
	- Boolean
	- Undefine
	- Null
	- Object
	- Array

+ variables
	- var, let & const
	- Scope  
		- function level --> var
		- block level   --> let & const
	- Redefine  --> Var, let
	- Redeclare  --> var
+ `typeof()`
+ Object

```
 {
	 name:"Kalyan"
 }
```
+ Array

### Alerts

+ To generate notifications
	- alert
	- prompt (to take input from the user)
	- confirm


+ console statements
	- `console.log()`
	- `console.info()`
	- `console.warn()`
	- `console.error()`

+ Spread Operator
 
	- To change array elements from one array to another(swamp)
```
	...variableName
```
+ Rest Parameter
	+ To handle function paramters

```
...parameter

```

+ Destructuring of Array & Objects


+ Functions

 - function with functionname
 ```
 function demo(x,y){
	 return x+y
 }
 demo()
 ```
 - Anonymous function
 ```
 let demo= function (x,y)
 {
	      return x+y
 }
 ```
 - Arrow function
 ```
 let demo=  (x,y) => {
	 return x*y
 }
 demo(3,4)
 ```

+ for-in
	- To get index values of an array
+ for-of
	- To get elements in an array

+ forEach() --> (ES-5)
+ map() -->  (ES-6)


###  DOM 

	- Document Object Model
	- document
	- history
	- window
	- navigator
+ DOM methods
	- `getElementById()`
	- `getElementsByClassName()`
	- `querySelector()`
	- `innerText`
	- `textContent`
	- `append`
	- `appendChild`
	- `innerHTML`
	- `setAttribute()`
	- `classList`
	- `style`
	- `src`

#### JSON
+ JavaScript Object Notation
	- To exchange information between application and server

```
{
	"name":"Kalyana Chakravarthi Paladugu",
	"salary":"6.5LPA",
	"designation":"MERN Developer",
	"mobile":9807654321
}
```
+ Ajax call or Promises (fetch API) or axios


#### ReactJS


###### ReactJS Features

+ It is a Library
+ It follows component based Architecture
	- Functional Component
	- Class Component
	- Pure Component
	- Higher Order Component
+ It provides Vitrual DOM
+ It provides JSX (JavaScript and XML)
+ Unidirectional data flow
+ Single Page Applications





+ Project Environment setup
	- [DownloadVisualStudioCode](https://code.visualstudio.com/download)
	- [DownloadNodejs](https://nodejs.org/en/download/)
	- install nodejs and check versions of `node` and `npm`
		- `node -v`
		- `npm -v`
	- `webpack` and `babel`
	- `create-react-app`
		- `npm install create-react-app`
			- `creat-react-app projectname`
	- `npx create-react-app appname`


+ Index.html
+ index.js
+ App.js
	+  IndexPage
		- nav.js
		- body.js
		- footer.js

		+ Home.js
			- nav
			- body
			- footer
		+ Login.js
		+ Register
		+ About
		+ contact


+ Props

	- To pass data from one component to another component we will use Props
	- Props are immutable

	+ UnionBank (Functional)
		- AndhraBank (Functional)
		- CorporationBank (Class)

+ States

	- In react to maintain information  we will use States
	- We can maintain states in class component only (Before react16.8 version)
	- To take state in react, Try to create constructor above render method and inside of class component
	- use `rconst` snippet
	```
	constructor(){
		super();
		this.state={

		}
	}
	```
	- To update the state information in class component use `setState()` method

+  To update the information inclass class component we have to follow component life cycle methods
	- `componentWillReceiveProps()`
	- `componentWillMount()`
	+ `componentDidMount()`
	- `shouldComponentUpdate()`
	- `componentWillUpdate()`
	- `componentDidUpdate()`
	- `componentWillUnmount()`
##### Hooks

+ from react 16.8 Hooks are introduced

- Parent - Child1 --> child2 --> child3
- `useState()`
- `useEffect()`
- `useMemo()`
- `useRef()`
- `useContext()`



##### Reference Links
- [Flaticon](https://www.flaticon.com/)
- [SVG Icons](https://freesvg.org/)
- [color codes](https://htmlcolorcodes.com/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)