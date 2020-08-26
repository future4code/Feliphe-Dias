import moment from 'moment';
import * as fs from 'fs';
import { userInfo } from 'os';
import { isNullOrUndefined } from 'util';



type schedule = {
    title: string,
    description: string,
    init_date: moment.Moment,
    end_date: moment.Moment,
}

const fileData: string = fs.readFileSync('./build/Schedule.json').toString();
let calendar: schedule[] = [];

if( fileData.length !== 0){
        try{
            calendar = JSON.parse(fileData);
        }catch(erro){
            calendar = [];
            console.log('\n Erro while reading data-base');
        }
} else {
    calendar = [];
}


function createschedule( 
    title: string,
    description: string,
    init_date: moment.Moment,
    end_date?: moment.Moment,
){
    const newschedule: schedule = {
        title,
        description,
        init_date,
        end_date: end_date || init_date,
    }

     calendar = [...calendar, newschedule];
    
    try{
        const updateCalendar =  JSON.stringify(calendar);
        fs.writeFileSync('./build/Schedule.json',updateCalendar);

    }catch( error ){

    }
}

if( process.argv.length === 6 || process.argv.length === 5){
    const title: string = process.argv[2];
    const description: string = process.argv[3];
    const init_date: moment.Moment = moment(process.argv[4].toString(), 'DD/MM/YYYY');
    const end_date: moment.Moment = moment(process.argv[4].toString(), 'DD/MM/YYYY') || null;
     
    
    createschedule( 
        title,
        description,
        init_date,
        end_date,
    )
}