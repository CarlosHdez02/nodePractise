import express from 'express'

//console.log(comments)

const fetchEndPoint = async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json()
        console.log(data)
    }catch(err){
        console.error(`Could not fetch, error: ${err}`)
    }
}

const fetchEvenId = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json()
        //We want to fetch the Id, so we must access data.id
        const evenId = data.filter((data)=>  data.id%2 === 0)
        console.log(evenId)
    }catch(err){
        console.log(`Error: ${err}`)
    }
}
const fetchIdnName = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json()
        //We gotta destructure what we want from the endpoint
        const results = data.map(( {id,name})=>({id,name}) )
        console.log(results)
    }catch(err){
        console.error(`Error: ${err}`)
    }
}
const fetchEmail = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        
        const result = data
            .map(({ email }) => email) // Extract emails
            .filter(email => {
                const domainPart = email.split('@')[1];
                const parts = domainPart.split('.');

                const topLevelPart = parts[parts.length - 1];
                return topLevelPart.length === 2;
            });
        
        console.log(result);
    } catch (err) {
        console.error(err);
    }
};
//Fetch the ones whose titles are longer than 50
const fetchTitles = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        
        const data = await response.json()
        //Return the ones that have a title Longer than 50 chars
        const result = data.filter((data)=> data.title.length > 50)
        console.log(result)
    }catch(err){
        console.log(`Error :${err}`)
    }
}
//fetchTitles()

//Fetch users and extract names and userNames
const fetchUsers = async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        const result = data.map(({name,username})=>({name,username}))
        console.log(result)
    }catch(err){
        console.error(`Error at fetching :${err}`)
    }
}
//Status = true
const fetchTodoStatus = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        const result = data.filter(data=>data.completed === true)
        console.log(result)
    }catch(err){
        console.error(`Error when fetching`)
    }
}
//Fetch Post and extract UserId and Title
const fetchIdTitle = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        const result = data.map(({userId,title})=>({userId,title}))
        console.log(result)
    }catch(err){
        console.error(`Error:${err}`)
    }
}
//Fetch Albums and filter by userId

const fetchUserId = async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        const data = await response.json()
        const result = data.filter(data=>data.id)
        console.log(result)
    }catch(err){
        console.error(`Error :${err}`)
    }
}
//Fetch comments and extract emails from specific postID
const fetchCommentsEmails = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json()
        const result = data.map(({email,postId})=>({email,postId}))
        console.log(result)
    }catch(err){

    }
}

//Fetch users by companyName

const fetchByCompanyName = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        const result = data.filter(company=>company.name)
        console.log(result)
    }catch(err){
        console.log(`Error: ${err}`)
    }
}
fetchByCompanyName()
//fetchCommentsEmails()
//fetchUserId()
//fetchIdTitle()
//fetchTodoStatus()
//fetchUsers()
//fetchEmail();
//fetchIdnName()
//fetchEndPoint()
//fetchEvenId()