import '@/assets/css/style.css'

import '@fortawesome/fontawesome-free/js/all.js'
import '@fortawesome/fontawesome-free/css/all.css'

import {
  showNotification,
  stickyNav,
  sortTeam,
  showNav,
  showLogin,
  showSignup,
  slider,
} from './main'

console.log('You are viewing the My HOME Page')

// DOM SELECTING
/*
parent.chidren - is a nodelist of emlements
parent.firstElementChild - is first 1 element node
parent.lastElementChild - is last 1 element node
node.nextElementSibling - is immediate after element node
node.previousElementSibling - is immediate before element node
node.parentNode - is the parent of the current node

node.insertBefore(newNode, referenceNode) - insert a node
parent.replaceChild(new, old) - replace node inside parent with another node

The main difference between children and childNodes property is that children work upon
elements and childNodes on nodes including non-element nodes like text and comment nodes.
*/

console.log(' ')
console.log('--- PARENT CHILDREN SIBLINGS ---')
let docBody = document.body
let docHead = document.querySelector('head')
let fcDocBody = docBody.firstChild.nodeName
let lcDocBody = docBody.lastChild.nodeName
let chBody = document.body.children // Element Nodes only
let cnBody = document.body.childNodes // All Nodes, not an Array but array like

console.log(document.documentElement.parentNode) // document
console.log(docBody.parentNode)
console.log(`First child node of body is: ${fcDocBody} Node`)
console.log(`Last child node of body is: ${lcDocBody} Node`)
console.log(docHead.nextSibling)
console.log(docBody.previousSibling)
console.log(chBody)
console.log(cnBody)

// TRAVERSING THE DOM
/*
1 	Element: Represents an element = Element, Text, Comment, ProcessingInstruction, CDATASection, EntityReference
2 	Attr: Represents an attribute = Text, EntityReference
3 	Text:	Represents textual content in an element or attribute = None
4 	CDATASection:	Represents a CDATA section in a document (text that will NOT be parsed by a parser) = None
5 	EntityReference: Represents an entity reference =	Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
6 	Entity: Represents an entity 	Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
7 	ProcessingInstruction: Represents a processing instruction =	None
8 	Comment: Represents a comment = None
9 	Document: Represents the entire document (the root-node of the DOM tree) =	Element, ProcessingInstruction, Comment, DocumentType
10 	DocumentType: Provides an interface to the entities defined for the document = None
11 	DocumentFragment: Represents a "lightweight" Document object, which can hold a portion of a document =	Element, ProcessingInstruction, Comment, Text, CDATASection, EntityReference
12 	Notation: Represents a notation declared in the DTD =	None
*/
console.log(' ')
console.log('--- DOM COLLECTON ---')
let eleTrav = document.querySelector('#j-trav')
let travChildren = eleTrav.children
let travCNodes = eleTrav.childNodes
console.log(travChildren)
console.log(travCNodes)

// get all divs in the document
let allArticles = eleTrav.getElementsByTagName('article')
console.log(allArticles)

let h1 = eleTrav.firstElementChild
let art2 = eleTrav.children[2]
let art1 = art2.previousElementSibling
let lists = art2.nextElementSibling

console.log(h1.textContent)
console.log(art1)
console.log(art2)
console.log(lists)

console.log(' ')
console.log('--- ATTRIBUTE NODES ---')
console.log(h1.dataset)
console.log(h1.dataset['name'])

console.log(' ')
console.log('--- ATTRIBUTE NODES ---')
let ul = document.querySelector('.j-list')
let ulC = ul.querySelector('.list-1')
let list = ulC.children
let addN = list[3]

let newNode = document.createElement('li')
newNode.className = 'px-6 py-2 border-b border-gray-200 w-full rounded-t-lg'
newNode.textContent = 'A Node inserted by JS'
ulC.insertBefore(newNode, addN)

let firstN = document.createElement('li')
firstN.className = 'px-6 py-2 border-b border-gray-200 w-full rounded-t-lg'
firstN.textContent = 'A Node  replaced by JS'
ulC.replaceChild(firstN, list[0])

console.log(ulC)
console.log(list)
console.log(addN)

// HTML CONTENT Creation/Manipulation
/*
document.createElement(tagname) - returns 1 node
document.createTextNode(text) - returns 1 text node
parent.appendChild(node) - add child to parent
parent.removeChild(node) - removes node from parent

element.innerHTML
element.textContent
*/

