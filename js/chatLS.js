export const getTalksLS = ()=>{
    
    return  JSON.parse(localStorage.getItem('talks')) || []
    
    
}