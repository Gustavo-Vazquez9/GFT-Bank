
    const loadCards = async () =>{
        try{

            const res =  await fetch('https://api-bank-gft-trainees-mx.herokuapp.com/api/catalogs/cards', {
                method: "GET",
                headers:{
                    "Content-Type":"application/json",  
                }
            })
            console.log(res)

            if (res.status === 202){
                const data = await res.json()
                console.log(data)

            }else if(res.status === 400){
                console.log('aun no tienes tarjetas')
            }
        }catch(error){
            console.log(error)
        }

            
}

const accounts = async () =>{
    try{

        const user = {
            "email":"oscar.ortiz@gft.com",
            "password": "kairos3"
        }

        const token= await fetch('https://api-bank-gft-trainees-mx.herokuapp.com/api/auth/user/authenticate?mail', {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(user)
        })
        console.log('token',token)

        const res =  await fetch('https://api-bank-gft-trainees-mx.herokuapp.com/api/accounts', {
            method: "GET",
            headers:{
                "Content-Type":"application/json",
                "x-acces-token":token
                /* "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWU2OWQ2ZGIwOGI2MDAxNjBjNmFkNSIsImVtYWlsIjoib3NjYXIub3J0aXozQGdmdC5jb20iLCJmaXJzdG5hbWUiOiJPc2NhcjIiLCJsYXN0bmFtZSI6Ik9ydGl6MiIsImlhdCI6MTY2NjgyMjg5NiwiZXhwIjoxNjY4MTE4ODk2fQ.gTiRwOcM-HdQZNkKz-56uirgDcQu0iewwPjWiUZJ7vs"
                 */
            }
        })
        console.log('res',res)

        if (res.status === 202){
            const data = await res.json()
            console.log(data)

        }else if(res.status === 400){
            console.log('aun no tienes tarjetas')
        }
    }catch(error){
        console.log(error)
    }

        
}
accounts()

loadCards()