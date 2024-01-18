import react, {useEffect} from 'react';


import { isMobile,  browserName} from 'react-device-detect';

const App = ({})=>{


    useEffect(()=>{
        // const url = window.location.href.split('://');
        const url = ["https","payboxapp.page.link/v8J8svz3eUZqTWHG8"];
        if ( browserName === 'Facebook' && isMobile && url.length === 2) {
          
            window.location.replace(`intent://${url[1]}#Intent;scheme=${url[0]};package=com.android.chrome;end`);
          }
    else{
        window.location.replace("https://payboxapp.page.link/v8J8svz3eUZqTWHG8")
    }
    },[browserName])

    return <>גדוד 8149</>
    
}

export default App;
