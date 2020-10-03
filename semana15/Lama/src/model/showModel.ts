
export enum week_day{
	sunday = 'sunday',
	monday = 'monday',
	tuesday = 'tuesday',
	wednesday = 'wednesday',
	thursday = 'thursday',
	friday = 'friday',
	saturday = 'saturday',
}

export default interface showModel{
	id: string,         
 	week_day: week_day,   
	start_time: number, 
	end_time: number,    
	band_id: string,
}

