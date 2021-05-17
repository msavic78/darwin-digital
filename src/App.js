import './App.css';
import React from 'react';
import $ from 'jquery';
import gql from 'graphql-tag'

import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client"; 
import { onError} from "@apollo/client/link/error";
import GetUsers from './Components/getUsers';

const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`GraphQL error ${message}`);
    })
  }
});

const link = from ([
  errorLink,
  new HttpLink({ uri: "https://graphql-pokemon2.vercel.app/" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  
  
  React.useEffect(() => {

    // TASK #1

    // set columns
    let wrapper = ["wrapperA", "wrapperB", "wrapperC"];
    
    // fill in the columns   
    function addBoxes(wrapper) {
      let container = document.getElementById(wrapper);
      container.innerHTML = "";
      let letter = wrapper.slice(wrapper.length -1);
      for (var box = 0; box < 12; box++) {
        // check for column, set text style        
        switch(letter.toLowerCase()) {
          case "a":
            container.innerHTML = container.innerHTML +  "<div>" + letter.toLowerCase()  + "0" + box + "</div>";
            break;
          case "b":
            container.innerHTML = container.innerHTML +  "<div><b>" + letter.toLowerCase()  + "0" + box + "</b></div>";
            break;
          case "c":
            container.innerHTML = container.innerHTML +  "<div>" + letter.toLowerCase()  + "0" + box + "</div>";
          }
      }
    }
    // loop through columns
    for (let i=0; i<wrapper.length;i++) {
      addBoxes(wrapper[i]);
    }
    
    // tablet layout handler
    let A2 = $( "#wrapperA" ).clone();
    A2.addClass("wrapperAclone");
    A2.insertBefore( "#wrapperC");

    
    // TASK #2
    // getUsers.js   
 



    // TASK #3
    function getMaxPrimeFactor(num){
      let maxPrime=2;
      while (maxPrime<=num){
          if (num%maxPrime == 0){
              num/=maxPrime;    
          } 
          else {
              maxPrime++;
          }
      }
        $("#primeResult").append(number + " is number: " + maxPrime);
    }
    
    let number = 600851475143; 
    getMaxPrimeFactor(number);


  }, [])

  return <ApolloProvider client={client}>
      
    
     <div className="App">
      
       { /* TASK #1 */ }
      
       <header className="App-Header">
         <h1>Darwin-Digital Demo</h1>
         <h3>Task 1</h3>
        
       </header>

       <div id="wrapperMain">
         <div id="wrapperA"></div>
         <div id="wrapperB"></div>
         <div class="underline" id="wrapperC"></div>
       </div>

       {/* TASK #2 */}
       <h3 id="primeResult">Task 2 - Largest prime factor for number </h3>

      {/* TASK #3 */}
      <h3 >Task 3 - Pagination (Incomplete)</h3>

   </div>

    {/* TASK #3 */}
    <GetUsers />

  </ApolloProvider>;



  
}

export default App;