const listNCollection = () => {
  let elTravers = document.getElementById('j-trav')
  // let d = main.ownerDocument //the document object that main belongs to
  // let html = document.documentElement //the <html> element
  // let body = document.body // the <body>

  console.log(' ')
  console.log('--- NODES vs ELEMENT NODES ---')

  let df = new DocumentFragment()
  let txt = document.createTextNode('a text node')
  df.appendChild(txt)
  elTravers.appendChild(df)
  let nodeTypes = {
    1: 'Element',
    3: 'Text',
    8: 'Comment',
    9: 'Document',
    10: 'DocType',
    11: 'Document Fragment',
  }

  let mainChildren = elTravers.children //Elements only, HTMLCollection
  let num = mainChildren.length
  for (let i = 0; i < num; i++) {
    let nt = mainChildren[i].nodeType
    console.log('elTravers.children', i, nodeTypes[nt])
  }
  console.log(' ')
  let mainChildNodes = elTravers.childNodes //Nodes, NodeList [LIVE]
  let numNodes = mainChildNodes.length
  for (let n = 0; n < numNodes; n++) {
    let nt = mainChildNodes[n].nodeType
    console.log('elTravers.childNodes', n, nodeTypes[nt])
  }
  console.log(' ')
  let doc = document.childNodes
  let numDocNodes = doc.length
  for (let c = 0; c < numDocNodes; c++) {
    let nt = doc[c].nodeType
    console.log('document.childNodes', c, nodeTypes[nt], doc[c].nodeName)
  }
  console.log(' ')
  //NodeList
  document.querySelectorAll('.abc')
  document.body.childNodes

  //HTMLCollections
  elTravers.getElementsByClassName('.abc')
  elTravers.getElementsByTagName('pre')
  // main.getElementsByTagNameNS('xml')
  elTravers.children

  /*******************************
Be careful when using
firstChild      v. firstElementChild
lastChild       v. lastElementChild
nextSibling     v. nextElementSibling
previousSibling v. previousElementSibling
NODES           v. ELEMENTS
*******************************/
}

const createFeature = () => {
  let secFeatures = document.querySelector('.j-features')

  let div = document.createElement('div')
  div.innerHTML = `
  <i class="fa fa-fan text-2xl text-green-500"></i>
  <h3 class="mb-2 text-xl font-bold text-gray-400">JS Gnerated card</h3>
  <p class="text-gray-500 dark:text-gray-400">
  Keep your company’s lights on with customizable, iterative, and structured workflows
  built for all efficient teams and individual.
  </p> 
`
  secFeatures.appendChild(div)

  // Adds a UList
  let ul = document.createElement('ul')
  let h3 = document.createElement('h3')
  let i = document.createElement('i')
  i.className = 'fa fa-fan text-2xl text-green-500'
  h3.className = 'text-lg font-bold text-gray-400'
  h3.textContent = 'JS Generated List'
  ul.appendChild(i)
  ul.appendChild(h3)
  secFeatures.appendChild(ul)

  let movies = ['Legal', 'Compliance', 'Risk']
  movies.forEach((item) => {
    let li = document.createElement('li')
    li.className = 'text-md text-gray-400'
    let txt = document.createTextNode(item)
    li.appendChild(txt)
    ul.appendChild(li)
  })
}

const randomImage = () => {
  //declare an array to store the images
  let randomImage = new Array()

  //insert the URL of images in array
  randomImage[0] = '/img/pf-1.jpg'
  randomImage[1] = '/img/pf-2.jpg'
  randomImage[2] = '/img/pf-3.png'
  randomImage[3] = '/img/pf-4.png'
  randomImage[4] = '/img/pf-5.jpg'
  randomImage[5] = '/img/pf-6.jpg'
  randomImage[6] = '/img/pf-7.png'
  randomImage[7] = '/img/pf-7.png'
  randomImage[8] = '/img/pf-8.jpg'

  //generate a number and provide to the image to generate randomly
  let number = Math.floor(Math.random() * randomImage.length)

  let imgSet = document.querySelectorAll('.keki')

  for (let node of imgSet) {
    // console.log(node) // shows all nodes from the collection
    node.innerHTML = '<img src="' + randomImage[number] + '" />'
  }

  //return the images generated by a random number
  // return (imgSet[2].innerHTML = '<img src="' + randomImage[number] + '" />')
}

const abtComponent = () => {
  const elAbt = document.querySelector('.j-about')
  let txtSpan = elAbt.querySelector('span')
  txtSpan.textContent = 'Magic of JS'

  let txtHead = elAbt.querySelector('h2')
  txtHead.textContent = 'Images & content is manipulated by Vanilla JS'

  // console.log(txtHead.textContent)
}

