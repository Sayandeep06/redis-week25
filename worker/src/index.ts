import {createClient} from 'redis'

const client = createClient();

async function main(){
    await client.connect();
    while(1){
       const response = await client.brPop("submissions",0);
       //users code here 
       console.log(response)
       await new Promise((resolve)=> setTimeout(resolve, 1000))
       console.log("processed user submissons")
    }
}

main()