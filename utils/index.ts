import { CarProps } from "@/types";

export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': '14f5d2c954msh1a023ed04bd95edp134cd7jsnad54b66bcd5a',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {
        headers: headers
    });

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;

    const mileageFactor = 0.1;

    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle?:string ) => {
    
    
}