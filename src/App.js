import "./App.css";
import Route from "./route/index";
import React from "react";
function App() {
  // // To console saved cookies, FOR TESTING PURPOSE ONLY
  // const showCookies = () => {
  //   console.log("COOKIE Signin", document.cookie);
  // };

  // const clearCookies = () => {
  //   var Cookies = document.cookie.split(";");
  //   for (var i = 0; i < Cookies.length; i++)
  //     document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString();
  //   showCookies();
  // };

  // // To console saved cache, FOR TESTING PURPOSE ONLY
  // const showCache = () => {
  //   console.log("CACHE Signin", caches);
  // };

  // const clearCacheData = () => {
  //   caches.keys().then((names) => {
  //     names.forEach((name) => {
  //       caches.delete(name);
  //     });
  //   });
  //   showCache();
  // };

  // React.useEffect(() => {
  //   showCookies();
  //   showCache();
  //   clearCookies();
  //   clearCacheData();
  // }, []);

  return <Route />;
}

export default App;

// <div className="App">
//   <header className="App-header">
//   </header>
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
// </div>
