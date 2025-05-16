const throttle = (fn,delay) => {
    let lastCall=0;
    return function(...args){
        const now = Date.now();
        if(now-lastCall < delay){
            return ;
        }
        lastCall=now;
        return fn(...args)
    }
     
}



const sendChatMessage=(message) => {
    console.log("Sending Message" , message);
}

const sendChatMessageThrottle = throttle(sendChatMessage,2*1000);

sendChatMessageThrottle("Hello")
sendChatMessageThrottle("Hello1")
sendChatMessageThrottle("Hello2")
sendChatMessageThrottle("Hello3")