//fetch using a Request and a Headers objects
const userComponent = () => {
  const uri = 'https://randomuser.me/api/?results=8'

  let req = new Request(uri, {
    method: 'GET',
    mode: 'cors',
  })

  fetch(req)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('BAD HTTP!')
      }
    })
    .then((data) => {
      //console.log(data);

      let users = data.results
      let htmlOut = ''
      let df = new DocumentFragment()

      users.forEach((user) => {
        htmlOut += `
        <div class="w-full md:w-1/2 lg:w-1/4 p-4">
        <div class="p-6 bg-blue-100 rounded-2xl">
          <div class="j-iu-cont flex items-center mb-6 h-16 bg-gray-600">
            <span
              class="flex-shrink-0 inline-flex justify-center items-center mr-3 w-16 h-16 rounded-full"
            >
              <img
                class="j-u-pic w-16 h-16 rounded-full object-cover object-top"
                src="${user.picture.large}"
                alt=""
              />
            </span>
            <div>
              <p class="j-u-name text-md text-gray-300 font-bold">${user.name.first}</p>
            </div>
          </div>
          <div class="j-d-cont">
            <div class="flex items-center mb-3 pl-3">
              <span class="mr-3">
                <i class="fa fa-regular fa-address-card text-xl"></i>
              </span>
              <span class="j-u-email text-sm text-gray-800">${user.email}</span>
            </div>
            <div class="flex items-center mb-3 pl-3">
              <span class="mr-3">
                <i class="fa-solid fa-globe"></i>
              </span>
              <span class="j-u-web text-sm text-gray-800">${user.location.city}, ${user.location.country}</span>
            </div>

            <div class="flex items-center mb-3 pl-3">
              <span class="mr-3">
                <i class="fa-solid fa-globe"></i>
              </span>
              <span class="j-u-add text-sm text-gray-800">${user.cell}</span>
            </div>

            <div class="flex items-center justify-between mb-10 pl-3">
              <div class="flex items-center">
                <img
                  class="w-8 h-8 rounded-full object-cover object-right"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                />
                <img
                  class="w-8 h-8 -ml-2 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                  alt=""
                />
                <img
                  class="w-8 h-8 -ml-2 rounded-full object-cover object-top"
                  src="https://images.unsplash.com/photo-1528936466093-76ffdfcf7a40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                  alt=""
                />
                <div
                  class="inline-flex -ml-2 items-center justify-center w-8 h-8 rounded-full bg-indigo-50 text-xs font-medium text-indigo-500"
                >
                  +3
                </div>
              </div>
              <a href="#">
                <svg
                  width="16"
                  height="16"
                  viewbox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00001 6.66666C7.26363 6.66666 6.66668 7.26362 6.66668 8C6.66668 8.73637 7.26363 9.33333 8.00001 9.33333C8.73639 9.33333 9.33334 8.73637 9.33334 7.99999C9.33334 7.26362 8.73639 6.66666 8.00001 6.66666Z"
                    fill="#E1E4E8"
                  ></path>
                  <path
                    d="M12.6667 6.66666C11.9303 6.66666 11.3333 7.26362 11.3333 8C11.3333 8.73637 11.9303 9.33333 12.6667 9.33333C13.403 9.33333 14 8.73637 14 7.99999C14 7.26362 13.403 6.66666 12.6667 6.66666Z"
                    fill="#E1E4E8"
                  ></path>
                  <path
                    d="M3.33332 6.66666C2.59694 6.66666 1.99999 7.26362 1.99999 8C1.99999 8.73637 2.59694 9.33333 3.33332 9.33333C4.0697 9.33333 4.66666 8.73637 4.66666 7.99999C4.66666 7.26362 4.0697 6.66666 3.33332 6.66666Z"
                    fill="#E1E4E8"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="relative w-full h-1 mb-3 rounded-full bg-gray-50">
              <div class="absolute top-0 left-0 h-full w-1/2 rounded-full bg-purple-500"></div>
            </div>
            <div class="flex items-center">
              <span
                class="inline-block py-1 px-2 mr-2 bg-indigo-50 rounded-full text-xs text-indigo-500"
                >Phase 2</span
              >
              <span class="text-xs text-gray-500 font-medium">Implementation</span>
            </div>
          </div>
        </div>
      </div>`
      })

      //Show On Our Screen All Data
      document.querySelector('.j-user-cont').innerHTML = htmlOut
    })
    .catch((err) => {
      console.log('ERROR:', err.message)
    })
}

// showLogin()
showSignup()
stickyNav()
sortTeam()
showNotification()
listNCollection()
randomImage()
abtComponent()
slider()
userComponent()
createFeature()
sortTeam()
