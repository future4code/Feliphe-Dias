import axios, { AxiosResponse } from 'axios'

type dataSubscribers = {
    id: string,
    name: string,
    email: string
}

// 1 : C
export async function getAllSubscribers():Promise<any[]>{
    const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all';
    const users = await axios.get(baseUrl)
    return users.data;
}

// 2 B:

export const arrowGetAllSubscribers = async  ():Promise<any[]> => {
    const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all';
    const users = await axios.get(baseUrl)
    return users.data;
}

// 3: C
export async function IJustClipAndPastTheSameFunction():Promise<dataSubscribers[]>{
    const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all';
    const users = await axios.get(baseUrl)
    return users.data;
}

type news = {
    title: string,
	content: string,
	date: number
}

export async function createNew(
    title: string,
    content: string,
    date: number,
): Promise<void>{
    const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews/news';
    const body: news = {
        title,
        content,
        date,
    }
    const data = await axios.put(baseUrl, body);
}

// export async function sentNotifications( 
//     users: dataSubscribers[], 
//     message: string,
//     ): Promise<void>{

//     const baseUrl: string = `https://us-central1-labenu-apis.cloudfunctions.net/labenews/notifications/send`;
//     type message = {
//         subscriberId: string,
//         message: string,
//     }    
//      for( let user of users) {
//         const body : message = {
//             subscriberId: user.id,
//             message,
//         }
//         await axios.post(baseUrl, body);
//         console.log('menssage send to ', user.name)
//     }
//     console.log('done');
// }



export async function sentNotifications( 
    message: string,
    ): Promise<void>{
    const users: Array<dataSubscribers> = await IJustClipAndPastTheSameFunction();
    const baseUrl: string = `https://us-central1-labenu-apis.cloudfunctions.net/labenews/notifications/send`;
    type message = {
        subscriberId: string,
        message: string,
    }   
    const promissesArray: Promise<any>[] = []; 

     for( let user of users) {
        const body : message = {
            subscriberId: user.id,
            message,
        }
       promissesArray.push( axios.post(baseUrl, body));
    }
    await Promise.all(promissesArray);
    console.log('All notifications sent');
}

export async function createUser(
    name: string,
    email: string,
): Promise<void>{

    const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers';
    const body: {name: string, email: string} = {
        name,
        email,
    }
    const data = await axios.put(baseUrl, body);
}


export async function publishNews(
    title: string,
    content: string,
    date: number,
): Promise<void>{
    const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews/news';
    const body: news = {
        title,
        content,
        date,
    }
    const data = await axios.put(baseUrl, body);
    await sentNotifications(`Veja a nova notícia, ${title}`);
}

export async function getAllNotifications():  Promise<any[]> {
    const users: Array<dataSubscribers> = await IJustClipAndPastTheSameFunction();
    const promissesArray = [];
    
    for( let user of users) {
       promissesArray.push( axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/${user.id}/notifications/all`) );
    }
   const notifications =  await Promise.all(promissesArray);
   return notifications.map( res => res.data);
    
}